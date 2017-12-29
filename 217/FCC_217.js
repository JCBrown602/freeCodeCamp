//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
  var i = 0;
  var matches = 0;
  console.log("> contacts.length: " + contacts.length);
  while (i < contacts.length){
    //console.log("> Contact Number: " + i + ", Searching for: " + firstName + ", " + prop);
    //console.log("> contacts[i].firstName: " + contacts[i].firstName);
    if (firstName == contacts[i].firstName){
    console.log("> Contact Number: " + (i+1) + ", Searching for: " + firstName + ", " + prop);
      console.log("> " + contacts[i].firstName + " is a CONTACT!");
      matches += 1;
    }
    i++;
  }
  if (matches == 0){
    console.log(">>> NO SUCH CONTACT: " + firstName);
    return "No such contact";
  }
  console.log(" ");
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
