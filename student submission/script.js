let submissions = [
  { name: `Jane`, score: 95, date: `2020-01-24`, passed: true },
  { name: `Joe`, score: 77, date: `2018-05-14`, passed: true },
  { name: `Jack`, score: 59, date: `2019-07-24`, passed: false },
  { name: `Jill`, score: 88, date: `2020-04-22`, passed: true },
];
function addSubmission(array, newName, newScore, newDate) {
  let newSubmissions = {
    name: newName,
    score: newScore,
    date: newDate,
  };

  newSubmissions.score >= 60
    ? (newSubmissions.passed = true)
    : (newSubmissions.passed = false);
  array.push(newSubmissions);
}

// let newSubmission = new addSubmission(submissions, "Jake", 66, `2020-05-14`);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
// deleteSubmissionByIndex(submissions, 0);
// console.log(submissions)

function deleteSubmissinByName(array, name) {
  let test = (i) => i.name === name;
  array.splice(array.findIndex(test), 1);
}

// deleteSubmissinByName(submissions, `Jane`);
// console.log(submissions)

function editSubmission(array, index, score) {
  array[index].score = score;
  if (array[index].score >= 60) {
    array[index].passed = true;
  } else {
    array[index].passed = false;
  }
}

// editSubmission(submissions, 0, 60);
// console.log(submissions)

function findSubmissionByName(array, name) {
  let find = array.find((i) => i.name === name);
  return find;
}
// console.log(findSubmissionByName(submissions, `Jane`));

function findLowestScore(array) {
  let lowest = 101;
  //   for (i of array)
  //     if (i.score < lowest) {
  //       lowest = i.score;
  //     }
  //     return lowest
  // }

  array.forEach((i) => {
    if (i.score < lowest) {
      lowest = i.score;
    }
  });
  return lowest;
}

// console.log(findLowestScore(submissions));

function findAverageScore(array) {
  avg = 0;
  for (i of array) {
    avg += i.score;
  }
  return avg / array.length;
}

// console.log(findAverageScore(submissions));

function filterPassing(array) {
  let result = array.filter((i) => i.passed === true);
  return result;
}

// console.log(filterPassing(submissions))

function filter90AndAbove(array) {
  let result = array.filter((i) => i.score >= 90);
  return result;
}

// console.log(filter90AndAbove(submissions))

function createRange(start, end) {
  let result = document.createRange();
  result.setStart(start, 0);
  result.setEnd(end, 0);
  return result;
}

console.log(createRange(2, 5));

// function countElements(array) {}
