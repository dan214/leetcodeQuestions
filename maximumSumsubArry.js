
// This is a shared text editor
// Type here and other users in this room will see your changes

//Time: 7min


/* Description

Given an array, find the average of all contiguous subarrays of size ‘K’ in it..

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
**/

function AvgContiguous(arr,k){
	let averages = [];
	let windowSum = 0;
	let windowStart = 0;
	for(let windowEnd = 0; windowEnd < arr.length; windowEnd++){
		windowSum += arr[windowEnd];
		if(windowEnd >= k - 1){
			averages.push(windowSum / k);
			windowSum -= arr[windowStart];
			windowStart++;
		}
	}
	return averages;
}
let results = AvgContiguous([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
for(let j = 0;j<results.length;j++)
{
	console.log(results[j]);
}
