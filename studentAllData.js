"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentCollageData_1 = require("./studentCollageData");
var studentAddressData_1 = require("./studentAddressData");
var student_1 = require("./student");
var studentAllData = [
    {
        student: student_1.student,
        studentCollageData: studentCollageData_1.studentCollageData,
        studentAddressData: studentAddressData_1.studentAddressData
    }
];
var getAllData = function (sid, cid, aid) {
    studentAllData.map(function (value) {
        value.student.map(function (student) {
            if (student.Stuid === sid) {
                value.studentCollageData.map(function (collage) {
                    if (collage.CollageId === cid) {
                        value.studentAddressData.map(function (addreess) {
                            if (addreess.AddressId === aid) {
                                value.student = [student];
                                value.studentCollageData = [collage];
                                value.studentAddressData = [addreess];
                                console.log(value);
                            }
                        });
                    }
                });
            }
        });
    });
};
// geting all data 
console.log("Geting all Data by student id , address id and collage id ");
getAllData(2, 3, 2);
console.log("*********************************************************************************************");
//geting single data 
console.log("geting single Student data by id");
(0, student_1.getStudentDtata)(2);
console.log("..............................................................................");
console.log("geting single Address data by id");
(0, studentAddressData_1.getAddressDtata)(1);
console.log("..............................................................................");
console.log("geting single Collage data by id");
(0, studentCollageData_1.getCollageDtata)(3);
console.log("*********************************************************************************************");
//geting all perticular data
console.log("geting All Student Data");
(0, student_1.getAllStudentData)();
console.log("..............................................................................");
console.log("geting All Address Data");
(0, studentAddressData_1.getAllAddressData)();
console.log("..............................................................................");
console.log("geting All Collage Data");
(0, studentCollageData_1.getAllCollageData)();
