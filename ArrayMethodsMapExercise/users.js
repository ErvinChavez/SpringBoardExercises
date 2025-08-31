//MY ATTEMPT......

const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

function fullInfo(arr, callback) {
	const infoValues = [];
	// const membershipStatus = [];
	for (let i = 0; i < arr.length; i++) {
		infoValues.push(callback(arr[i]));
	}
	return infoValues;
}

const nameOfPerson = fullInfo(users, function(infoValues) {
	let membershipStatus = ""
	if (infoValues.points > 100) {
		membershipStatus = "Premium"
		
	} else {
		membershipStatus = "Standard"
		
	}
	return infoValues.firstName + ' '+ infoValues.lastName + " Membership Status: " + membershipStatus;
});


//Notes: I was thinking way too much about this and over complicated it! All I needed to start after was
//const newUsers = users.map(function (user) {
	//return {}
	//}