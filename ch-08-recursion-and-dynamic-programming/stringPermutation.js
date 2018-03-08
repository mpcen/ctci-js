const permute = (string, p = '') => {
	if(!string.length) {
		console.log(p);
	} else {
		for(let i = 0; i < string.length; i++) {
			permute(string.substring(0, i) + string.substring(i + 1, string.length), p + string.charAt(i))
		}
	}
}