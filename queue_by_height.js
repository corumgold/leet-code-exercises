// You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order).
// Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.

// Reconstruct and return the queue that is represented by the input array people.
// The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue
// (queue[0] is the person at the front of the queue).

// Example 1:
// Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
// Explanation:
// Person 0 has height 5 with no other people taller or the same height in front.
// Person 1 has height 7 with no other people taller or the same height in front.
// Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
// Person 3 has height 6 with one person taller or the same height in front, which is person 1.
// Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
// Person 5 has height 7 with one person taller or the same height in front, which is person 1.
// Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.

// Example 2:
// Input: people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]
// Output: [[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]

var reconstructQueue = function (people) {
  debugger;
  //order the people by height first...
  people.sort().reverse();
  for (let i = 0; i < people.length; i++) {
    let person = people[i];
    let height = person[0];
    let position = person[1];
    let tallerInFront = 0;
    //check people in front!
    for (let j = 0; j < people.length; j++) {
      //if we're no longer checking people in front, move on.
      if (j >= i) {
        break;
      }
      let checkHeight = people[j][0];
      if (checkHeight >= height && j < i) {
        tallerInFront++;
      }
      //if there are too many people in front, move him forward and check again.
      if (tallerInFront > position) {
        people.splice(i, 1);
        people.splice(i - 1, 0, person);
        i--;
        break;
      }
    }
  } return people;
};

reconstructQueue([
  [7, 0],
  [4, 4],
  [7, 1],
  [5, 0],
  [6, 1],
  [5, 2],
]);
