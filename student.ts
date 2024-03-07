//student Data

export const student = [
    {
        Stuid: 1,
        StuName: "Nandini",
        StuAge:23
    },
    {
        Stuid: 2,
        StuName: "Achal",
        StuAge:24
    } ,{
        Stuid: 3,
        StuName: "Kirti",
        StuAge:23
    },
    {
        Stuid: 4,
        StuName: "Amit",
        StuAge:34
    }
]

//geting single data by id
export const getStudentDtata = (id: number) => {

    student.map((value) => {
         if (value.Stuid === id) {

             console.log(value);
         }
     }
     )
 };

 //geting all data
 export const getAllStudentData=()=>{
    student.map((value)=>{
        console.log(value);
    })
 }