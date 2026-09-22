
// This is a shared text editor
// Type here and other users in this room will see your changes

//Time: 7min


/* Description

Given a non-negative integer limit, 
return every prime number in the inclusive range 0..limit in ascending order 
and the sum of those primes. 
A prime is an integer greater than 1 with exactly two positive divisors: 1 and itself.


Input:  limit = 100
Output:
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
          53, 59, 61, 67, 71, 73, 79, 83, 89, 97]


Consider: limit values 0, 1, and 2.

**/

function primeInt(limit){
	let primes = [];
	for(let i = 2;i<limit;i++){
		if(i==2 || i==3 || i==5)
		{
			primes.push(i);
			continue;
		}
		if(i%2 != 0 && i%3 != 0 && i%5 != 0)
		{
			primes.push(i);
		}
	}
	return primes;
}
let results = primeInt(100);
for(let j = 0;j<results.length;j++)
{
	console.log(results[j]);
}
