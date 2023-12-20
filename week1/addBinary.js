//5.16.2023
// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

const addBinary = (a,b) => {
    return((BigInt('0b' + a) + BigInt('0b' + b)).toString(2))
}

//BigInt is used to represent integers greater than 2^53-1.
//(2^53-1) is the Maximum Number Primitive which can be safely represented using JS. This is represented by 'MAX_SAFE_INTEGER'

//We could use parseInt('number',base). for example: we can convert '10001' from binary to 17 in decimal with parseInt('10001',2).
//However, the problem here is, if we have integers, i.e a or b's binay value to be huge(that is if the numbers passed to a o b is really big and more than 2^52 - 1),
//then JS can not process it as the max Number preimitive it can work with safely is 2^52-1 or less.

//Therefore, we make use of Bigint to represent all kinds of numbers, small to large integers. The BigInt object takes a string integer literal as the argument and then 
//returns us a number which is of the BigInt datatype.

//So, here we need to pass the string(which should be an integer literl), as whichever base it is currently represented as. In our case, we have 'a' and 'b' as binary numbers(strings)
//We need to tell BigInt() that 'a' and 'b' are Binary numbers. So, we appened '0b' to the beginning of 'a' and 'b' and then pass them to BigInt()
//Similarly, if we have hexidecimal numbers, we prefix '0x' and for Octal numbers, we prefix '0o'

//Once we have converted our binary numbers 'a' and 'b' to BigInt datatype, we add them using normal addition (+) operator. 

//Now, we use the toString() method to convert our BigInt number (sum calculated) to a string in binary format. To do that, we pass the base we want to convert our argument to. 
//  .toString(2) converts the string to Binary(base 2).

