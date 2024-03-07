import { addressFunc } from "./studentAddress"
import { collageFun } from "./studentCollage";


const studentData = [
    {
        studentid: 1,
        studentName: "nandini",
        studentCollage: collageFun({ CollageId: 1, CollageName: "JIT", CollageCity: "Nagpur" }),
        studentAddress: addressFunc({ AddressId: 1, studentCity: "nagpur", studentPincode: 5678 })
    }, 
    {
        studentid: 2,
        studentName: "Akrtiti",
        studentCollage: collageFun({ CollageId: 2, CollageName: "KDK", CollageCity: "Nagpur" }),
        studentAddress: addressFunc({ AddressId: 2, studentCity: "pune", studentPincode: 7235 })
    },
    {
        studentid: 3,
        studentName: "Tripti",
        studentCollage: collageFun({ CollageId: 3, CollageName: "NIT", CollageCity: "Nagpur" }),
        studentAddress: addressFunc({ AddressId: 3, studentCity: "Akola", studentPincode: 2345 })
    },
    {
        studentid: 4,
        studentName: "Sruti",
        studentCollage: collageFun({ CollageId: 4, CollageName: "JDK", CollageCity: "Nagpur" }),
        studentAddress: addressFunc({ AddressId: 4, studentCity: "Amravti", studentPincode: 5668 })
    }
]


const get = (id: number) => {

    studentData.map((value) => {
        if (value.studentid === id) {

            console.log(value);
        }
    }
    )
};

get(4);





