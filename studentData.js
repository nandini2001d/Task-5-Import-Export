"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentAddress_1 = require("./studentAddress");
var studentData = [
    {
        studentid: 1,
        studentName: "nandini",
        studentCollage: "jit",
        studentAddress: (0, studentAddress_1.myFunc)({ Addressid: 1, studentCity: "nagpur", studentPincode: 5678 })
    },
    {
        studentid: 2,
        studentName: "nandini",
        studentCollage: "jit",
        studentAddress: (0, studentAddress_1.myFunc)({ Addressid: 2, studentCity: "pune", studentPincode: 7235 })
    },
    {
        studentid: 3,
        studentName: "nandini",
        studentCollage: "jit",
        studentAddress: (0, studentAddress_1.myFunc)({ Addressid: 3, studentCity: "Akola", studentPincode: 2345 })
    },
    {
        studentid: 4,
        studentName: "nandini",
        studentCollage: "jit",
        studentAddress: (0, studentAddress_1.myFunc)({ Addressid: 4, studentCity: "Amravti", studentPincode: 5668 })
    }
];
var get = function (id) {
    studentData.map(function (value) {
        if (value.studentid === id) {
            console.log(value);
        }
    });
};
get(4);
