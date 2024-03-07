interface studentCollage{
    
    CollageId:number,
    CollageName:string,
    CollageCity: string,
}


export const collageFun=({
    CollageId,
    CollageName,
    CollageCity,
}:studentCollage):number|string=>{
    return `{ CollageId : ${CollageId} ,  CollageName : ${CollageName} , CollageCity : ${CollageCity}}`;      
}
