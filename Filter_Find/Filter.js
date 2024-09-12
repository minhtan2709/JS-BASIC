console.log('Hello World form HTML')
// let arr = [1,2,3,4,5,6,7,8,9,10]
let arr =[
    
        {name:'Tan',age:20},
        {name:'Yone',age:25},
        {name:'Gwen',age:18},
       
    
]
// filter, find
let filter = arr.filter((item,index) =>{
    return item && item.age ===25;
})
console.log(filter)