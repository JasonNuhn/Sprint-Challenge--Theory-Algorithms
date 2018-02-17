# Algorithm Sprint Challenge

## Analysis of Algorithms

**Exercise I**. *Give an analysis of the running time with respect to the input size n of each of the following program fragments below:*

*a) a = 0;*
*while (a < n * n * n)*
*a = a + n * n;*
    
*Using the pythontutor to do a counter to see how the code behaves.  Setting n at 5, which increase each count by 25.  The code will execute when the counter hits 5 since the end result is 125 and incrementing by 25 would stop at 5.  The time complexity on this is linear time.*

*b) // input array is of length n*
    *i = array.length - 1;*
        *while (array[i] > x && i >= 0)*
            *i = i/2;*
    
*This code behaves as it would trend down in halves.  The time complexity for this is logarithmic time.*

*c) sum = 0;*
    *for (i = 0; i < Math.sqrt(n) / 2; i++>)*
        *for (j = i; j < 8 + i; j++)*
            *for (k = j; k < 8 + j; k++)*
                *sum++;*

*This code does not stop until it reaches a sequence of 4 to the n power.  This code is running on exponential run time.*

*d) sum = 0;*
    *for (i = 1; i < n; i *= 2)*
        *for (j = 0; j < n; j++)*
            *sum++;*
    
*Using the pythontutor to do a counter to see how the code behaves.  Setting n at 8, which has doubled.  It appears with the small sample that this was linear, but when doing higher number for n, it takes quasilinear time to complete the iteration.*
        

*e) sum = 0;*
    *for (i = 0; i < n; i++)*
        *for (j = i + 1; j < n; j++)*
            *for (k = j + 1; k < n; k++)*
                *for (l = k + 1; l < 10 + k; l++)*
                    *sum++;*

*Using the python tutor, examining the behavior by setting n = 4, we can eliminatee quadratic.  The result when setting n = 4 is 36, which is not worst than cubic run time.  I believe the run time is between quadratic and cubic.*

*f) bunnyEars = function (bunnies) { // here bunnies === n*
    *if (bunnies === 0) return 0;*
    *return 2 + bunnyEars(bunnies-1);*
}* 

*Once we start playing with the counter starting from n = 4, the result would behave as if it was n + 1.  For example, if there was 4 bunnies, there would be 5 bunnyEars.  This time complexity for this is constant + 1.*

*g) search = function (array, arraySize, target) { // here arraySize === n*
    *if (arraySize > 0) {*
        *if (array[arraySize-1] === target) return true;*
        *else return search(array, arraySize-1; target);*
    *}*
    *return false;*
*}*

**Exercise II**.
*a)  Given an array a of n numbers, design a linear running time algorithm to find the maximum value of a[j] - a[i], where j >= i.*

let a = [];
let value = 0;

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[j] - a[i] > value) {
            value = a[j] - a[i];
        }
    }
}

*b)  Suppose that you have an n-story building and plenty of eggs.  Suppose also that an egg is broken if it is thrown off floor f or higher, and unbroken otherwise.  Devise a strategy to determine the value of f such that the number of dropped eggs is minimized.*

let n = 0;
let f = 0;

**Exercise III**.  Below is the the pseudo-code for the Quicksort algorithm:
