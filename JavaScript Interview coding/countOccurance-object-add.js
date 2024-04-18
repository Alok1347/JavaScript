// Herman interiview question count the occurance of the each and show in the object.

const dataArray = ["rat", "cat", "dog", "cat", "cat", "cat", "rat"];
function counter(elements) {
  const number = {};
  for (ele of elements) {
    if (number[ele]) {
      number[ele] += 1;
    } else {
      number[ele] = 1;
    }
  }
  return console.log(number);
}

counter(dataArray); //  {rat: 2, cat: 4, dog: 1}
