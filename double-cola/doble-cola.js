// https://codeforces.com/problemset/problem/82/A

var input = 1802;

function createArray(input) {
  if (input >= 1 && input <= 10 ** 9) {
    var persons = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
    for (i = 1; i <= 8000000; i = 2 * i) {
      const queueNumber = 2 * i;
      for (j = 1; j <= queueNumber; j++) {
        persons.push(persons[0]);
      }
      for (j = 1; j <= queueNumber; j++) {
        persons.push(persons[1]);
      }
      for (j = 1; j <= queueNumber; j++) {
        persons.push(persons[2]);
      }
      for (j = 1; j <= queueNumber; j++) {
        persons.push(persons[3]);
      }
      for (j = 1; j <= queueNumber; j++) {
        persons.push(persons[4]);
      }
      if (persons.length >= input) {
        break;
      }
    }
    return persons[input - 1];
  } 
  return 0;
}

var output = createArray(input);
