// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Oleg",
  age: 24,
  lastName: "Zolotov",
};

for (key in person) {
  console.log(`${key} : ${person[key]}`);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const person2 = {};

const isEmpty = (object) => {
  for (key in object) {
    return console.log(false);
  }
  return console.log(true);
};

isEmpty(person2);

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
  title: "objects",
  description: "Studying objects is very difficult",
  isCompleted: false,
};

const taskMod = {
  title: "bob",
  isCompleted: true,
};

const cloneAndModify = (object, modifications) => {
  const cloneObject = { ...object, ...modifications };
  return cloneObject;
};

console.log(cloneAndModify(task, taskMod));

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
const callAllMethods = (object) => {
  for (let key in object) {
    if (typeof object[key] === "function") {
      object[key]();
    }
  }
};
callAllMethods(myObject);
