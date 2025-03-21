// 반복문을 적용한 코드
function friend(friends){
    const newArrayBox = [];
    const checkLength = 4;
    
    for (let i = 0; i < friends.length; i++ ) {
      if (!(/\d/.test(friends[i])) && friends[i].length === checkLength) {
        newArrayBox.push(friends[i]);
      } 
    }
    
    return newArrayBox;
  }

// fitter 매서드 적용 코드
function friend(friends) {
	const newArrayBox = [];
	
	for (let i = 0; i < friends.length; i++) {
		if (!(/\d/.test(friends[i]))) {
			newArrayBox.push(friends[i]);
		}
	}
	
	const returnResult = newArrayBox.filter((item) => item.length === 4 )
	return returnResult;
}