// arrays

let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

console.log(courses[0]); // WDD131
console.log(courses[3]);

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

// array methods/functions

courses.forEach((course) => {
    console.log(course);
});

courses.push("CSE220");

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 2,
    instructor: "Brother Warner"
}
console.clear();
console.log(course.name);

let coursesArrayOfObjects = [
    {
        name: "Dynamic Web Fundamentals",
        code: "WDD131",
        credits: 2,
        assignments: ["Assignment 1", "Assignment 2", "Assignment 3"],
    },
    {
        name: "Web Fundamentals",
        code: "WDD130",
        credits: 2,
        assignments: ["Assignment 1", "Assignment 2", "Assignment 3"],
    }];

console.log(coursesArrayOfObjects[1].code);
console.log(coursesArrayOfObjects[1].assignments[0]);

let body = document.querySelector("body");

coursesArrayOfObjects.forEach((course) => {
  let courseDiv = `
    <div>
      <h2>${course.name}</h2>
      <p>Code: ${course.code}</p>
      <p>Credits: ${course.credits}</p>
    </div>
  `;

  body.insertAdjacentHTML("beforeend", courseDiv);
});