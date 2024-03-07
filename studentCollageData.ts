//collage data

export const studentCollageData = [
    {
        CollageId: 1,
        CollageName: "KDK",
        CollageCity: "Nagpur"
        
    },
    {
        CollageId: 2,
        CollageName: "YCC",
        CollageCity: "Nagpur"
    }
    ,
    {
        CollageId: 3,
        CollageName: "JIT",
        CollageCity: "Nagpur"
    }
    , {
        CollageId: 4,
        CollageName: "NIT",
        CollageCity: "Nagpur"
    }
]


//geting single data by id
 export const getCollageDtata = (id: number) => {

    studentCollageData.map((value) => {
         if (value.CollageId === id) {

             console.log(value);
         }
     }
     )
 };


 //geting all data
 export const getAllCollageData=()=>{
    studentCollageData.map((value)=>{
        console.log(value);
    })
 }