"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllStudentData = exports.getStudentDtata = exports.student = void 0;
exports.student = [
    {
        Stuid: 1,
        StuName: "Nandini",
        StuAge: 23
    },
    {
        Stuid: 2,
        StuName: "Achal",
        StuAge: 24
    }, {
        Stuid: 3,
        StuName: "Kirti",
        StuAge: 23
    },
    {
        Stuid: 4,
        StuName: "Amit",
        StuAge: 34
    }
];
var getStudentDtata = function (id) {
    exports.student.map(function (value) {
        if (value.Stuid === id) {
            console.log(value);
        }
    });
};
exports.getStudentDtata = getStudentDtata;
var getAllStudentData = function () {
    exports.student.map(function (value) {
        console.log(value);
    });
};
exports.getAllStudentData = getAllStudentData;
