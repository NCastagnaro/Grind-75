// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example 1:
// 1 ---> 2 ---> 3 ---> 4 ---> 5
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// 1 ---> 2 ---> 3 ---> 4 ---> 5 ---> 6
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

const middleNode = head => {
    let length = 0
    let initialHead = head
    while(head !== null){
        head = head.next
        length++
    }
    let middleIndex = length/2
    //If middleIndex is an integer(2.5 for example, in Example 1), need to decrement so that the new list
    //starts one node back from where it would have in comparison to if you had a middleIndex value of 3,
    //in Example 2, which is where you have 2 middle nodes.
    if(Number.isInteger(middleIndex)==false) middleIndex--

    for(let i = 0; i < middleIndex ;i++){
        initialHead = initialHead.next
    }
    return initialHead
};

//Explanation:
//We first set up a length variable that will increment as we traverse through the linked list. 
//And we set up an initialHead variable to keep track of what our initial head node was
//If we divide the length by 2 and we get a number that isn't an integer, we know we need to decrement 
//the middleIndex value.
//That is because that signifies we only have one middle number, and will need to start our list we 
//return one node sooner
//e.g. 1 ---> 2 ---> 3 ---> 4 ---> 5
//We have a length of 5. middleIndex = 5/2 = 2.5. We decrement middleIndex. So, middleIndex is 1.5 now. 
//When we iterate through our list below, we will start with 
//initialHead, which is 1, with an i value of 0, we iterate again and go to 2 in our linked list, with 
//an i value of 1 now, and we iterate one more time and get to the node 
//with a value of 3 in our linked list and that is what we return to the user.  
//We return 3 ---> 4 ---> 5

//e.g. 1 ---> 2 ---> 3 ---> 4 ---> 5 ---> 6
//We have a length of 6. middleIndex = 6/2 = 3, so don't trigger the if statement and we don't decrement 
//middleIndex. So, middleIndex is 3 now. When we iterate through our list below, we will start with 
//initialHead, which is 1, with an i value of 0, we iterate again and go to 2 in our linked list, with 
//an i value of 1 now, and we iterate again and go to 3 in our linked list, with an i value of 2 now 
//and we iterate one more time and get to 4 in our linked list with an i value of 3 now. We will return 
//the linked list starting at this node 
// We return 4 ---> 5 ---> 6
