//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, 
loops through the list and checks that the current name is in the string 
passed in. 

The output should be:
'Matched dog_name' if name is in the string, 
if no matches are present console.log 'No Matches'
*/
console.log("================= Exercise #1 =================");
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dog_string, dog_names) {
  for (const dogName of dog_names) {
    if (dog_string.toLowerCase().includes(dogName.toLowerCase())) {
      console.log(`Matched with ${dogName}.`);
    }
  }
}

findWords(dog_string, dog_names);
// Matched with Max.
// Matched with PuRple.
// Matched with dog.

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string 'even index' */
console.log("================= Exercise #2 =================");
arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];

function replaceEvens(arr) {
  new_arr = arr.map((element) => {
    if (arr.indexOf(element) % 2 == 0) {
      element = "even index";
      return element;
    } else {
      return element;
    }
  });
  return new_arr;
}

console.log(replaceEvens(arr));
//Expected output
//Given arr == ['Max','Baseball','Reboot','Goku','Trucks','Rodger']
//Output arr == ['even index', 'Baseball', 'even index', 'Goku', 'even index', 'Rodger']

// QUESTIONS FROM PREWORK ///////////////////////////////////////////////////////////////

// Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the
// function. The first line of the code has been defined as below.
console.log("================= QUESTION 1 =================");
hello_name = (user_name) => console.log(`hello_${user_name.toUpperCase()}!`);

hello_name("dmitry"); // -> hello_DMITRY!

// Question 2
// Write a function, first_odds that prints the odd numbers from 1-100 and returns nothing
console.log("================= QUESTION 2 =================");
first_odds = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
};

first_odds(); /* -> 1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43
                    45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 
                    85 87 89 91 93 95 97 99 */

// Question 3
// Please write a function, max_num_in_list to return the max
// number of a given list. The first line of the code has been defined as below.

// Approach 1.
console.log("================= QUESTION 3.1 =================");
function max_num_in_list(a_list) {
  return a_list.reduce((accumulator, current_value) =>
    accumulator > current_value ? accumulator : current_value
  );
}
console.log(max_num_in_list([1, 6, 8, 19, -2, 0, 14])); // -> 19

// Approach 2.
console.log("================= QUESTION 3.2 =================");
max_num_in_list2 = (a_list) => Math.max(...a_list);
console.log(max_num_in_list([1, 6, 8, 19, -2, 0, 14])); // -> 19

// Approach 3.
console.log("================= QUESTION 3.3 =================");
function max_num_in_list3(a_list) {
  let max = a_list[0];
  for (const number of a_list) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}
console.log(max_num_in_list3([1, 6, 8, 19, -2, 0, 14])); // -> 19

// Question 4
// Write a function to return if the given year is a leap year.
// A leap year is divisible by 4, but not divisible by 100, unless it is
// also divisible by 400. The return should be boolean Type (true/false).
console.log("================= QUESTION 4 =================");
function is_leap_year(a_year) {
  return (
    (a_year % 4 == 0 && a_year % 100 != 0) ||
    (a_year % 400 == 0 && a_year % 100 == 0)
  );
}

console.log(is_leap_year(1600)); // -> true
console.log(is_leap_year(1900)); // -> false
console.log(is_leap_year(2000)); // -> true
console.log(is_leap_year(2020)); // -> true
console.log(is_leap_year(2021)); // -> false
console.log(is_leap_year(2022)); // -> false

// Question 5
// Write a function to check to see if all numbers in list are consecutive numbers.
// For example, [2,3,4,5,6,7] are consecutive numbers, but [1,2,4,5]
// are not consecutive numbers. The return should be boolean Type.
console.log("================= QUESTION 5.1 =================");
// Approach 1.
function is_consecutive(a_list) {
  a_list.sort();
  for (let i = 1; i < a_list.length; i++) {
    if (a_list[i - 1] + 1 != a_list[i]) {
      return false;
    }
  }
  return true;
}

console.log(is_consecutive([2, 7, 4, 5, 6, 3])); // -> true
console.log(is_consecutive([1, 2, 4, 5])); // -> false

console.log("================= QUESTION 5.2 =================");
// Approach 2.
function is_consecutive2(a_list) {
  max = Math.max(...a_list);
  min = Math.min(...a_list);

  arrayToCompare = [];
  for (let i = min; i <= max; i++) {
    arrayToCompare.push(i);
  }

  for (let i = 0; i < a_list.length; i++) {
    if (a_list.sort()[i] != arrayToCompare[i]) {
      return false;
    }
  }
  return true;
}

console.log(is_consecutive2([2, 7, 4, 5, 6, 3])); // -> true
console.log(is_consecutive2([1, 2, 4, 5])); // -> false
