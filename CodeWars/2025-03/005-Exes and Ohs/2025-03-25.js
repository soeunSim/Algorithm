function XO(str) {
    const newArray = [...str.toLowerCase()];
    const xBox = [];
    const oBox = [];
    
    for (let i = 0; i<newArray.length; i++) {
      if (newArray[i] === "x") {
        xBox.push(newArray[i]);
      } else if (newArray[i] === "o") {
        oBox.push(newArray[i]);
      }
    }
    
    if (xBox.length === oBox.length) {
      return true;
    } else {
      return false;    
    }
  }