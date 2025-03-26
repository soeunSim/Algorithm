function makeNegative(num) {
    const checkNum = Math.sign(num);
  
    if (checkNum === 0 || checkNum === -1) {
      return num;
    } else {
      return num * -1;
    }
  }