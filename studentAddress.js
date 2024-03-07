"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunc = void 0;
var myFunc = function (_a) {
    var Addressid = _a.Addressid, studentCity = _a.studentCity, studentPincode = _a.studentPincode;
    return "{ Addressid : ".concat(Addressid, ", studentCity : ").concat(studentCity, " , studentPincode : ").concat(studentPincode, "}");
};
exports.myFunc = myFunc;
//      for(const key in studentData){
//         if(id === studentData[key].studentid ){
//                     for(const key2 in  studentData[key]) {
//                         for(const key1 in studentAddress){
//                             if (aid=== studentAddress[key1].Addressid) {
//                         for(const key3 in studentAddress[key1]){
//                          studentData[key].studentAddress=(studentAddress[key1])[key3];
//                         }
//                         const element =  (studentData[key])[key2];
//                         console.log(element);
//                         }
//         }
//     }
