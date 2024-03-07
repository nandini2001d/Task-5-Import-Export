//address data

export const studentAddressData = [
    {
        AddressId: 1,
        City: "Nagpur",
        Pincode: 6789
    },
    {
        AddressId: 2,
        City: "Jaypur",
        Pincode: 6780
    }
    ,
    {
        AddressId: 3,
        City: "nagpur",
        Pincode: 4567
    }
    ,
    {
        AddressId: 4,
        City: "pune",
        Pincode: 5678
    }
]

//geting single data by id
export const getAddressDtata = (id: number) => {

    studentAddressData.map((value) => {
         if (value.AddressId === id) {

             console.log(value);
         }
     }
     )
 };

 //geting all data
 export const getAllAddressData=()=>{
    studentAddressData.map((value)=>{
        console.log(value);
    })
 }