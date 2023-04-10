candidates = [
    {sno:1,name:"sandeep",score:56},
    {sno:2,name:"hemanth",score:78},
    {sno:3,name:"chida",score:99},
    {sno:4,name:"anjali",score:13},
    {sno:5,name:"shyam",score:88},]
let student=candidates.reduce((candidate1,candidate2)=>{
    return candidate1.score>candidate2.score?candidate1:candidate2
})
console.log(student)