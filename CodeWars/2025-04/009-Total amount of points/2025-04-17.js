function points(games) {
    let box = 0;
    for(let i =0; i<games.length; i ++) {
      if (games[i].charAt(0) > games[i].charAt(2)) {
        box = box + 3;
      } else if (games[i].charAt(0) === games[i].charAt(2)) {
        box = box + 1;
      }
    }
    return box;
  }