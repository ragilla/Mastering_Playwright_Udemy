const votes: any = ['y', 'y', 'n', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'n', 'y', 'y'];

const result = votes.reduce((acc, vote) => {
	acc[vote]= (acc[vote] || 0) + 1;
	return acc;
}, {});
console.log(result);