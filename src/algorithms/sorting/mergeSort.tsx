export function mergeSort(arr: number[]): any{
    console.log('initial mergesort arr', arr)
    console.log('length of arr', arr.length, `is ${arr.length} < 2`, arr.length < 2)
    if(arr.length < 2){
      console.log('return arr of', arr)
      console.log('~~~~~~~~~~');
      return arr
    } 
    // console.log(arr.length/2);
    let right = arr.splice(arr.length/2)
    let left = arr
    console.log('left',left);
    console.log('right', right);
    console.log('~~~~~~~~~~~~~~~');
    let arrau = merge([...mergeSort(left)], [...mergeSort(right)])
    console.log('array',arrau)
    return arrau
  
  }
  
  
  // HELPER FUNCTION: merge two sorted arrays
 export function merge(arr1: number[], arr2: number[]) {
    var result = [];
    console.log('initial merge arrays',arr1,arr2);
    while (arr1.length && arr2.length) {
      console.log('is', arr1[0], '<', arr2[0], arr1[0] < arr2[0] )
      if(arr1[0] <= arr2[0]) {
        console.log('push', arr1[0]);
        result.push(arr1.shift());
      } else {
        console.log('push', arr2[0]);
        result.push(arr2.shift());
      }
      console.log('result', result)
      console.log('~~~~~~~~~~~~~~');
    }
    console.log('return result', result.concat(arr1, arr2));
      
    return result.concat(arr1, arr2);
  }

  
