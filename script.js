let myResume={
    "basics": {
      "name": "VINOTHKUMAR J",
      "email": "vinothkumarj4140@gamil.com",
      "phone": 9597362954,
      "d.o.b": "04-06-1996",
      "age": 28,
      "degree": "B.E-Mechanical Engineering",
      "location": {
        "address": "No.116, sathya nagar,Jakkampatty",
        "postalCode": 625512,
        "city": "Andipatty",
        "district": "Theni",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "website": "https://www.linkedin.com/in/vinothkumar-j-6b5050229",
          "github":"https://github.com/vinothkumarFSD"
        }
      ]
    },
    "work": [
      {
        "company": "Layam Groups",
        "position": "Engineer-Manufacturing",
        "startDate": "2024-04-25",
        "endDate": "2024-10-30",
        "summary": "i am the process engineer who handling various task and gaining lots of experience",
      },
      {
        "company": "Matrix Castings",
        "position": " Process Engineer",
        "startDate": "2023-01-02",
        "endDate": "2024-04-24",
        "summary": "i am the process engineer who handling various task and gaining lots of experience",
      },
      {
        "company": "Parkshine Plasto Components",
        "position": "Process planning and control Engineer",
        "startDate": "2020-08-25",
        "endDate": "2022-12-31",
        "summary": "i am the process engineer who handling various task and gaining lots of experience",
      },
      {
        "company": "Hi-lex india pvt ltd",
        "position": "Quality Engineer",
        "startDate": "2018-03-25",
        "endDate": "2020-03-30",
        "summary": "i am the Quality engineer who handling inspection and gaining lots of experience",
      },
      {
        "company": "Lavan Technology",
        "position": "Quality Engineer",
        "startDate": "2017-08-15",
        "endDate": "2018-02-25",
        "summary": "i am the Quality engineer who handling inspection and gaining lots of experience",
      },      
    ],
    "education": [
      {
        "institution": "M.A.M College Of Engineering",
        "department": "Mechanical",
        "studyType": "fulltime",
        "batch start year": 2013,
        "batch end year": 2017,
        "cgpa": 6.85,
      }
    ],
    "skills": [
      {
        "name": "React js,javascript,HTML5,CSS",
        "level": "beginer",
        "project": [
          "1.Calculator app design using JS,HTML,CSS language",
          "2.Form design using JS,HTML,CSS language"
        ]
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    "interests": [
      {
        "name": "Software web developer,",
      }
    ]
  }
 

  
var json = [myResume];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];
    console.log(`Name : ${obj.basics.name}`);
    console.log(`Age : ${obj.basics.age}`);
    console.log(`D.O.B : ${obj.basics["d.o.b"]}`);
    console.log(`Mailid : ${obj.basics.email}`);
    console.log(`Degree : ${obj.basics.degree}`);
    console.log(`Department : ${obj.education[0].department}`);
    console.log(`Website : ${obj.basics.profiles[0].website}`);    
    console.log(`Skills : ${obj.skills[0].name}`);
    console.log(`List of companies : 1.${obj.work[0].company},2.${obj.work[1].company},
        3.${obj.work[2].company},4.${obj.work[3].company},5.${obj.work[4].company}`);
}

//for Each
 //json.forEach(function(obj) { console.log(obj.basics.name); });

// //for In
//for (var key in json) {
//if (json.hasOwnProperty(key)) {
//   console.log(json[key].basics.name);
//   console.log(json[key].skills);
//  }
//  }






  