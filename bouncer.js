// Be the bouncer

// Instructions
// 1. You are working at a very fancy new nightclub and in charge of letting people in based on their age.
// 2. If they are not 18-years-old and above, you cannot let them in. Please send them a nice personalized message letting them know
// 3. In your log message, not if they are a Mr or Ms depending on their gender. 

const nightClubRegister = [
  {
    name: 'Tony',
    lastname: 'Stark',
    age: 25,
    gender: 'male'
  },
  {
    name: 'Harry',
    lastname: 'Potter',
    age: 16,
    gender: 'male'
  },
  {
    name: 'Hermione',
    lastname: 'Granger',
    age: 17,
    gender: 'female'
  },
  {
    name: 'Steve',
    lastname: 'Rogers',
    age: 62,
    gender: 'male'
  }
]

nightClubRegister.forEach(person => {
    let address = "";
    if (person.gender === "male") {
        address = "Mr."
    } else {
        address = "Ms."
    }

    if (person.age >= 18) { 
        console.log(`${address} ${person.name} ${person.lastname} is allowed in. 😎`);
    } else {
        console.log(`${address} ${person.name} ${person.lastname} is not allowed in. 😠`);
  }
});