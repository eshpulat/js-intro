const students = [
    {
        name: "Alice",
        age: 20,
        grade: "A",
        courses: ["Math", "Science", "Literature"]
    },
    { name: "Bob", age: 22, grade: "B", courses: ["History", "Math", "Art"] },
    {
        name: "Charlie",
        age: 23,
        grade: "C",
        courses: ["Biology", "Chemistry", "Physics"]
    }
];

// Accessing Bob's courses
// console.log(students[1].courses); // Outputs: ['History', 'Math', 'Art']

// // Looping through the students and their courses
// for (let i = 0; i < students.length; i++) {
//     console.log(`Courses of ${students[i].name}:`);
//     for (let j = 0; j < students[i].courses.length; j++) {
//         console.log(`  ${students[i].courses[j]}`);
//     }
// }

const student = {
    name: "Alice",
    age: 20,
    grade: "A",
    courses: [
        {
            name: "Math",
            instructor: "Prof. Smith",
            grades: { midterm: 85, final: 90 }
        },
        {
            name: "Science",
            instructor: "Dr. Jones",
            grades: { midterm: 88, final: 92 }
        },
        {
            name: "Literature",
            instructor: "Ms. Brown",
            grades: { midterm: 80, final: 87 }
        }
    ]
};

// Accessing the student's courses
console.log(student.courses);

// Looping through the courses and their details
for (let i = 0; i < student.courses.length; i++) {
    let course = student.courses[i];
    console.log(`Course: ${course.name}, Instructor: ${course.instructor}`);
    console.log(
        `  Grades: Midterm - ${course.grades.midterm}, Final - ${course.grades.final}`
    );
}
