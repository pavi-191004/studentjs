const students = [
    {
      studentId: 1,
      name: "pavithra",
      grade: 8,
      courses: ["CSE", "EEE", "ECE"],
      attendance: {
        "2024-01-15": true,
        "2024-01-16": false,
        "2024-01-17": true
      },
      hobbies: {
        sports: ["basketball", "tennis"],
        music: ["violin"]
      }
    },
    {
      studentId: 2,
      name: "lakshana",
      grade: 9,
      courses: ["CSE", "IT", "EEE"],
      attendance: {
        "2024-01-15": true,
        "2024-01-16": true,
        "2024-01-17": true
      },
      hobbies: {
        sports: ["football"],
        music: ["guitar", "drums"]
      }
    },
    {
      studentId: 3,
      name: "kiruba",
      grade: 8,
      courses: ["ECE", "CSBS", "AIDS"],
      attendance: {
        "2024-01-15":false,
        "2024-01-16": true,
        "2024-01-17": true
      },
      hobbies: {
        sports: ["cricket", "badminton"],
        music: ["piano", "flute"]
      }
    }
  ];
  const displayStudents = (student) => {
    console.log("---- Student ----");
    for (const key in student) {
      if (key !== "courses" && key !== "attendance" && key !== "hobbies") {
        console.log(`${key}: ${student[key]}`);
      } else if (key === "courses") {
        console.log("Courses:");
        for (const course of student.courses) {
          console.log(` - ${course}`);
        }
      } else if (key === "attendance") {
        console.log("Attendance:");
        for (const date in student.attendance) {
          console.log(` ${date}: ${student.attendance[date]}`);
        }
      } else if (key === "hobbies") {
        console.log("Hobbies:");
        for (const category in student.hobbies) {
          console.log(` ${category}: ${student.hobbies[category].join(", ")}`);
        }
      }
    }
  };
  const filterGrade = (grade) => {
    const filteredNames = [];
    const filteredStudents = students.filter((student) => student.grade === grade);
    for (const student of filteredStudents) {
      filteredNames.push(student.name);
    }
    return filteredNames;
  };
  
  const findStudentById = (id) => {
    return  students.find((student) => student.studentId === id);
    
  };
  const attendanceModule = (() => {
    const recordAttendance = (student, date, isPresent) => {
      if (!student.attendance) {
        console.log("The student attendance is missing. Creating it...");
        student.attendance = {};
      }
  
      student.attendance[date] = isPresent;
      console.log(`Attendance recorded: ${student.name} on ${date} - ${isPresent ? "Present" : "Absent"}`);
    };
  
    return {
      recordAttendance:recordAttendance
    };
  })();
  const addCourse = (studentId, newCourse) => {
    const student= findStudentById(studentId);
    if (student) {
      if (!student.courses.includes(newCourse)) {
        student.courses.push(newCourse);
        console.log(`the ${newCourse} is added to ${studentId}`);
      } else {
        console.log(`the ${newCourse} already exist`);
      }
    } else {
      console.error(`studentID is missing`);
    }
  }; 
  
  const removeStudent= (studentID) => {
    const index = students.findIndex((Id) => Id.studentId === studentID);
    if (index !== -1) {
      students.splice(index, 1);
      console.log(`student with ${studentID} is removed `);
    } else {
      console.log(`student with ${studentID} is missing.`);
    }
  };

  const getStudentsWithMostHobbies = (category) => {
    let maxCount = 0;
    let result = [];
  
    for (const student of students) {
      if(!student.hobbies === category)
        {
        console.log(`${student.name} does not have hobbies in category: ${category}`);
        
      }
  
      const hobbiesInCategory = student.hobbies[category];
      const count = hobbiesInCategory.length;
  
      if (count > maxCount) {
        maxCount = count;
        result = [student];
      } else if (count === maxCount) {
        result.push(student);
      }
    }
  
    return result;
  };
  
console.log("----display student---")
students.forEach((student)=>displayStudents(student))
  
console.log("----filter names----");
const studentNames = filterGrade(9);
studentNames.forEach((name) => console.log(name));

console.log("--find student object---")
const student2 = findStudentById(2)
if(student2){
displayStudents(student2)
}else{
    console.log("the student ID is not found")
}

console.log("--th student attendence present/absent---")
const student = findStudentById(2)
if (student) {
   
    attendanceModule.recordAttendance(student, "2024-01-15", true);
    displayStudents(findStudentById(2));
  } else {
    console.log("The student ID is missing.");
  }
  console.log("\n--- Add course");
addCourse(2 , "AIML")
addCourse(2 , "CSBS")
displayStudents(student)
console.log("\n--- Remove student---");
removeStudent(1)
console.log("--- student after removing---");
students.forEach((student) => displayStudents(student));
console.log("--- Students with most sports hobbies ---");
const topSportsHobbyists = getStudentsWithMostHobbies("sports");
topSportsHobbyists.forEach(student => displayStudents(student));
 console.log("---access property---")
 console.log(student.name);       
console.log(student.grade);      
console.log(student.studentId);  
console.log(student.courses[0]); 
console.log(student.courses[2]); 
console.log(student.hobbies.sports[0]);
console.log(student.hobbies.music[0]);  
console.log(student.attendance["2024-01-15"]);
console.log(student.attendance["2024-01-16"]); 
