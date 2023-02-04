// Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.


function countZeros ( binary_num ) {
    //Write your code here
       let count = 0;
      for (let i = 0; i < binary_num.length; i++) {
        if (binary_num[i] === '0') {
          count++;
        }
      }
      return count;
    //Don't forget to return
    
    }