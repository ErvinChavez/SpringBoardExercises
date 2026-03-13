const Event = require("./models/event");
const { dateToString } = require("../helpers/date");
const { user } = require("./merge");

const transformEvent = (event) => {
  return {
    ...event._doc,
    _id: event.id,
    date: new Date(event.doc.date),
    creator: user.bind(this, event.creator),
  };
};

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map((event) => {
        return transformEvent(event);
      });
    } catch (err) {
      throw err;
    }
  },
  createEvent: async (args) => {
    const event = new Event({
      title: args.eventInput.title,
      description: args.eventInput.description,
      price: args.eventInput.price,
      date: new Date(args.eventInput.date),
      //creator: 'dfgalskj fdaslk5te5t4e
    });
    let createdEvent;
    try {
      const result = await event.save();
      createdEvent = transformEvent(result);
      const creator = await User.findById("dfgalskjfdaslk5te5t4e");

      if (!creator) {
        throw new Error("User not found.");
      }
      creator.createdEvents.push(event);
      await creator.save();

      return createdEvent;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
};
