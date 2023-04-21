function filterThis(candidateFilter,student)
{
    result=[]
    for( x of student)
        if(candidateFilter(x))
            result.push(x)
    return result 
}
student = [
    {sno:1,name:"sandeep",percentage:76},
    {sno:2,name:"hemanth",percentage:80},
    {sno:3,name:"bhargav",percentage:96},
    {sno:4,name:"anajali",percentage:83},
    {sno:5,name:"chida",percentage:88},]
result=filterThis(function(candidate){
        if(candidate.percentage>70)
          return true
        return false  
},student)
console.log(result)