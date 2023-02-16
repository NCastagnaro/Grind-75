//Given the head of a singly linked list, reverse the list, and return the reversed list.

//Example 1:
// 1 ---> 2 ---> 3 ---> 4 ---> 5
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

//Example 2:
// 1 ---> 2 
// Input: head = [1,2]
// Output: [2,1]

const reverseList = head => {
    let curr = head
    let prev = null
    let next

    while(curr !== null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}


//Explanation:
//We first need to create a variable we called current and assign the head value to it. 
//We then create a prev value and set that to null. That is because when we switch direction and go right to left, we need out first prev value to be null
//We then run a while loop will fire so long as curr is not null. When curr has a null value, we know we reached the end of the list.

//Example breakdown  1 ---> 2 ---> 3 ---> 4 ---> 5 
//when we set next = curr.next, the curr is stationed at the head (1), so we assign the curr.next value(2) to next
//We then assign the prev value(null) to be the new curr.next value. So, we are starting to point to the left by reassigning the next value
//Now, that we handled pointing to the left for the next value at the first node, we can move our prev value up. So we assign the curr value(1) to prev
//And now we are read to move our curr value up to the next node. So, we assign the next value(2) to our curr.
//And this process continues until curr reached null.
//After that, we return prev, which should contain the new head being at position 5, and pointing to the left. 
//It should return 5 ---> 4 --- 3 ---> 2 ---> 1    because prev, which is 5 at the end has a next property of 4, which that node has a next property of 3, which that node
//has a next property of 2, which that node has a next property of 1, which that node has a next property of null, which signifies that it is the end of the linked list. 
//Since the head node has a pointer to the next node, which has a pointer to the next node, and so on, returning the head node effectively returns the whole linked list in reverse order