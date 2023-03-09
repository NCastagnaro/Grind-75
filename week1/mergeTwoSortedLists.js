// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// 1 --> 2 --> 4   and 1 --> 3 --> 4
// Output: [1,1,2,3,4,4]
// 1 --> 1 --> 2 --> 3 --> 4 --> 4

// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 



//   Definition for singly-linked list:

//   function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }


//  @param {ListNode} list1
//  @param {ListNode} list2
//  @return {ListNode}
 
const mergeTwoLists = (list1, list2) => {
    const dummy = new ListNode(-infinity) //We create a dummy node, -Infinity as the value for the dummy node is the safest choice bc it is guarenteed to be smaller than any other value in the input lists. This means that no matter what values the input list contain, the dummy node will always be smaller than any other node, and we can safely add new nodes after it without worrying about the correct order of the nodes.
    let prev = dummy;   //We create our previous pointer. The reason we need a dummy variable and prev variable is bc prev will handle the iterating of the lists. And we will return dummy at the end, which represents the head.

    //We will iterate through the lists until we reach null on either one
    while(list1 && list2){      
        if(list1.val <= list2.val){
            prev.next = list1   //we assign list1 to prev.next.
            prev = list1        //We then move prev up to the list1 node
            list1 = list1.next  //We make sure to go to the next node in our list1 list and assign it to list1
        }else{  //do the same thing for when list2.val <= list1.val
            prev.next = list2
            prev = list2
            list2 = list2.next
        }
    }

    //Need conditions for if/when we iterate through one list and the other list still has nodes
    if(!list1) prev.next = list2    //If we reached 'null' on list1, we assign list2 to prev.next. This will handle the remainder of list2 nodes
    if(!list2) prev.next = list1    //If we reached 'null' on list2, we assign list1 to prev.next. This will handle the remainder of list2 nodes

    return dummy.next
}



//Explanation:
//The main takeaway is that we need to initialize a dummy node. We traverse through the lists with 'prev'. As we are doing that, we are creating connections
//to the 'next' nodes. We are doing that based on whether the value of the node in list1 or list2 is less. And after we create 
//that next connection, we move our prev variable up the line and we also move our list up one. This way, depending on which list is the lesser of the two,
//prev.next will be accurately pointing the right node.


//Breakdown:
// 1 --> 2 --> 4

//1 --> 3 --> 4

//We have a dummy node set up with a -Infinity value. It is basically irrelevant for the value we assign it, but just to be safe, we assign it -Infinity.
//We then assign that 'dummy' node to a variable we called 'prev'. This will be very important later on.

//      (1)    <=  (1)
//1. list1.val <= list2.val, so the if statement fires
//  - we assign list1 to 'prev.next'. So, what this does is point prev.next to the head of list1
//  - we assign list1 to prev, which will move prev to the (1) node. 
//  - we assign list1.next to list1. So, what this does is changes the head of list1 up to the (2) node

//      (1)    <=   (2)
//2. list2.val <= list1.val, so the else statement fires
//  - we assign list2 to 'prev.next'. So, what this does is point prev.next to the head of list2, which is current
//  - we assign list2 to prev, which will move prev to the (1) node in our list2. 
//  - we assign list2.next to list2. So, what this does is changes the head of list2 to the (3) node

//      (2)    <=   (3)
//2. list1.val <= list2.val, so the if statement fires
//  - we assign list1 to 'prev.next'. So, what this does is point prev.next to the head of list1, which is currently (2)
//  - we assign list1 to prev, which will move prev to the (1) node in our list2. 
//  - we assign list1.next to list2. So, what this does is changes the head of list2 to the (3) node