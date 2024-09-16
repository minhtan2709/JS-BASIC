console.log("Hello World in HTML")
const _ = require('lodash')

const users =[
    {name : "Minhtan1", age :24},
    {name : "Minhtan2", age :25},
    {name : "Minhtan3", age :26},
    {name : "Minhtan4", age :27},
    {name : "Minhtan5", age :28}

];
const filterAndSortUser = _.chain(users)
.filter(user => user.age>24)
.sortBy('age')
.value()

console.log(filterAndSortUser)