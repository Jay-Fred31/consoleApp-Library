// var employeeData = [
//   [
//     "firstName", "Bob",
//     "lastName", "Lob",
//     "role", "salesperson"
//   ],
//   [
//     "firstName", "Mary",
//     "lastName", "Joe",
    
//   ],
// ];

// function transformData(employeeData) {
//   let newObject = {};
//   let newArr = [];

//   for (var i = 0; i < employeeData.length; i++) {
//     for (var x = 0; x < employeeData[i].length; x++) {
//       for (var y = 0; y < employeeData[i][y].length; y++) {
//         newObject[employeeData[i][y][0]] = employeeData[i][y][1];
//       }
//     }
//     newArr.push(newObject);
//     newObject = {};
//   }
//   return newArr;
// }

// console.log(transformData(employeeData));

let chunked = [[1,2,3], [4,5,6], [7,8,9]];

for(let i = 0; i < chunked.length; i++) {
  
   for(let j = 0; j < chunked[i].length; j++) {
     
      console.log(chunked[i][j]);
   }};