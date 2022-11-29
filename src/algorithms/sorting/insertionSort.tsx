function insertionSort (items: number[]) {
    for(let i = 0; i<items.length;i++){
      console.log('beginning of for',items);
      let item = items.splice(i,1)[0]
      console.log('item',item)
      let z = i
      console.log('initial z',z)
      console.log('after splice',items)
      while(z>0 && item< items[z-1]){
        console.log(` ${item} < ${items[z-1]}`)
        z--
        console.log('z is now', z)
      }
      console.log('add at index',z)
      items.splice(z,0,item)
      console.log('after insert',items)
      console.log('~~~~~~')
  
    }
      
    return items;
  }


    export default insertionSort;
    a