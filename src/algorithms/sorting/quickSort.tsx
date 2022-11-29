function quickSort(arr:any):any{
    if(arr.length <2 ) {
      return arr
    }
    let pivot = arr.splice(arr.length-1,1);
    let left = []
    let right = []
    for(let i=0;i<arr.length;i++){
      pivot > arr[i] ? left.push(arr[i]) : right.push(arr[i])
    }
    return arr = [...quickSort(left),...pivot,...quickSort(right)]
  }
  
export default quickSort;