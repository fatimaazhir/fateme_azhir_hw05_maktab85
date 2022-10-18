
function sortObjects(students){
  var s =  students.sort((a,b)=>{
    return a.age - b.age;
  })
  return s
}

const students = [{name: 'Sara', age:24},
{name: 'John', age:22},
 {name: 'Jack', age:27}
 ];

console.log(sortObjects(students));