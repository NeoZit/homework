// Задание 1.
// Дан массив пользователей:
const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }
users.push({ name: "Ann", age: 19, isAdmin: false });
users.push({ name: "Jack", age: 43, isAdmin: true });
console.log(users);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = function (arr) {
  let sum = 0;

  arr.forEach((item) => {
    sum += item.age / users.length;
  });
  return console.log(sum);
};

getUserAverageAge(users);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = function (arr) {
  const admins = [];

  arr.forEach((item) => {
    if (item.isAdmin === true) {
      admins.push(item);
    }
  });

  return console.log(admins);
};

getAllAdmins(users);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const first = function (arr, n) {
  if (n === 0) {
    return console.log([]);
  } else if (n === undefined) {
    return console.log(arr.at(0));
  } else if (n > arr.length - 1) {
    return console.error(
      `${n} не может быть больше длины массива ${arr.length - 1}`,
    );
  }

  const newArr = [];

  arr.forEach((item, i) => {
    if (i <= n) {
      newArr.push(item);
    }
  });
  return console.log(newArr);
};

first(numbers, 5);
