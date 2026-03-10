//import supertest so we can simulate HTTP request to our API
const request = require('supertest');

//import chai for assertions
const { expect } = require('chai');

//for DB connection
const mongoose = require('mongoose');

//to clear users
const User = require('../models/users');
//to clear dogs
const Dog = require('../models/dogs');

//import the Express app
//this allows supertest to run requests against the server
const app = require('../app');

//store token globally so multiple tests can use it
let token;

//store created dog ID for later tests
let dogID;

describe('Dog Adoption Platform API Tests', () => {
    //-------Run once before all tests-----
    before(async () => {
        //wait for DB connection
        await mongoose.connect(process.env.MONGODB_URI);
        //clear Users and Dogs collections to ensure clean slate
        await User.deleteMany({});
        await Dog.deleteMany({});
    });

    //disconnect from DB after all tests
    after(async () => {
        await mongoose.connection.close();
    })


    //-------Test 1: Check if Server is running--------
    it('should return API running message', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Dog Adoption Platform API is running');
    });

    //-------Test 2: Register user---------
    it('should register a new user', async () => {
        const res = await request(app)
          .post('/auth/register')
          .send({
            username: 'testuser',
            password: 'password123'
          });
        
        expect(res.status).to.equal(201);
    });

    //-------Test 3: Login user--------
    it('should login user and return JWT token', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({
                username: 'testuser',
                password: 'password123'
            });
        expect(res.status).to.equal(200);

        expect(res.body.token).to.exist;

        //save token for later tests
        token = res.body.token;

    });

    //-------Test 4: Register a dog---------
    it('should allow logged-in user to register a dog', async () => {
        const res = await request(app)
          .post('/dogs')

          //attach authentication header
          .set('Authorization', `Bearer ${token}`)

          //send dog data
          .send({
            name: 'Buddy',
            description: 'Friendly golden retriever'
          });

        expect(res.status).to.equal(201);

        //save dog ID for possible future tests
        dogID = res.body._id;

    });

    //------------Test 5: Adopt a dog---------
    it('should allow a user to adopt a dog they did not register', async () => {
        //for testing ownership rules, we need a second user
        //step 1: register second user
        const resUser2 = await request(app)
          .post('/auth/register')
          .send({ username: 'adopter', password: 'password123'});
        expect(resUser2.status).to.equal(201);

        //step 2: login second user
        const resLogin2 = await request(app)
          .post('/auth/login')
          .send({ username: 'adopter', password: 'password123'});
        expect(resLogin2.status).to.equal(200);
        const adopterToken = resLogin2.body.token;

        //step 3: adopte the dog created by the first user
        const resAdopt = await request(app)
          .post(`/dogs/${dogID}/adopt`)
          .set('Authorization', `Bearer ${adopterToken}`)
          .send({ message: "Thanks for sharing Buddy!" });
        
        expect(resAdopt.status).to.equal(200);
        expect(resAdopt.body.dog.adoptedBy).to.exist;
        expect(resAdopt.body.dog.status).to.equal('adopted');
    });

    // //-------Clean up after all tests--------
    // after(async () => {
    //     await User.deleteMany({});
    //     await Dog.deleteMany({});
    //     await mongoose.disconnect();
    // });
});
