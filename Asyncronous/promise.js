function getData(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const req = true;
            if(req){
                resolve("Du lieu duoc tai")
            }
            else{
                reject("Loi khi tai du lieu")
            }
        },2000);
    })

}

 getData()
.then(data =>{
 console.log(data)
})
.catch(error =>{
    console.log(error)
}
);

