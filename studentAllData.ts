import { studentCollageData ,getCollageDtata,getAllCollageData} from "./studentCollageData"
import { studentAddressData,getAddressDtata,getAllAddressData} from "./studentAddressData";
import {student,getStudentDtata,getAllStudentData} from "./student";


const studentAllData = [
    {
        student:student,   //student data
        studentCollageData: studentCollageData, //collage data
        studentAddressData: studentAddressData //address data
    }
]


const getAllData = (sid: number, cid: number, aid: number) => {

    studentAllData.map((value) => {   //main loop
        value.student.map((student)=>{  //student loop
            if (student.Stuid === sid) {    //student id is present or not
                value.studentCollageData.map((collage) => {  //collage loop
                    if (collage.CollageId === cid) {         //collage id is present or not
                        value.studentAddressData.map((addreess) => {  //address loop
                            if (addreess.AddressId === aid) {       //address id is present or not  
                                value.student=[student];             //seting single value in student according to id
                                value.studentCollageData = [collage]; //seting single value in collage according to id
                                value.studentAddressData = [addreess]; //seting single value in address according to id
                                console.log(value);
                            }
                        })
    
                    }
                })
            }
        })
       
    }
    )
};


// geting all data 
console.log("Geting all Data by student id , address id and collage id ");
getAllData(2, 3, 2);   

console.log("*********************************************************************************************");

 //geting single data 
 console.log("geting single Student data by id");
 getStudentDtata(2);
 console.log("..............................................................................");
 console.log("geting single Address data by id");
 getAddressDtata(1);
 console.log("..............................................................................");
 console.log("geting single Collage data by id");
 getCollageDtata(3);

 console.log("*********************************************************************************************");

 //geting all perticular data
 console.log("geting All Student Data");
 getAllStudentData();
 console.log("..............................................................................");
 console.log("geting All Address Data");
 getAllAddressData();
 console.log("..............................................................................");
 console.log("geting All Collage Data");
 getAllCollageData();
