const fs=require('fs');


let dateTime=()=>{
    let today=new Date();
    let options={timeZone:'Asia/Kolkata'};
    let time=today.toLocaleTimeString('en-US',options);
    let date=today.toLocaleDateString('it-IT',options);   
    storeData('dateTime.txt',`${date} ${time}`);
}



//Here we will write a data to the file 
let storeData=(fileName,data)=>{
    data=`${data}\n`;
    fs.appendFile(fileName,data,'utf-8',(err)=>{
        if(err) throw err;
        console.log('Data is stored');
    });
}


module.exports={
    dateTime,
};



