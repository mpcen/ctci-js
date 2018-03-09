/*

Given a string s, print all permutations of that string

*/

const permute = (s, p = '') => {
	if(!s.length) {
		console.log(p);
	} else {
		for(let i = 0; i < s.length; i++) {
			let c = s.charAt(i);

			s = s.split('');
			s.splice(i, 1);
			s = s.join('');

			p += c;

			permute(s, p);

			s = s.split('');
			s.splice(i, 0, c);
			s = s.join('');

			p = p.split('');
			p.splice(p.length - 1, 1);
			p = p.join('');
		}
	}
}


/*
many|
any|m
ny|ma
y|man
|many

*/