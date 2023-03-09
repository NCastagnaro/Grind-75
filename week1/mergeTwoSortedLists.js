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
//  - we assign list1 to 'prev.next'. So, what this does is point prev.next to the head of list1, which is currently (1)
//  - we assign list1 to prev, which will move prev to the (1) node. 
//  - we assign list1.next to list1. So, what this does is changes the head of list1 up to the (2) node

//      (1)    <=   (2)
//2. list2.val <= list1.val, so the else statement fires
//  - we assign list2 to 'prev.next'. So, what this does is point prev.next to the head of list2, which is currently (1)
//  - we assign list2 to prev, which will move prev to the (1) node in our list2. 
//  - we assign list2.next to list2. So, what this does is changes the head of list2 to the (3) node

//      (2)    <=   (3)
//3. list1.val <= list2.val, so the if statement fires
//  - we assign list1 to 'prev.next'. So, what this does is point prev.next to the head of list1, which is currently (2)
//  - we assign list1 to prev, which will move prev to the (2) node in our list1. 
//  - we assign list1.next to list1. So, what this does is changes the head of list1 to the (4) node

//      (3)    <=   (4)
//4. list2.val <= list1.val, so the else statement fires
//  - we assign list2 to 'prev.next'. So, what this does is point prev.next to the head of list2, which is currently (3)
//  - we assign list2 to prev, which will move prev to the (3) node in our list2. 
//  - we assign list2.next to list2. So, what this does is changes the head of list2 to the (4) node

//      (4)    <=   (4)
//5. list1.val <= list2.val, so the if statement fires
//  - we assign list1 to 'prev.next'. So, what this does is point prev.next to the head of list1, which is currently (4)
//  - we assign list1 to prev, which will move prev to the (4) node in our list1. 
//  - we assign list1.next to list1. So, what this does is changes the head of list1 to null bc we are at the end of the list.

//6. The while loop no longer fires because we don't have anymore nodes in list1. So, the first if statement fires 
//  if(!list1) prev.next = list2   What happens is we assign list2 to prev.next. This will point to the head of list2 and handle the remaining nodes. 
//So, in this case it will point to the (4) node in our list2. But, if we had 10 more nodes after this for example, it will be able to handle all those as well. 
//That is because when you point to a head, it also returns the nodes it's connected to, if you leave it at there, and don't update the 'next' property.
//This whole time, we weren't returning all the nodes after the node we point to bc we kept updating the next property. 
//But, if we had 4 --> 8 --> 9 --> 12, and we set prev.next = list2, where list2 is (4) at the time, we would assign all those nodes
//to prev.next. Therefore, it would handle all the nodes after it.

//7. Finally, we return dummy.next. Remember, 'dummy' was set to -Infinity. And we assigned dummy to prev initially.
//So, by returning dummy.prev, it will return the sorted chain that we made throughout. That is why it was so important to point prev.next to the 
//correct node and update prev accordingly.

//Note: we don't return prev.next because that will just return the next node of where 'prev' left off at, which in this 
//case was null. The list returned would be nothing in this case. 