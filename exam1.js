var person = {
  _id: "61196afdc65576690447a906",
  index: 108,
  isActive: true,
  balance: 8675.11,
  age: 44,
  eyeColor: "blue",
  name: "Cruz Harrell",
  gender: "male",
  email: "cruzharrell@isonus.com",
  tags: ["quis", "sunt", "veniam"],
  location: {
    longitude: 95.78477386810204,
    latitude: 137.7368897364291,
  },
  subordinates: [
    {
      _id: "61196afd27b4d98a282b3a46",
      index: 14,
      isActive: false,
      balance: 6931.6,
      age: 51,
      eyeColor: "brown",
      name: "Katherine Cohen",
      gender: "female",
      email: "katherinecohen@ecraze.com",
      tags: ["labore", "laboris", "esse", "veniam"],
      location: {
        longitude: 98.3622884926526,
        latitude: 124.73887209781748,
      },
      subordinates: [],
    },
    {
      _id: "61196afd27b4d98a282b3a46",
      index: 14,
      isActive: false,
      balance: 6931.6,
      age: 51,
      eyeColor: "brown",
      name: "natsu dragneel",
      gender: "male",
      email: "natsu@dragneel.com",
      tags: ["labore", "laboris", "esse", "veniam"],
      location: {
        longitude: 98.3622884926526,
        latitude: 124.73887209781748,
      },
      subordinates: [
        {
          name: "pritom",
        },
      ],
    },
    {
      _id: "61196afd27b4d98a282b3a46h",
      index: 14,
      isActive: false,
      balance: 6931.6,
      age: 51,
      eyeColor: "brown",
      name: "roronowa soro",
      gender: "male",
      email: "roronowa@soro.com",
    },
  ],
};

// return names of all subordinates of person
var example1 = (person) => {
  //   if (person.subordinates) {
  //     var a = person.subordinates.map((subordinate) => {
  //       return subordinate.name;
  //     });
  //     return a;
  //   }
};
// console.log(example1(person));

// return company name from email address
var exercise11 = (email) => {
  //   var companyName = "";
  //   var a = splitter(email, "@");
  //   if (a.length > 0) {
  //     var name = a[1];
  //     var b = splitter(name, ".");
  //     companyName = b[0];
  //   }
  //   return companyName;
};

function splitter(email, seperator) {
  var emailSeperator = email.split(seperator);
  return emailSeperator;
}

// console.log(exercise11("cruzharrell@isonus.com"));

// given a person, return list of companies of her subordinates
var exercise12 = (person) => {
  //   var companies = [];
  //   for (var i = 0; i < person.subordinates.length; i++) {
  //     var email = person.subordinates[i].email;
  //     var companyName = "";
  //     var a = email.split("@");
  //     if (a.length > 0) {
  //       var b = a[1];
  //       var c = b.split(".");
  //       companyName = c[0];
  //       companies.push(companyName);
  //     }
  //   }
  //   return companies;
};

// console.log(exercise12(person));

// given a person and gender, return number of subordinates of person of given gender
var example2 = (person, gender) => {
  //   var count = 0;
  //   for (var i = 0; i < person.subordinates.length; i++) {
  //     var newGender = person.subordinates[i].gender;
  //     if (newGender === gender) {
  //       count++;
  //     }
  //   }
  //   return count;
};
// console.log(example2(person, "female"));

// given a person, return the names of subordinates who themselves have subordinates
var exercise22 = (person) => {
  //   var names = [];
  //   for (var i = 0; i < person.subordinates.length; i++) {
  //     var subordinatesName = [];
  //     var haveSuboridinates = person.subordinates[i].subordinates;
  //     if (haveSuboridinates) {
  //       subordinatesName = person.subordinates[i].name;
  //       names.push(subordinatesName);
  //     }
  //   }
  //   return names;
};
// console.log(exercise22(person));

// Make it backwords
// var a = [5, 4, 3, 2, 1];
// var reverseOfA = a.reverse();
// console.log(reverseOfA);
