// const greet = (ner) => {
//     console.log(`"Сайн уу, ${ner}!"`);

// } ;
// greet ("Бат");
// greet ("Ану");
// greet ("Номин");

// const getLength = (word) => {
//     const length = word.length
//     return length
// } ;

// console.log(getLength("apple"));

// const toUpper = (text) => {
//     return text.toUpperCase();
// } ;

// console.log(toUpper("apple"));

// const toLower = (text) => {
//     return text.toLowerCase();
// } ;

// console.log(toLower("HELLO"));

// const vallue = (text) => {
//     return text.charAt(0);
// } ;

// console.log(vallue("HELLO"));

// const vallue = (text) => {
//     return text.at(-1);
// } ;

// console.log(vallue("HELLO"));

// const vallue = (first, second) => {
//     return first.concat(" ", second)
// } ;

// console.log(vallue("Good", "morning"));

// const vallue = (first) => {
//     return first.trim()
// } ;

// console.log(vallue(" hello "));

// const vallue = (word, count) => {
//     return word.repeat(count)
// } ;

// console.log(vallue("ha", 3));

// const vallue = (word) => {
//     return word.split("").reverse().join("")
// } ;

// console.log(vallue("hello"));

// const vallue = (word) => {
//     if(word.length >= 3) {
//         return word.slice(0, 3)
//     }
// } ;

// console.log(vallue("hello"));

// const vallue = (word) => {
//         return word.slice(-2)
// } ;

// console.log(vallue("hello"));

// const vallue = (word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
// } ;

// console.log(vallue("hello"));

// let count = 0;

// const vallue = (word) => {
//   for (let i = 0; i < word.length; i++) {
//     if ("aeiou".includes(word[i])) {
//       count++;
//     }
//   };
//   return count
// };

// console.log(vallue("hello"));

// const vallue = (word) => {

//   return word.split(" ").length-1
// };

// console.log(vallue("I love coding"));

// const vallue = (a, b) => {
//   return a * b;
// };

// console.log(vallue(4, 5));

// const vallue = (a) => {
//   return Math.pow(a, 2);
// };

// console.log(vallue(4));

// const vallue = (a, b) => {
//   return Math.max(a, b);
// };

// console.log(vallue(4, 9));

// const vallue = (a) => {
//    let array = a.toString().split("");
//    let sum = 0;
//    for ( let i = 0; i < array.length; i++) {
//     sum += Number(array[i])
//    };
//    return sum
// };

// console.log(vallue(472));

// const vallue = (a) => {
//    let currentYear = new Date().getFullYear();
//    return currentYear - a
// };

// console.log(vallue(2000));

// const vallue = (a, b) => {
//    return a - a * b / 100
// };

// console.log(vallue(10000, 20));

// const vallue = (a, b) => {
//    return (a + b)*2
// };

// console.log(vallue(4, 6));

// const vallue = (a) => {
//    return a * 60
// };

// console.log(vallue(2));

// const vallue = (a) => {
//    let array = a.toString().split("").reverse();
//    let too = 0;
//     for (let i = 0; i < array.length; i++) {
//         too = too * 10 + Number(array[i])
//     };
//     return too
// };

// console.log(vallue(475));

// const vallue = (a) => {
//    return a * (a+1) /2
// };

// console.log(vallue(5));

// const vallue = (a) => {
//     let fac = 1;
//    for (let i = 1; i <= a; i++) {
//     fac *= i
//    };
//    return fac
// };

// console.log(vallue(5));

// const vallue = (a, b) => {
//     return Math.pow(a, b)
// };

// console.log(vallue(2, 3));

// const vallue = (a) => {
//     if (a % 2 === 0) {
//         return true
//     } else {return false}
// };

// console.log(vallue(7));

// const vallue = (a, b) => {
//     if (a === b) {
//         return true
//     } else {return false}
// };

// console.log(vallue(5, "5"));

// const vallue = (a) => {
//     if (a % 5 === 0) {
//         return true
//     } else {return false}
// };

// console.log(vallue(20));

// const vallue = (a, b) => {
//     return `${a} ${b}`
// };

// console.log(vallue("Болд" , "Бат"));

// const vallue = (a, b) => {
//     return a*b
// };

// console.log(vallue(500, 4));

// const vallue = (a, b) => {
//     return {name: a, age: b}
// };

// console.log(vallue("Бат", 20));

// const vallue = (student) => {
//     if (student.score >= 60) {
//         return true
//     } else {
//         return false
//     }
// };

// console.log(vallue ({score: 85}));

// const vallue = (user) => {
//     return user.address.city
// };

// console.log(vallue ({address: {city: "Darkhan"}}));

// const vallue = (rectangle) => {
//     return rectangle.width * rectangle.height
// };

// console.log(vallue ({width: 5, height: 3}));

// const vallue = (product) => {
//     return Object.values(product)
// };
// console.log(vallue ({title: "Nom", price: 5000}));

// const vallue = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
//     };
//     return sum
// };

// console.log(vallue ([10, 20]));

// const vallue = (numbers) => {
//     return Math.min(...numbers)
// };

// console.log(vallue ([3, 9, 2]));

// const vallue = (numbers) => {
//     let shine = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             shine.push(numbers[i])
//         }
//     };
//     return shine
// };

// console.log(vallue ([1, 2, 3, 4]));

// const vallue = (numbers) => {
//     let shine = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             shine.push(numbers[i])
//         }
//     };
//     return shine
// };

// console.log(vallue ([-2, 3, -5, 0]));

// const vallue = (numbers) => {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             sum += numbers[i]
//         }
//     };
//     return sum
// };

// console.log(vallue ([1, 2, 3, 4]));

// const vallue = (words) => {
//     let shine = [];
//     for (let i = 0; i < words.length; i++) {
//         shine.push(words[i].toUpperCase())
//     };
//     return shine
// };

// console.log(vallue (["cat", "dog"]));

// const vallue = (firstArray, secondArray) => {
//     return firstArray.concat(secondArray)
// };

// console.log(vallue (["a"], ["b", "c"]));

// const vallue = (products, minPrice) => {
//   let shine = [];
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].price > minPrice) {
//       shine.push(products[i]);
//     }
//   }
//   return shine;
// };

// console.log(
//   vallue(
//     [
//       { title: "Аяга", price: 2000 },
//       { title: "Сав", price: 5000 },
//     ],
//     3000,
//   ),
// );

// 11r bodlogo

// const vallue = (text) => {
//   const prefix = "[";
//   const suffix = "]";

//   console.log(prefix.concat(text.concat(suffix)));
// };

// vallue("sun");

// const vallue = (text) => {
//   let useg = [];
//     for (let i = 0; i < text.length ; i++) {
//         useg += `"${i+1}: ${text.charAt(i)}" `
//   }
//   console.log(useg);
// };

// vallue("sun");

// const vallue = (text) => {
//   let useg = "";
//   for (let i = 1; i <= text.length - 1; i += 2) {
//     useg += `"${text.charAt(i)}" `;
//   }
//   console.log(useg);
// };

// vallue("hello");

// const vallue = (text) => {
//   let useg = text.slice(-4);
//   let ug = useg.padStart(8, "*")
//   console.log(ug);

// };

// vallue("99112233");

// const vallue = (text) => {
//   let useg = text.slice(-4);
//   let ug = useg.padStart(8, "*")
//   console.log(ug);

// };

// vallue("99112233");

// const vallue = (text, oldWord, newWord) => {
//   let shine = text.replace(oldWord, newWord);
//   console.log(shine);
// };

// vallue("I like tea", "tea", "coffee");

// const vallue = (text) => {
//   const splitted = text.split(" ");

//   console.log(splitted);
// };

// vallue("We learn JavaScript");

// const vallue = (text) => {
//   const zaigui = text.replaceAll(" ","");
//   const hashtag = "#";
//   const niilsen = hashtag.concat(zaigui)

//   console.log(niilsen);
// };

// vallue("Learn JavaScript");

// const vallue = (text) => {
//     let busad = "";
//   for (let i = 0; i < text.length; i++) {
//     if ("aeiou".includes(text[i])){
//     } else {
//         busad += `"${text[i]}" `
//     }
//   };
//   console.log(busad);

// };

// vallue("cat");

// const vallue = (a, b) => {
//     const buhel = Math.floor(a/b);
//     const uldegdel = a % b;
//     console.log(`"Бүхэл хээг: ${buhel}, үлдэгдэл: ${uldegdel}"`)
// };

// vallue(17, 5);

// const vallue = (number) => {
//     console.log(number.toFixed(2));
// };
// vallue(3.14159)

// const vallue = (number) => {
//     const farr = number * 9 / 5 +32;
//     console.log(`${farr}F`);
// };
// vallue(0);

// const vallue = (number) => {
//     const meter = Math.floor(number / 100);
//     const sant = number % 100;
//     console.log(`"${meter} m ${sant} cm"`);
// };
// vallue(175);

// const vallue = (number) => {
//     const meter = Math.floor(number / 1000);
//     const sant = number % 1000;
//     console.log(`"${meter} kg ${sant} g"`);
// };
// vallue(2500);

// const vallue = (a, b) => {
//     console.log(Math.abs(a - b));
// };
// vallue(3, 10);

// const vallue = (a, b) => {
//   console.log(Math.ceil(a / b));
// };
// vallue(14, 6);

// const vallue = (a, b) => {
//   console.log(Math.ceil(a / b));
// };
// vallue(23, 10);

// const vallue = (a, b) => {
//     if (b > 0) {
//     console.log(`${Math.ceil(a / b)} сар`);
//     };
// };
// vallue(1000, 300);

// const vallue = (number) => {
//     const doosh = Math.floor(number);
//     const deesh = Math.ceil(number);
//     console.log(`Доош: ${doosh}, дээш: ${deesh}`);

// };
// vallue(4.3);

// const vallue = (number) => {
//  if (number >= 0 && number <= 20) {
//     console.log("Цэнэг бага");

//  } else if (number >= 21 && number <= 80) {
//     console.log("Цэнэг хэвийн");
//  } else if (number >= 81 && number <= 100) {
//     console.log("Цэнэг өндөр");

//  } else {console.log("буруу");
//  }

// };
// vallue(20);

// const vallue = (number) => {
//  if (number === "red") {
//     console.log("Зогс");
//  } else if (number === "yellow") {
//     console.log("Бэлд");
//  } else if (number === "green") {
//     console.log("Яв");

//  } else {console.log("буруу");
//  }

// };
// vallue("red");

// const vallue = (number) => {
//   if (number >= 0 && number < 100) {
//     console.log("Шингэн ус");
//   } else if (number >= 100) {
//     console.log("Уур");
//   } else {
//     console.log("Мөс");
//   }
// };
// vallue(5);

// const vallue = (number) => {
//   if (number >= 1 && number <= 2) {
//     console.log("Сайжруулах шаардлагатай");
//   } else if (number === 3) {
//     console.log("Дундаж");
//   } else if (number >= 4 && number <= 5) {
//     console.log("Сайн");
//   } else {
//     console.log("Буруу");
//   }
// };
// vallue(2);

// const vallue = (name) => {
//   if (name.length >= 4 && name.length <= 12) {
//     console.log("Нэрийн урт тохиромжтой");
//   } else {
//     console.log("4–12 тэмдэгт оруулна уу");
//   }
// };
// vallue("coder");

// const vallue = (a, b) => {
//   if (a > b) {
//     console.log("Талбайн эзэд хожлоо");
//   } else if (a < b) {
//     console.log("Зочин баг хожлоо");
//   } else {
//     console.log("Тэнцлээ");
//   }
// };
// vallue(3, 1);

// const vallue = (a, b) => {
//   if (a > b) {
//     console.log("Доош явна");
//   } else if (a < b) {
//     console.log("Дээш явна");
//   } else {
//     console.log("Энэ давхарт байна");
//   }
// };
// vallue(3, 1);

// const vallue = (a, b) => {
//   if (a > b) {
//     console.log("Багтаамж хэтэрсэн");
//   } else if (a < b) {
//     console.log("Зай байна");
//   } else {
//     console.log("Дүүрсэн");
//   }
// };
// vallue(70, 100);

// const vallue = (isPaid, isCancelled) => {
//   if (isCancelled) {
//     console.log("Цуцлагдсан");
//   } else {
//     if (isPaid) {
//       console.log("Баталгаажсан");
//     } else {
//       console.log("Төлбөр хүлээж байна");
//     }
//   }
// };
// vallue(true, true);

// const vallue = (product, newPrice) => {
//  const shine = Object.assign(product, {price: newPrice});
//  console.log(shine);

// };
// vallue({ title: "Дэвтэр", price: 2000 }, 2500);

// const vallue = (task) => {
//   const shine = Object.assign(task, { completed: true });
//   console.log(shine);
// };
// vallue({ title: "Унших", completed: false });

// const vallue = (task, phone) => {
//   const shine = Object.assign(task, { phone: phone });
//   console.log(shine);
// };
// vallue({ name: "Болд" }, "99112233");

// const vallue = (account) => {
//   delete account.password;
//   console.log(account);
// };
// vallue({ username: "bold", password: "abc" });

// const vallue = (product, amount) => {
//   product.stock += amount;
//   console.log(product);
// };
// vallue({ stock: 5 }, 3);

// const vallue = (cart, item) => {
//   cart.push(item);
//   console.log(cart);
// };
// vallue(["Сүү"], "Талх");

// const vallue = (queue) => {
//  const first = queue.shift();
//  console.log(`"Үйлчлүүлсэн: ${first}", ${queue}`);

// };
// vallue(["Ану", "Бат", "Номин"]);

// const vallue = (items, index, newValue) => {
//   const shine = items.splice(index, 1, newValue);
//   console.log(items);
// };
// vallue(["a", "b", "c"], 1, "x");

// const vallue = (tasks) => {
//   for (let i = 0; i < tasks.length; i++) {
//     tasks[i].done = true;
//   }
//   console.log(tasks);
// };
// vallue([
//   { title: "B", done: false },
//   { title: "C", done: true },
// ]);

// const vallue = (email) => {
//   const shine = email.split("@").at(0);
//   console.log(shine);
// };
// vallue("bold@example.com");

// const vallue = (items) => {
//   const first = items.shift();
//   const last = items.pop();
//   items.unshift(last);
//   items.push(first);
//   console.log(items);
// };
// vallue([1, 2, 3, 4]);

// 12r bodlogo

// const delay = (delay) => {
// console.log("Сайн байна уу!");

// };
// const time = setTimeout(delay, 1000)

// const delay = (firstDelay, secondDelay) => {
//   setTimeout(() => {
//     console.log("Эхний мэдэгдэл");
//   }, firstDelay);
//   setTimeout(() => {
//     console.log("Хоёр дахь мэдэгдэл");
//   }, secondDelay);
// };

// delay(1000, 2000);

// const delay = (stepDelay) => {
//   setTimeout(() => {
//     console.log("Номоо нээ");
//   }, stepDelay);
//   setTimeout(() => {
//     console.log("Бодлогоо унш");
//   }, stepDelay*2);
//   setTimeout(() => {
//     console.log("Бодож эхэл");
//   }, stepDelay*3);
// };
// delay(1000);

// const delay = (a, b) => {
//   console.log("Тооцоолж байна...");
//   setTimeout(() => {
//     console.log(a+b);
//   }, 2000);
// };
// delay(12, 8);

// console.log("Хүлээгдэж байна");
// const delay = (nextStatus) => {
//     setTimeout(() => {
//       console.log(nextStatus);
//     }, 2000);
// };
// delay ("Баталгаажсан")

// const delay = (notification) => {
//     setTimeout(() => {
//       notification.isRead = true;
//       console.log(notification);
//     }, 3000);
// };
// delay ({ text: "Хичээл", isRead: false })

// const delay = (cart, item) => {
//     setTimeout(() => {
//       cart.push(item)
//       console.log(cart);
//     }, 2000);
// };
// delay (["Талх"], "Сүү")

// const delay = (hasHomework, delay) => {
//   if (hasHomework) {
//     setTimeout(() => {
//       console.log("Гэрийн даалгавраа хийгээрэй");
//     }, delay);
//   }
// };
// delay(true, 1000);

// const delay = (isSubmitted, delay) => {
//   setTimeout(() => {
//     if (isSubmitted) {
//       console.log("Даалгавар илгээгдсэн");
//     } else {
//       console.log("Даалгавраа илгээнэ үү");
//     }
//   }, delay);
// };
// delay(false, 1000);

// const delay = (time) => {
//   const timer = setTimeout(() => {
//     console.log("Мэдэгдэл");
//   }, time);
//   clearTimeout(timer);
//   console.log("Мэдэгдлийг цуцаллаа")
// };
// delay(2000);

// const delay = (alarmDelay, cancelDelay) => {
//   const timer = setTimeout(() => {
//     console.log("seruuleg");
//   }, alarmDelay);
//   clearTimeout(timer);
//   setTimeout(() => {
//     console.log("Сэрүүлгийг унтраалаа")
//   }, cancelDelay);

// };
// delay(5000, 2000);

// let count = 0;
// let limit = 3;
// const delay = () => {
//   count++;
//   console.log("Сайн уу");

//   if (count >= limit) {
//     clearInterval(timer);
//   }
// };

// const timer = setInterval(delay, 1000);

// let count = 0;
// let limit = 3;
// const delay = () => {
//   count++;
// console.log(count);

//   if (count >= limit) {
//     clearInterval(timer);
//   }
// };

// const timer = setInterval(delay, 1000);

// let count = 5;

// const delay = () => {
//   console.log(count);
//   count--;

//   if (count <= 0) {
//     clearInterval(timer);
//   }
// };

// const timer = setInterval(delay, 1000);

// let end = 10;
// let count = 0;
// const delay = () => {

//   count+= 2;
//   console.log(count);

//   if (count === end) {
//     clearInterval(timer);
//   }
// };

// const timer = setInterval(delay, 500);

// let end = 15;
// let count = 0;
// const delay = () => {
//   count += 5;
//   console.log(count);

//   if (count === end) {
//     clearInterval(timer);
//   }
// };

// const timer = setInterval(delay, 1000);

// let count = 0;
// let step = 50;
// const delay = () => {
//   count += step;
//   if (count >= 100) {
//     clearInterval(timer);
//     console.log(`Tatalt: 100%`);

//   } else {console.log(`Tatalt: ${count}%`);}

// };

// const timer = setInterval(delay, 1000);

// let count = 3;

// const delay = () => {
//   console.log(count);
//   count--;
//   if (count <= 0) {
//     clearInterval(timer);
//   }

// };
// const timer = setInterval(delay, 1000);

// setTimeout(() => {
//     console.log("Эхэл!");

//   }, 1000*count+1000);

// let distance = 3;

// const delay = (time) => {
//   setTimeout(() => {
//     console.log("Хүргэлт эхэллээ");

//     const intervalId = setInterval(() => {
//       console.log(distance);
//       distance--;

//       if (distance < 0) {
//         clearInterval(intervalId);
//         console.log("Хүргэлт ирлээ");
//       }
//     }, 1000);
//   }, time);
// };
// delay(2000);

// let score = 0;
// let duration = 2600;
// let count = 1;

// const delay = () => {
//   const intervalId= setInterval(() => {
//       score += 10;
//       console.log(score);
//       ++count;
//       if (duration <= 500*count) {
//       clearInterval(intervalId);
//       console.log(`Эцсийн оноо ${score}`);

//     }
//     }, 500);

// }
// delay();

let pauseAt = 3;
let end = 6;
let count = 0;

const delay = () => {
  const intervalId = setInterval(() => {
    ++count;
    console.log(count);

    if (count === pauseAt) {
      clearInterval(intervalId);
      setTimeout(() => {
        console.log("Үргэлжилж байна");
        const interval2 = setInterval(() => {
          ++count;
          console.log(count);
          if (count === end){
            clearInterval(interval2)
          }
        }, 1000);
      }, 2000);
    }
  }, 1000);
};
delay();
