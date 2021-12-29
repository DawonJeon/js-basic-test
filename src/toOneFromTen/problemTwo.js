
// const solution = (arr) => {
//   arr.splice(2, 0, 10000);
//   return arr;
// }; 

let array = [200, 100, 300];  //array= [200, 100, 10000, 300]
/* const solution = (arr) =>{
  arr[2]=10000;
  arr[3]=300;
  return arr
} */

/*const solution = (arr) => {
  let i=arr.length;
  let last=arr[i];
  arr[i-1]=10000;
  arr[i]=last;
  return arr;
} */

const solution = (array) => {
  let newArray = [];
  for(let i=0; i<array.length; i++) {   
    newArray[i+1]=array[i]
  }

  newArray[0]=1; 
  return newArray;

} 

// = [1, 200, 100, 300]

export default solution;
