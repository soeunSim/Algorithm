function removeExclamationMarks(s) {
    const findBang = [...s].filter((word) => word !== "!");
    const returnResult = findBang.join('');
  
    return returnResult;
  }