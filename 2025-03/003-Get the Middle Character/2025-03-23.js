function getMiddle(s) {
    const iLengthCenter = Math.floor(s.length / 2);
    const newArray = [];
  
    if (s.length %2 === 0) { // 짝수 일 경우
      console.log("짝수");
      for (let i = 0; i<s.length; i++) {
        if (s[i] === s[iLengthCenter - 1] || s[i] === s[iLengthCenter]) {
          newArray.push(s[i]);
        }
      }
      console.log(newArray.join(""));
      return newArray.join("");
      
    } else if (s.length %2 === 1) { // 홀수 일 경우
      console.log("홀수");
      for (let i = 0; i<s.length; i++) {
        let box = s[i];
        console.log(s.search(box));
        console.log(s.search(box) === s[iLengthCenter]);
        if (s[i] === s[iLengthCenter]) {
          newArray.push(s[i]);
        }
      }
      console.log(newArray);
      //console.log(iLengthCenter);
      return newArray.join("");
    }
}

getMiddle("testing")