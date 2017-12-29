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
  var matches = false; // flag for whether or not a contact exists
  
  console.log("\t\t\t--><-- ");
  console.log("> contacts.length: " + contacts.length);
  console.log("> Searching for: " + firstName + ", " + prop);
  
  while (i < contacts.length){
    if (firstName == contacts[i].firstName){
      console.log("> " + contacts[i].firstName + " is a CONTACT!");
      if(contacts[i][prop]){
        console.log("> prop = " + contacts[i][prop]);
        return contacts[i][prop];
      } else { 
        console.log("> *************************************");
        console.log(">>> NO SUCH PROPERTY: " + prop);
        console.log("> *************************************");
        return "No such property";
      }
      matches = true;
      
      for (var j in contacts[i].prop){
        console.log(">\tFirst Name: " + contacts[i].firstName + " - prop: " + contacts[i].prop);
      }
    }
    i++;
  }
  
  if (matches == false){
    console.log("> *************************************");
    console.log(">>> NO SUCH CONTACT: " + firstName);
    console.log("> *************************************");
    return "No such contact";
  }
  
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
