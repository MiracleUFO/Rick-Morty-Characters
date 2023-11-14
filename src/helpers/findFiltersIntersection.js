export const findFiltersIntersection = (arrayOfArrays) => {
  let intersection = new Set(arrayOfArrays[0]);

  for (const array of arrayOfArrays.slice(0)) {
    intersection = new Set([...intersection].filter(x => array && array.includes(x)));
    console.log('INTERSECTION NOW', intersection);
  }

  return Array.from(intersection);
}