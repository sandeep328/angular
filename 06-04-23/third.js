str=["hemanth","hi","sandeep","what are you doing"]
let result=str.reduce(function(element1,element2){
          return element1.length>element2.length?element1:element2
    })
console.log(result)