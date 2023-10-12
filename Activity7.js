// STUDENT INFORMATION
const studentInfo = {
    lastName: "Mariano",
    firstName: "Florheim Wizard",
    middleName: "Villena",
    section: "BSCS 2A",
    labNo: 7,
};

console.log ("Name: " + studentInfo.firstName + " " + studentInfo.middleName + " " + studentInfo.lastName);
console.log ("Section: " + studentInfo.section);
console.log ("Laboratory Number: " + studentInfo.labNo);

// PERFORMED ACTIVITY
var password = "p@ssw0rd@2023";

if (password.length >= 8 && password.includes ("p@ssword")) {
    console.log ("Valid password");
} else {
    console.log ("Invalid password");
}