
import carFacts from "./carFacts";

export const Submit = (data) => {
  let count = [], carLinks, match;
  // Sorts through and select chosen cars
  for (let i in data) {
    
    let cat, feat, l, f;
    for (cat in carFacts) {
      if (carFacts.hasOwnProperty(cat))
        l = carFacts[cat];
        
      for (feat in l) {
        if (l.hasOwnProperty(feat))
          f = l[feat];
        if (data[i] === feat) {
          count += f[0].map((j) => {
            return j;
          }) + ',';
          break;
        }
      }
    }
  }
  
  carLinks = count.split(',').sort().filter((i, idx, arr) => {
    let car = 0;
    for (let j = idx; j < arr.length; j++) {
      if (i.indexOf(arr[j]) > -1)
        car++;
      if (car === 3)
        return i;
    }
  });
  return carLinks;
}