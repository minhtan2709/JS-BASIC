console.log("Hello world from HTML")
 
let items = [
    {name :'Tan4', value:21},
    {name :'Tan3', value:76},
    {name :'Tan1', value:31},
    {name :'Tan2', value:28}

]
items.sort(function(a,b){
    return a.value -b.value // so sanh giá trị trả về sẽ dương và a.value sẽ được xếp sau b.value, giá trị trả về âm và a.value sẽ được xếp trước b.value
})
console.log(items)