// Retrieve the value from sessionStorage
let courseName = sessionStorage.getItem('courseName');
let courseDescription = sessionStorage.getItem('courseDescription');
let gradeLevel = sessionStorage.getItem('gradeLevel');
let numberOfStudents = sessionStorage.getItem('numberOfStudents');
let studentPerformance = sessionStorage.getItem('studentPerformance');
let teachingStyle = sessionStorage.getItem('teachingStyle');
let technologyAvailability = sessionStorage.getItem('technologyAvailability');
let specialNeeds = sessionStorage.getItem('specialNeeds');
let yearsOfExperience = sessionStorage.getItem('yearsOfExperience');
let teachingDuration = sessionStorage.getItem('teachingDuration');

document.getElementById("user_data").innerHTML += "Course Name: " + courseName + "<br>";
document.getElementById("user_data").innerHTML += "Course Description: " + courseDescription + "<br>";
document.getElementById("user_data").innerHTML += "Grade Level: " + gradeLevel + "<br>";
document.getElementById("user_data").innerHTML += "No. of Students: " + numberOfStudents + "<br>";
document.getElementById("user_data").innerHTML += "Student Performance: " + studentPerformance + "<br>";
document.getElementById("user_data").innerHTML += "Teaching Style: " + teachingStyle + "<br>";
document.getElementById("user_data").innerHTML += "Technology Avaibility: " + technologyAvailability + "<br>";
document.getElementById("user_data").innerHTML += "Special Needs: " + specialNeeds + "<br>";
document.getElementById("user_data").innerHTML += "Years of Experience: " + yearsOfExperience + "<br>";
document.getElementById("user_data").innerHTML += "Teaching Duration: " + teachingDuration + "<br>";


//Function to download content in pdf
document.getElementById('download-pdf').addEventListener('click', function() {
    const element = document.body; // or select specific elements like document.getElementById("content")

    html2pdf(element);  // Converts selected content to PDF and downloads it
});