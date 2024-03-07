

interface studentAddress{
    
    AddressId:number,
    studentCity: string,
    studentPincode: number
    
}


export const addressFunc=({
    AddressId,
    studentCity,
    studentPincode,
}:studentAddress):number|string=>{
    return `{ Addressid : ${AddressId}, studentCity : ${studentCity} , studentPincode : ${studentPincode}}`;      
}




//--------------------------complicated way -----------------//


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