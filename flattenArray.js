const flattenArray = (itemsArray) => {
   let flatArray = [];
   for (const item of itemsArray) {
      Array.isArray(item)
         ? (flatArray = flatArray.concat(flattenArray(item)))
         : flatArray.push(item);
   }

   return flatArray;
};
