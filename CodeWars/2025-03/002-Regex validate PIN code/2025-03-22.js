function validatePIN (pin) {
    if ((pin.length === 4 || pin.length === 6) && !(/\D/.test(pin))) {
      return true;
    } else {
      return false;
    }  
  }