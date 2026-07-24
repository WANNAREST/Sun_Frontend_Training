# Kiểu dữ liệu trong JavaScript

JavaScript là ngôn ngữ **dynamically typed**, nghĩa là kiểu dữ liệu của biến được xác định trong lúc chương trình chạy. Một biến có thể chứa kiểu dữ liệu này ở thời điểm hiện tại và đổi sang kiểu dữ liệu khác sau đó.

Ví dụ:

```javascript
let value = 100;
console.log(typeof value); // "number"

value = "Hello";
console.log(typeof value); // "string"
```

JavaScript có thể chia kiểu dữ liệu thành hai nhóm lớn:

* **Primitive types**: kiểu dữ liệu nguyên thủy.
* **Object type**: kiểu đối tượng.

Các kiểu nguyên thủy gồm:

* `number`
* `bigint`
* `string`
* `boolean`
* `null`
* `undefined`
* `symbol`

Ngoài ra còn có kiểu:

* `object`

 

## 1. Introduction

Biến trong JavaScript không bị cố định kiểu ngay từ khi khai báo.

Ví dụ:

```javascript
let data = 10;

data = "JavaScript";

data = true;
```

Trong ví dụ trên, biến `data` lần lượt chứa:

* số;
* chuỗi;
* giá trị logic.

Có ba cách khai báo biến phổ biến:

```javascript
let age = 20;
const name = "An";
var oldStyle = true;
```

Trong đó:

* `let`: dùng cho biến có thể thay đổi giá trị.
* `const`: dùng cho biến không được gán lại.
* `var`: cách khai báo cũ, thường nên hạn chế dùng.

Ví dụ:

```javascript
let score = 8;
score = 9;

const university = "HUST";
// university = "Another University"; // Lỗi
```

 

## 2. Number

Kiểu `number` được dùng cho cả số nguyên và số thực.

Ví dụ:

```javascript
let age = 20;
let price = 19.99;
let temperature = -5;
```

Kiểm tra kiểu:

```javascript
console.log(typeof age);         // "number"
console.log(typeof price);       // "number"
console.log(typeof temperature); // "number"
```

### Các phép toán cơ bản

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

Trong đó:

* `+`: cộng.
* `-`: trừ.
* `*`: nhân.
* `/`: chia.
* `%`: lấy phần dư.
* `**`: lũy thừa.

### Một số giá trị đặc biệt

#### `Infinity`

```javascript
console.log(1 / 0); // Infinity
```

#### `-Infinity`

```javascript
console.log(-1 / 0); // -Infinity
```

#### `NaN`

`NaN` có nghĩa là **Not a Number**.

```javascript
let result = "hello" / 2;

console.log(result);        // NaN
console.log(typeof result); // "number"
```

Điểm đặc biệt là `NaN` vẫn có kiểu là `number`.

### Kiểm tra NaN

```javascript
let value = Number("abc");

console.log(Number.isNaN(value)); // true
```

Không nên kiểm tra bằng:

```javascript
console.log(value === NaN); // false
```

Vì `NaN` không bằng chính nó:

```javascript
console.log(NaN === NaN); // false
```

### Chuyển chuỗi thành số

```javascript
let value1 = Number("123");
let value2 = parseInt("45px");
let value3 = parseFloat("3.14");

console.log(value1); // 123
console.log(value2); // 45
console.log(value3); // 3.14
```

 

## 3. BigInt

`BigInt` được sử dụng cho số nguyên rất lớn, vượt quá phạm vi an toàn của kiểu `number`.

Phạm vi số nguyên an toàn của `number`:

```javascript
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991
```

Khai báo `BigInt` bằng cách thêm chữ `n` vào cuối số:

```javascript
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber); // "bigint"
```

Hoặc dùng hàm `BigInt()`:

```javascript
let value = BigInt("999999999999999999");

console.log(value);
```

### Phép toán với BigInt

```javascript
let a = 100n;
let b = 20n;

console.log(a + b); // 120n
console.log(a - b); // 80n
console.log(a * b); // 2000n
console.log(a / b); // 5n
```

### BigInt chỉ lưu số nguyên

```javascript
console.log(5n / 2n); // 2n
```

Kết quả không phải `2.5n`, vì phần thập phân bị bỏ.

### Không thể cộng trực tiếp Number và BigInt

```javascript
let a = 10;
let b = 20n;

// console.log(a + b); // TypeError
```

Cần chuyển chúng về cùng kiểu:

```javascript
console.log(BigInt(a) + b); // 30n
```

Hoặc:

```javascript
console.log(a + Number(b)); // 30
```

### Khi nào nên dùng BigInt?

BigInt phù hợp với:

* ID số rất lớn;
* phép tính tài chính đặc biệt;
* số nguyên có nhiều chữ số;
* thuật toán mã hóa;
* dữ liệu vượt phạm vi an toàn của `number`.

 

## 4. String

`string` dùng để lưu trữ văn bản.

Có ba cách tạo chuỗi:

```javascript
let firstName = "Minh";
let lastName = 'Quan';
let message = `Hello`;
```

### Nối chuỗi

```javascript
let firstName = "Minh";
let lastName = "Quan";

let fullName = firstName + " " + lastName;

console.log(fullName); // Minh Quan
```

### Template Literal

Template literal sử dụng dấu backtick:

```javascript
let name = "Minh";
let age = 21;

let message = `Tên tôi là ${name}, tôi ${age} tuổi.`;

console.log(message);
```

Ưu điểm:

* Chèn biến dễ dàng.
* Có thể viết chuỗi nhiều dòng.

Ví dụ:

```javascript
let text = `
Dòng thứ nhất
Dòng thứ hai
Dòng thứ ba
`;

console.log(text);
```

### Độ dài chuỗi

```javascript
let text = "JavaScript";

console.log(text.length); // 10
```

### Truy cập ký tự

```javascript
let text = "Hello";

console.log(text[0]); // H
console.log(text[1]); // e
```

### Một số phương thức phổ biến

```javascript
let text = "  JavaScript Basic  ";

console.log(text.trim());        // "JavaScript Basic"
console.log(text.toUpperCase()); // "  JAVASCRIPT BASIC  "
console.log(text.toLowerCase()); // "  javascript basic  "
console.log(text.includes("Script")); // true
console.log(text.startsWith("  Java")); // true
console.log(text.endsWith("  ")); // true
```

### Cắt chuỗi

```javascript
let text = "JavaScript";

console.log(text.slice(0, 4)); // Java
console.log(text.slice(4));    // Script
```

### Thay thế nội dung

```javascript
let text = "I like Java";

let result = text.replace("Java", "JavaScript");

console.log(result); // I like JavaScript
```

### Tách chuỗi

```javascript
let skills = "HTML,CSS,JavaScript";

let result = skills.split(",");

console.log(result);
// ["HTML", "CSS", "JavaScript"]
```

### String là immutable

Chuỗi không thể thay đổi trực tiếp từng ký tự.

```javascript
let text = "Hello";

text[0] = "Y";

console.log(text); // Hello
```

Muốn thay đổi, cần tạo chuỗi mới:

```javascript
let text = "Hello";

text = "Y" + text.slice(1);

console.log(text); // Yello
```

  

## 5. Boolean

Kiểu `boolean` chỉ có hai giá trị:

```javascript
true
false
```

Ví dụ:

```javascript
let isStudent = true;
let isGraduated = false;

console.log(typeof isStudent); // "boolean"
```

Boolean thường được sử dụng trong câu điều kiện.

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Người dùng đã đăng nhập.");
} else {
    console.log("Người dùng chưa đăng nhập.");
}
```

### Boolean từ phép so sánh

```javascript
console.log(10 > 5);  // true
console.log(10 < 5);  // false
console.log(5 === 5); // true
console.log(5 !== 3); // true
```

### Toán tử logic

#### AND `&&`

Trả về đúng khi cả hai điều kiện đều đúng.

```javascript
let age = 20;
let hasTicket = true;

console.log(age >= 18 && hasTicket); // true
```

#### OR `||`

Trả về đúng nếu ít nhất một điều kiện đúng.

```javascript
let isAdmin = false;
let isManager = true;

console.log(isAdmin || isManager); // true
```

#### NOT `!`

Đảo ngược giá trị logic.

```javascript
let isActive = true;

console.log(!isActive); // false
```

### Truthy và Falsy

Một số giá trị được chuyển thành `false` khi dùng trong điều kiện.

Các giá trị falsy phổ biến:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Ví dụ:

```javascript
if ("") {
    console.log("Chạy");
} else {
    console.log("Không chạy");
}
```

Kết quả:

```text
Không chạy
```

Các giá trị còn lại thường là truthy.

```javascript
if ("hello") {
    console.log("Truthy");
}

if ([]) {
    console.log("Mảng rỗng vẫn là truthy");
}

if ({}) {
    console.log("Object rỗng vẫn là truthy");
}
```

  

## 6. Giá trị null

`null` thể hiện một giá trị **không có**, **trống** hoặc được người lập trình cố ý đặt là không có dữ liệu.

Ví dụ:

```javascript
let selectedUser = null;
```

Điều này có thể hiểu là:

> Hiện tại chưa có người dùng nào được chọn.

Ví dụ thực tế:

```javascript
let currentUser = null;

if (currentUser === null) {
    console.log("Chưa đăng nhập.");
}
```

### typeof null

```javascript
console.log(typeof null); // "object"
```

Đây là một lỗi lịch sử của JavaScript.

Mặc dù `typeof null` trả về `"object"`, nhưng `null` không phải object thực sự.

Cách kiểm tra đúng:

```javascript
let value = null;

console.log(value === null); // true
```

  

## 7. Giá trị undefined

`undefined` có nghĩa là một biến đã được khai báo nhưng chưa được gán giá trị.

```javascript
let value;

console.log(value);        // undefined
console.log(typeof value); // "undefined"
```

Một hàm không trả về giá trị cũng trả về `undefined`.

```javascript
function sayHello() {
    console.log("Hello");
}

let result = sayHello();

console.log(result); // undefined
```

Truy cập thuộc tính không tồn tại:

```javascript
let user = {
    name: "An"
};

console.log(user.age); // undefined
```

### null và undefined khác nhau thế nào?

```javascript
let a = null;
let b;

console.log(a); // null
console.log(b); // undefined
```

Ý nghĩa:

* `null`: người lập trình chủ động đặt là không có dữ liệu.
* `undefined`: chưa được gán hoặc không tồn tại.

So sánh:

```javascript
console.log(null == undefined);  // true
console.log(null === undefined); // false
```

Nên ưu tiên dùng `===` để tránh chuyển đổi kiểu tự động.

  

## 8. Objects và Symbols

## 8.1 Object

Object dùng để lưu trữ nhiều giá trị dưới dạng cặp:

```text
key: value
```

Ví dụ:

```javascript
let student = {
    name: "Minh",
    age: 21,
    major: "Information Technology"
};
```

Truy cập thuộc tính bằng dấu chấm:

```javascript
console.log(student.name); // Minh
console.log(student.age);  // 21
```

Truy cập bằng dấu ngoặc vuông:

```javascript
console.log(student["major"]);
```

### Thay đổi thuộc tính

```javascript
student.age = 22;

console.log(student.age); // 22
```

### Thêm thuộc tính

```javascript
student.email = "minh@example.com";
```

### Xóa thuộc tính

```javascript
delete student.email;
```

### Object có thể chứa nhiều kiểu dữ liệu

```javascript
let user = {
    name: "An",
    age: 20,
    isStudent: true,
    address: {
        city: "Hanoi",
        country: "Vietnam"
    },
    skills: ["HTML", "CSS", "JavaScript"],
    sayHello: function () {
        console.log("Hello");
    }
};
```

Gọi phương thức:

```javascript
user.sayHello();
```

### Object là kiểu tham chiếu

```javascript
let user1 = {
    name: "An"
};

let user2 = user1;

user2.name = "Bình";

console.log(user1.name); // Bình
```

`user1` và `user2` cùng tham chiếu đến một object.

### So sánh object

```javascript
console.log({} === {}); // false
```

Hai object khác nhau dù nội dung giống nhau.

```javascript
let a = {};
let b = a;

console.log(a === b); // true
```

  

## 8.2 Symbol

`Symbol` là một kiểu dữ liệu nguyên thủy dùng để tạo giá trị duy nhất.

```javascript
let id = Symbol();

console.log(typeof id); // "symbol"
```

Hai Symbol luôn khác nhau:

```javascript
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false
```

Dù cùng mô tả `"id"`, hai giá trị vẫn khác nhau.

### Symbol làm key của object

```javascript
let userId = Symbol("userId");

let user = {
    name: "An",
    [userId]: 1001
};

console.log(user[userId]); // 1001
```

Symbol hữu ích khi muốn tạo thuộc tính ít có khả năng bị trùng tên.

Ví dụ:

```javascript
let id = Symbol("id");

let user = {
    id: 1,
    [id]: 999
};

console.log(user.id);  // 1
console.log(user[id]); // 999
```

Hai thuộc tính này hoàn toàn khác nhau.

  

## 9. Toán tử typeof

Toán tử `typeof` được dùng để kiểm tra kiểu dữ liệu của một giá trị.

Cú pháp:

```javascript
typeof value
```

Hoặc:

```javascript
typeof(value)
```

Ví dụ:

```javascript
console.log(typeof 123);          // "number"
console.log(typeof 123n);         // "bigint"
console.log(typeof "Hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {});           // "object"
console.log(typeof function () {}); // "function"
```

### Trường hợp đặc biệt của null

```javascript
console.log(typeof null); // "object"
```

Đây là hành vi lịch sử của JavaScript.

Muốn kiểm tra `null`, dùng:

```javascript
let value = null;

console.log(value === null); // true
```

### typeof với array

```javascript
let numbers = [1, 2, 3];

console.log(typeof numbers); // "object"
```

Muốn kiểm tra array, dùng:

```javascript
console.log(Array.isArray(numbers)); // true
```

### typeof với function

```javascript
function greet() {
    console.log("Hello");
}

console.log(typeof greet); // "function"
```

Dù function về mặt kỹ thuật là object đặc biệt, `typeof` trả về `"function"`.

### typeof với biến chưa khai báo

```javascript
console.log(typeof notDeclared); // "undefined"
```

Điều này không gây lỗi.

Tuy nhiên:

```javascript
// console.log(notDeclared); // ReferenceError
```

  

# Bảng tổng hợp kiểu dữ liệu

| Kiểu dữ liệu | Ví dụ                | Kết quả của `typeof` |
| ------------ | -------------------- | -------------------- |
| Number       | `123`, `3.14`, `NaN` | `"number"`           |
| BigInt       | `123n`               | `"bigint"`           |
| String       | `"Hello"`            | `"string"`           |
| Boolean      | `true`, `false`      | `"boolean"`          |
| Null         | `null`               | `"object"`           |
| Undefined    | `undefined`          | `"undefined"`        |
| Symbol       | `Symbol("id")`       | `"symbol"`           |
| Object       | `{}`, `[]`           | `"object"`           |
| Function     | `function () {}`     | `"function"`         |


# Ví dụ tổng hợp

```javascript
let age = 21;
let largeNumber = 999999999999999999n;
let name = "Minh";
let isStudent = true;
let selectedCourse = null;
let score;
let uniqueId = Symbol("id");

let student = {
    name: "Minh",
    age: 21,
    isStudent: true
};

console.log(typeof age);            // "number"
console.log(typeof largeNumber);    // "bigint"
console.log(typeof name);           // "string"
console.log(typeof isStudent);      // "boolean"
console.log(typeof selectedCourse); // "object"
console.log(typeof score);          // "undefined"
console.log(typeof uniqueId);       // "symbol"
console.log(typeof student);        // "object"
```

 

# Một số lưu ý quan trọng

## Dùng `===` thay vì `==`

```javascript
console.log(5 == "5");  // true
console.log(5 === "5"); // false
```

`==` tự động chuyển đổi kiểu, có thể gây kết quả khó đoán.

Nên dùng:

```javascript
if (value === 10) {
    console.log("Giá trị bằng 10 và có kiểu number");
}
```

## Array có typeof là object

```javascript
let items = [];

console.log(typeof items);        // "object"
console.log(Array.isArray(items)); // true
```

## null cần kiểm tra riêng

```javascript
let data = null;

if (data === null) {
    console.log("Dữ liệu đang là null");
}
```

## NaN vẫn là number

```javascript
let result = Number("abc");

console.log(typeof result);       // "number"
console.log(Number.isNaN(result)); // true
```

## Primitive và object khác nhau khi sao chép

Primitive được sao chép theo giá trị:

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Object được sao chép theo tham chiếu:

```javascript
let user1 = {
    name: "An"
};

let user2 = user1;

user2.name = "Bình";

console.log(user1.name); // Bình
```
# Chuyển đổi kiểu dữ liệu trong JavaScript

## 1. Introduction

**Type conversion** là quá trình chuyển một giá trị từ kiểu dữ liệu này sang kiểu dữ liệu khác.

Trong JavaScript có hai loại chuyển đổi kiểu:

* **Chuyển đổi tường minh — Explicit conversion**: lập trình viên chủ động chuyển kiểu bằng các hàm như `String()`, `Number()` hoặc `Boolean()`.
* **Chuyển đổi ngầm định — Implicit conversion**: JavaScript tự động chuyển kiểu khi thực hiện phép toán hoặc so sánh.

Ví dụ chuyển đổi tường minh:

```javascript
let age = 20;

let ageString = String(age);

console.log(ageString);        // "20"
console.log(typeof ageString); // "string"
```

Ví dụ chuyển đổi ngầm định:

```javascript
console.log("5" + 2); // "52"
```

Trong phép toán trên, JavaScript tự động chuyển số `2` thành chuỗi `"2"` rồi thực hiện nối chuỗi.

Một ví dụ khác:

```javascript
console.log("10" - 3); // 7
```

Ở đây, JavaScript chuyển chuỗi `"10"` thành số `10` rồi thực hiện phép trừ.

Chuyển đổi ngầm định có thể tiện lợi nhưng cũng dễ gây ra lỗi khó hiểu. Vì vậy, khi cần kiểm soát rõ kiểu dữ liệu, nên dùng chuyển đổi tường minh.

 

## 2. String Conversion

String conversion là quá trình chuyển một giá trị sang kiểu chuỗi.

Có thể sử dụng hàm:

```javascript
String(value)
```

Ví dụ:

```javascript
let numberValue = 123;
let stringValue = String(numberValue);

console.log(stringValue);        // "123"
console.log(typeof stringValue); // "string"
```

### Chuyển Number sang String

```javascript
console.log(String(100));    // "100"
console.log(String(3.14));   // "3.14"
console.log(String(-20));    // "-20"
console.log(String(NaN));    // "NaN"
console.log(String(Infinity)); // "Infinity"
```

### Chuyển Boolean sang String

```javascript
console.log(String(true));  // "true"
console.log(String(false)); // "false"
```

### Chuyển null và undefined sang String

```javascript
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
```

### Dùng phương thức `toString()`

Một số giá trị có thể được chuyển thành chuỗi bằng `.toString()`:

```javascript
let age = 21;

console.log(age.toString()); // "21"
```

Boolean:

```javascript
let isStudent = true;

console.log(isStudent.toString()); // "true"
```

Array:

```javascript
let skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.toString());
// "HTML,CSS,JavaScript"
```

Tuy nhiên, không thể gọi trực tiếp `.toString()` trên `null` hoặc `undefined`:

```javascript
let value = null;

// console.log(value.toString());
// TypeError
```

Vì vậy, `String(value)` thường an toàn hơn:

```javascript
console.log(String(null)); // "null"
```

### Chuyển đổi ngầm định sang String

Toán tử `+` có thể nối chuỗi.

```javascript
console.log("Age: " + 20); // "Age: 20"
```

JavaScript tự động chuyển `20` thành `"20"`.

Ví dụ:

```javascript
let isAdmin = true;

console.log("Admin: " + isAdmin);
// "Admin: true"
```

### Phân biệt phép cộng và nối chuỗi

```javascript
console.log(2 + 3);       // 5
console.log("2" + 3);     // "23"
console.log(2 + "3");     // "23"
console.log("2" + "3");   // "23"
```

Nếu một trong hai toán hạng của `+` là chuỗi, JavaScript thường thực hiện nối chuỗi.

Thứ tự thực hiện cũng quan trọng:

```javascript
console.log(1 + 2 + "3"); // "33"
```

Giải thích:

```text
1 + 2 = 3
3 + "3" = "33"
```

Trong khi đó:

```javascript
console.log("1" + 2 + 3); // "123"
```

Giải thích:

```text
"1" + 2 = "12"
"12" + 3 = "123"
```

### Template Literal

Template literal tự động chuyển giá trị thành chuỗi.

```javascript
let name = "Minh";
let age = 21;

let message = `Tên tôi là ${name}, tôi ${age} tuổi.`;

console.log(message);
```

Kết quả:

```text
Tên tôi là Minh, tôi 21 tuổi.
```

 

## 3. Numeric Conversion

Numeric conversion là quá trình chuyển một giá trị sang kiểu số.

Có thể dùng:

```javascript
Number(value)
```

Ví dụ:

```javascript
let input = "123";
let numberValue = Number(input);

console.log(numberValue);        // 123
console.log(typeof numberValue); // "number"
```

### Chuyển String sang Number

```javascript
console.log(Number("123"));   // 123
console.log(Number("3.14"));  // 3.14
console.log(Number("-20"));   // -20
```

Chuỗi rỗng hoặc chỉ có khoảng trắng được chuyển thành `0`:

```javascript
console.log(Number(""));      // 0
console.log(Number("   "));   // 0
```

Chuỗi không hợp lệ trả về `NaN`:

```javascript
console.log(Number("hello")); // NaN
console.log(Number("12px"));  // NaN
```

### Chuyển Boolean sang Number

```javascript
console.log(Number(true));  // 1
console.log(Number(false)); // 0
```

### Chuyển null và undefined sang Number

```javascript
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
```

Đây là điểm dễ nhầm:

* `null` chuyển thành `0`.
* `undefined` chuyển thành `NaN`.

### Bảng chuyển đổi sang Number

| Giá trị     | Kết quả |
| ----------- | ------: |
| `"123"`     |   `123` |
| `"3.14"`    |  `3.14` |
| `""`        |     `0` |
| `"   "`     |     `0` |
| `"hello"`   |   `NaN` |
| `true`      |     `1` |
| `false`     |     `0` |
| `null`      |     `0` |
| `undefined` |   `NaN` |

### `parseInt()`

`parseInt()` chuyển chuỗi thành số nguyên.

```javascript
console.log(parseInt("123"));    // 123
console.log(parseInt("45.67"));  // 45
console.log(parseInt("100px"));  // 100
```

`parseInt()` đọc từ trái sang phải và dừng khi gặp ký tự không thể chuyển thành số.

```javascript
console.log(parseInt("20years")); // 20
```

Nhưng nếu ký tự đầu tiên không hợp lệ:

```javascript
console.log(parseInt("age20")); // NaN
```

Nên chỉ định hệ cơ số khi dùng `parseInt()`:

```javascript
console.log(parseInt("101", 10)); // 101
```

### `parseFloat()`

`parseFloat()` chuyển chuỗi thành số thực.

```javascript
console.log(parseFloat("3.14"));   // 3.14
console.log(parseFloat("5.5px"));  // 5.5
console.log(parseFloat("100"));    // 100
```

### So sánh `Number()` và `parseInt()`

```javascript
console.log(Number("100px"));   // NaN
console.log(parseInt("100px")); // 100
```

`Number()` yêu cầu toàn bộ chuỗi phải là số hợp lệ.

`parseInt()` chỉ đọc phần số ở đầu chuỗi.

Ví dụ khác:

```javascript
console.log(Number("12.5"));     // 12.5
console.log(parseInt("12.5"));   // 12
console.log(parseFloat("12.5")); // 12.5
```

### Toán tử đơn `+`

Có thể dùng dấu `+` phía trước để chuyển sang number:

```javascript
let value = "25";

console.log(+value);        // 25
console.log(typeof +value); // "number"
```

Ví dụ:

```javascript
console.log(+"10");    // 10
console.log(+true);    // 1
console.log(+false);   // 0
console.log(+null);    // 0
console.log(+undefined); // NaN
```

Cách này ngắn nhưng có thể khó đọc với người mới. Trong code cần rõ ràng, `Number()` thường dễ hiểu hơn.

### Chuyển đổi ngầm định trong phép toán

Các toán tử `-`, `*`, `/` thường chuyển toán hạng sang number.

```javascript
console.log("10" - 2); // 8
console.log("6" * 3);  // 18
console.log("20" / 4); // 5
```

Trong khi đó, toán tử `+` có thể nối chuỗi:

```javascript
console.log("10" + 2); // "102"
```

### Ví dụ nhập dữ liệu từ người dùng

Giá trị từ ô input thường là string.

HTML:

```html
<input id="age" type="number">
<button id="checkButton">Kiểm tra</button>
```

JavaScript:

```javascript
const ageInput = document.getElementById("age");
const checkButton = document.getElementById("checkButton");

checkButton.addEventListener("click", function () {
    const age = Number(ageInput.value);

    console.log(typeof age); // "number"

    if (age >= 18) {
        console.log("Đủ tuổi.");
    } else {
        console.log("Chưa đủ tuổi.");
    }
});
```

Nếu không chuyển kiểu:

```javascript
const age = ageInput.value;

console.log(typeof age); // "string"
```

 

## 4. Boolean Conversion

Boolean conversion là quá trình chuyển một giá trị sang `true` hoặc `false`.

Có thể dùng:

```javascript
Boolean(value)
```

Ví dụ:

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
```

### Các giá trị Falsy

Các giá trị sau được chuyển thành `false`:

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

Ví dụ:

```javascript
console.log(Boolean(false));     // false
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));       // false
```

### Các giá trị Truthy

Hầu hết những giá trị còn lại được chuyển thành `true`.

```javascript
console.log(Boolean(1));        // true
console.log(Boolean(-1));       // true
console.log(Boolean("hello"));  // true
console.log(Boolean("0"));      // true
console.log(Boolean("false"));  // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
```

Điểm dễ nhầm:

```javascript
console.log(Boolean("0"));     // true
console.log(Boolean("false")); // true
```

Vì đây là các chuỗi không rỗng nên chúng là truthy.

### Boolean trong câu điều kiện

JavaScript tự động chuyển điều kiện sang boolean.

```javascript
let username = "Minh";

if (username) {
    console.log("Tên người dùng đã được nhập.");
}
```

Vì `"Minh"` là chuỗi không rỗng nên được xem là `true`.

Nếu chuỗi rỗng:

```javascript
let username = "";

if (username) {
    console.log("Đã nhập tên.");
} else {
    console.log("Chưa nhập tên.");
}
```

Kết quả:

```text
Chưa nhập tên.
```

### Dùng toán tử `!`

Một dấu `!` đảo ngược giá trị boolean:

```javascript
console.log(!true);  // false
console.log(!false); // true
```

Với giá trị không phải boolean, JavaScript sẽ chuyển sang boolean rồi đảo ngược:

```javascript
console.log(!0);       // true
console.log(!1);       // false
console.log(!"hello"); // false
console.log(!"");      // true
```

### Dùng hai dấu `!!`

Hai dấu `!!` thường được dùng để chuyển một giá trị sang boolean.

```javascript
console.log(!!1);       // true
console.log(!!0);       // false
console.log(!!"hello"); // true
console.log(!!"");      // false
```

Cách này tương đương:

```javascript
console.log(Boolean("hello")); // true
console.log(!!"hello");        // true
```

`Boolean()` dễ đọc hơn, còn `!!` ngắn hơn và thường gặp trong code thực tế.

### Ví dụ kiểm tra dữ liệu

```javascript
let email = "user@example.com";

if (Boolean(email)) {
    console.log("Email đã được nhập.");
}
```

Có thể viết ngắn hơn:

```javascript
if (email) {
    console.log("Email đã được nhập.");
}
```

 

## 5. Summary

### Chuyển sang String

Dùng:

```javascript
String(value)
```

Ví dụ:

```javascript
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
```

### Chuyển sang Number

Dùng:

```javascript
Number(value)
```

Ví dụ:

```javascript
console.log(Number("123"));   // 123
console.log(Number(""));      // 0
console.log(Number(true));    // 1
console.log(Number(false));   // 0
console.log(Number(null));    // 0
console.log(Number("hello")); // NaN
```

Ngoài ra:

```javascript
parseInt("100px");   // 100
parseFloat("3.14kg"); // 3.14
```

### Chuyển sang Boolean

Dùng:

```javascript
Boolean(value)
```

Ví dụ:

```javascript
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean("hello")); // true
console.log(Boolean([]));      // true
```



# Bảng tổng hợp chuyển đổi kiểu

| Giá trị     | `String()`          | `Number()` | `Boolean()` |
| ----------- | ------------------- | ---------: | ----------- |
| `0`         | `"0"`               |        `0` | `false`     |
| `1`         | `"1"`               |        `1` | `true`      |
| `""`        | `""`                |        `0` | `false`     |
| `"123"`     | `"123"`             |      `123` | `true`      |
| `"hello"`   | `"hello"`           |      `NaN` | `true`      |
| `true`      | `"true"`            |        `1` | `true`      |
| `false`     | `"false"`           |        `0` | `false`     |
| `null`      | `"null"`            |        `0` | `false`     |
| `undefined` | `"undefined"`       |      `NaN` | `false`     |
| `NaN`       | `"NaN"`             |      `NaN` | `false`     |
| `[]`        | `""`                |        `0` | `true`      |
| `{}`        | `"[object Object]"` |      `NaN` | `true`      |

 

# Ví dụ tổng hợp

```javascript
let inputValue = "25";

let stringValue = String(inputValue);
let numberValue = Number(inputValue);
let booleanValue = Boolean(inputValue);

console.log(stringValue);
console.log(typeof stringValue);
// "25"
// "string"

console.log(numberValue);
console.log(typeof numberValue);
// 25
// "number"

console.log(booleanValue);
console.log(typeof booleanValue);
// true
// "boolean"
```

 

# Chuyển đổi ngầm định cần chú ý

## Toán tử cộng

```javascript
console.log("5" + 2); // "52"
```

Vì có chuỗi nên JavaScript thực hiện nối chuỗi.

## Các phép toán khác

```javascript
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("6" / 2); // 3
```

JavaScript chuyển chuỗi thành số.

## So sánh lỏng

```javascript
console.log(5 == "5"); // true
```

`==` tự động chuyển đổi kiểu.

## So sánh nghiêm ngặt

```javascript
console.log(5 === "5"); // false
```

`===` so sánh cả giá trị và kiểu dữ liệu.

Nên ưu tiên:

```javascript
if (value === 10) {
    console.log("Giá trị là số 10.");
}
```

 

# Một số lỗi thường gặp

## Chuỗi số khi dùng phép cộng

```javascript
let firstNumber = "10";
let secondNumber = "20";

console.log(firstNumber + secondNumber);
// "1020"
```

Cách đúng nếu muốn cộng số:

```javascript
console.log(
    Number(firstNumber) + Number(secondNumber)
);
// 30
```

## Chuỗi `"false"` vẫn là true

```javascript
console.log(Boolean("false")); // true
```

Vì `"false"` là chuỗi không rỗng.

Muốn chuyển đúng theo nội dung chuỗi:

```javascript
let input = "false";

let result = input === "true";

console.log(result); // false
```

## Chuỗi rỗng thành số 0

```javascript
console.log(Number("")); // 0
```

Khi xử lý form, nên kiểm tra chuỗi rỗng trước:

```javascript
let input = "";

if (input.trim() === "") {
    console.log("Người dùng chưa nhập dữ liệu.");
} else {
    let number = Number(input);
    console.log(number);
}
```

## NaN cần kiểm tra bằng `Number.isNaN()`

```javascript
let value = Number("abc");

console.log(Number.isNaN(value)); // true
```

Không dùng:

```javascript
console.log(value === NaN); // false
```

 

# Ghi nhớ nhanh

```javascript
String(value);  // Chuyển thành chuỗi
Number(value);  // Chuyển thành số
Boolean(value); // Chuyển thành true hoặc false
```

Quy tắc quan trọng:

* Chuỗi rỗng `""` → `false` và `0`.
* Chuỗi không rỗng → `true`.
* `null` → `0` khi chuyển sang number.
* `undefined` → `NaN` khi chuyển sang number.
* `true` → `1`.
* `false` → `0`.
* Nên dùng `===` thay cho `==` để tránh chuyển đổi kiểu ngoài ý muốn.
# Objects trong JavaScript

## 1. Introduction

Trong JavaScript, **object** là kiểu dữ liệu dùng để lưu trữ nhiều thông tin liên quan trong cùng một biến.

Dữ liệu trong object được lưu dưới dạng cặp:

```text
property: value
```

Trong đó:

* **property** là tên thuộc tính.
* **value** là giá trị của thuộc tính.

Ví dụ:

```javascript
const student = {
    name: "Minh",
    age: 21,
    major: "Information Technology"
};
```

Object `student` có ba thuộc tính:

* `name`
* `age`
* `major`

Mỗi thuộc tính có một giá trị tương ứng.

---

### Tại sao cần object?

Nếu không dùng object, ta có thể phải khai báo nhiều biến riêng lẻ:

```javascript
const studentName = "Minh";
const studentAge = 21;
const studentMajor = "Information Technology";
```

Khi dùng object:

```javascript
const student = {
    name: "Minh",
    age: 21,
    major: "Information Technology"
};
```

Các thông tin liên quan được nhóm lại trong cùng một cấu trúc.

Điều này giúp code:

* Dễ đọc hơn.
* Dễ quản lý hơn.
* Dễ truyền dữ liệu giữa các function.
* Phù hợp để mô tả người dùng, sản phẩm, sinh viên, đơn hàng và nhiều đối tượng khác.

---

### Object có thể chứa nhiều kiểu dữ liệu

```javascript
const user = {
    name: "An",
    age: 20,
    isStudent: true,
    address: null,
    skills: ["HTML", "CSS", "JavaScript"]
};
```

Giá trị trong object có thể là:

* Number
* String
* Boolean
* Null
* Undefined
* Array
* Object khác
* Function

Ví dụ object lồng nhau:

```javascript
const student = {
    name: "Minh",
    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    }
};

console.log(student.address.city);
// "Hà Nội"
```

---

## 2. Literals and Properties

## 2.1 Object Literal

Cách phổ biến nhất để tạo object là dùng **object literal**.

Cú pháp:

```javascript
const objectName = {
    property1: value1,
    property2: value2
};
```

Ví dụ:

```javascript
const product = {
    name: "Laptop",
    price: 20000000,
    inStock: true
};
```

Dấu ngoặc nhọn `{}` dùng để tạo object.

Các thuộc tính được ngăn cách bằng dấu phẩy.

---

### Object rỗng

Có thể tạo object chưa có thuộc tính:

```javascript
const user = {};
```

Sau đó thêm thuộc tính:

```javascript
user.name = "Minh";
user.age = 21;

console.log(user);
```

Kết quả:

```javascript
{
    name: "Minh",
    age: 21
}
```

---

## 2.2 Truy cập thuộc tính bằng dấu chấm

Cú pháp:

```javascript
object.property
```

Ví dụ:

```javascript
const student = {
    name: "Minh",
    age: 21
};

console.log(student.name); // "Minh"
console.log(student.age);  // 21
```

Cách này thường được dùng khi tên thuộc tính đã biết trước và hợp lệ như một tên biến.

---

## 2.3 Truy cập thuộc tính bằng dấu ngoặc vuông

Cú pháp:

```javascript
object["property"]
```

Ví dụ:

```javascript
const student = {
    name: "Minh",
    age: 21
};

console.log(student["name"]); // "Minh"
console.log(student["age"]);  // 21
```

---

### Khi nào cần dùng dấu ngoặc vuông?

Khi tên thuộc tính có khoảng trắng:

```javascript
const user = {
    "full name": "Nguyễn Minh"
};

console.log(user["full name"]);
```

Không thể viết:

```javascript
// user.full name
```

Vì cú pháp này không hợp lệ.

---

### Truy cập bằng biến

```javascript
const student = {
    name: "Minh",
    age: 21
};

const key = "name";

console.log(student[key]); // "Minh"
```

Nếu viết:

```javascript
console.log(student.key);
```

JavaScript sẽ tìm thuộc tính có tên thật sự là `"key"`.

---

## 2.4 Thêm thuộc tính

Có thể thêm thuộc tính mới bằng dấu chấm:

```javascript
const user = {
    name: "An"
};

user.age = 20;

console.log(user);
```

Hoặc bằng dấu ngoặc vuông:

```javascript
user["email"] = "an@example.com";
```

Kết quả:

```javascript
{
    name: "An",
    age: 20,
    email: "an@example.com"
}
```

---

## 2.5 Thay đổi giá trị thuộc tính

```javascript
const product = {
    name: "Phone",
    price: 10000000
};

product.price = 9000000;

console.log(product.price); // 9000000
```

Object được khai báo bằng `const` vẫn có thể thay đổi thuộc tính.

```javascript
const user = {
    name: "An"
};

user.name = "Bình";
```

Điều không được phép là gán lại toàn bộ object:

```javascript
const user = {
    name: "An"
};

// user = {
//     name: "Bình"
// };
// TypeError
```

---

## 2.6 Xóa thuộc tính

Dùng toán tử `delete`.

```javascript
const user = {
    name: "Minh",
    age: 21,
    email: "minh@example.com"
};

delete user.email;

console.log(user);
```

Kết quả:

```javascript
{
    name: "Minh",
    age: 21
}
```

---

## 2.7 Kiểm tra thuộc tính tồn tại

Có thể dùng toán tử `in`.

```javascript
const user = {
    name: "Minh",
    age: 21
};

console.log("name" in user);  // true
console.log("email" in user); // false
```

Cú pháp:

```javascript
"propertyName" in object
```

---

### Kiểm tra bằng `undefined`

```javascript
console.log(user.email === undefined);
```

Cách này có thể gây nhầm nếu thuộc tính tồn tại nhưng giá trị chính nó là `undefined`.

Ví dụ:

```javascript
const user = {
    email: undefined
};

console.log(user.email === undefined); // true
console.log("email" in user);           // true
```

Vì vậy, nếu cần kiểm tra thuộc tính có tồn tại thật hay không, `in` thường rõ ràng hơn.

---

## 2.8 Computed Properties

Tên thuộc tính có thể được tạo từ một biến.

```javascript
const propertyName = "email";

const user = {
    name: "Minh",
    [propertyName]: "minh@example.com"
};

console.log(user.email);
```

Cặp dấu ngoặc vuông trong object literal:

```javascript
[propertyName]
```

có nghĩa là JavaScript sử dụng giá trị của biến `propertyName` làm tên thuộc tính.

---

### Ví dụ

```javascript
const key = "score";

const student = {
    name: "An",
    [key]: 9
};

console.log(student.score); // 9
```

---

### Tên thuộc tính từ biểu thức

```javascript
const prefix = "user";

const account = {
    [prefix + "Name"]: "Minh",
    [prefix + "Age"]: 21
};

console.log(account.userName); // "Minh"
console.log(account.userAge);  // 21
```

---

## 2.9 Tên thuộc tính đặc biệt

Tên thuộc tính có thể là chuỗi hoặc số.

```javascript
const object = {
    1: "one",
    "hello world": "value"
};

console.log(object[1]);             // "one"
console.log(object["hello world"]); // "value"
```

JavaScript tự động chuyển key dạng số thành chuỗi.

```javascript
console.log(object["1"]); // "one"
```

---

## 2.10 Object chứa function

Function bên trong object thường được gọi là **method**.

```javascript
const user = {
    name: "Minh",

    sayHello: function () {
        console.log("Xin chào!");
    }
};

user.sayHello();
```

Có thể viết ngắn hơn:

```javascript
const user = {
    name: "Minh",

    sayHello() {
        console.log("Xin chào!");
    }
};
```

---

## 3. Property Value Shorthand

Property value shorthand là cú pháp viết ngắn khi tên biến và tên thuộc tính giống nhau.

Ví dụ thông thường:

```javascript
const name = "Minh";
const age = 21;

const user = {
    name: name,
    age: age
};
```

Có thể viết ngắn thành:

```javascript
const name = "Minh";
const age = 21;

const user = {
    name,
    age
};
```

Kết quả giống nhau:

```javascript
console.log(user);
```

```javascript
{
    name: "Minh",
    age: 21
}
```

---

### Ví dụ với nhiều biến

```javascript
const title = "JavaScript Basic";
const price = 500000;
const available = true;

const course = {
    title,
    price,
    available
};

console.log(course);
```

---

### Dùng trong function

```javascript
function createUser(name, age, email) {
    return {
        name,
        age,
        email
    };
}

const user = createUser(
    "Minh",
    21,
    "minh@example.com"
);

console.log(user);
```

Kết quả:

```javascript
{
    name: "Minh",
    age: 21,
    email: "minh@example.com"
}
```

Nếu không dùng shorthand:

```javascript
function createUser(name, age, email) {
    return {
        name: name,
        age: age,
        email: email
    };
}
```

Hai cách có cùng kết quả.

---

### Kết hợp shorthand với thuộc tính thông thường

```javascript
const name = "Minh";
const age = 21;

const user = {
    name,
    age,
    role: "student",
    isActive: true
};
```

Không bắt buộc mọi thuộc tính đều phải dùng shorthand.

---

### Method shorthand

Ngoài property shorthand, method cũng có thể viết ngắn.

Cách đầy đủ:

```javascript
const calculator = {
    add: function (a, b) {
        return a + b;
    }
};
```

Cách ngắn:

```javascript
const calculator = {
    add(a, b) {
        return a + b;
    }
};

console.log(calculator.add(2, 3)); // 5
```

---

## 4. Vòng lặp `for...in`

Vòng lặp `for...in` được dùng để duyệt qua các tên thuộc tính của object.

Cú pháp:

```javascript
for (const key in object) {
    // Xử lý
}
```

Ví dụ:

```javascript
const student = {
    name: "Minh",
    age: 21,
    major: "Information Technology"
};

for (const key in student) {
    console.log(key);
}
```

Kết quả:

```text
name
age
major
```

Biến `key` chứa tên thuộc tính ở mỗi vòng lặp.

---

### Lấy giá trị của thuộc tính

```javascript
const student = {
    name: "Minh",
    age: 21,
    major: "Information Technology"
};

for (const key in student) {
    console.log(student[key]);
}
```

Kết quả:

```text
Minh
21
Information Technology
```

Phải dùng:

```javascript
student[key]
```

Không dùng:

```javascript
student.key
```

Vì `student.key` tìm thuộc tính có tên thật sự là `"key"`.

---

### Lấy cả key và value

```javascript
const student = {
    name: "Minh",
    age: 21,
    major: "Information Technology"
};

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
```

Kết quả:

```text
name: Minh
age: 21
major: Information Technology
```

---

### Ví dụ thực tế

```javascript
const product = {
    name: "Laptop",
    price: 20000000,
    brand: "Dell",
    inStock: true
};

for (const property in product) {
    console.log(
        `Thuộc tính ${property} có giá trị ${product[property]}`
    );
}
```

---

### Tính tổng các giá trị trong object

```javascript
const scores = {
    math: 8,
    english: 9,
    programming: 10
};

let total = 0;

for (const subject in scores) {
    total += scores[subject];
}

console.log(total); // 27
```

---

### Đếm số thuộc tính

```javascript
const user = {
    name: "Minh",
    age: 21,
    city: "Hà Nội"
};

let count = 0;

for (const key in user) {
    count++;
}

console.log(count); // 3
```

Tuy nhiên, cách ngắn hơn là:

```javascript
console.log(Object.keys(user).length); // 3
```

---

### `for...in` với thuộc tính kế thừa

`for...in` có thể duyệt cả các thuộc tính kế thừa từ prototype.

```javascript
const parent = {
    role: "user"
};

const child = Object.create(parent);

child.name = "Minh";
child.age = 21;

for (const key in child) {
    console.log(key);
}
```

Có thể nhận được:

```text
name
age
role
```

Trong đó, `role` được kế thừa từ `parent`.

---

### Chỉ lấy thuộc tính riêng của object

Dùng `Object.hasOwn()`:

```javascript
for (const key in child) {
    if (Object.hasOwn(child, key)) {
        console.log(key);
    }
}
```

Kết quả:

```text
name
age
```

Có thể dùng cách cũ:

```javascript
if (child.hasOwnProperty(key)) {
    console.log(key);
}
```

Tuy nhiên, `Object.hasOwn()` thường an toàn và rõ ràng hơn.

---

### Không nên dùng `for...in` cho array

Ví dụ:

```javascript
const numbers = [10, 20, 30];

for (const index in numbers) {
    console.log(index);
}
```

Kết quả:

```text
0
1
2
```

`for...in` duyệt key, không trực tiếp duyệt value.

Muốn lấy giá trị array, nên dùng `for...of`:

```javascript
for (const number of numbers) {
    console.log(number);
}
```

Kết quả:

```text
10
20
30
```

Hoặc dùng `forEach()`:

```javascript
numbers.forEach(function (number) {
    console.log(number);
});
```

---

### So sánh `for...in` và `for...of`

| Vòng lặp   | Duyệt qua                 | Thường dùng cho           |
| ---------- | ------------------------- | ------------------------- |
| `for...in` | Tên thuộc tính hoặc index | Object                    |
| `for...of` | Giá trị                   | Array, string và iterable |

Ví dụ:

```javascript
const user = {
    name: "Minh",
    age: 21
};

for (const key in user) {
    console.log(key, user[key]);
}
```

```javascript
const skills = ["HTML", "CSS", "JavaScript"];

for (const skill of skills) {
    console.log(skill);
}
```

---

## 5. Summary

### Tạo object bằng object literal

```javascript
const user = {
    name: "Minh",
    age: 21
};
```

---

### Truy cập thuộc tính

Dấu chấm:

```javascript
console.log(user.name);
```

Dấu ngoặc vuông:

```javascript
console.log(user["name"]);
```

Dùng biến:

```javascript
const key = "name";

console.log(user[key]);
```

---

### Thêm và sửa thuộc tính

```javascript
user.email = "minh@example.com";
user.age = 22;
```

---

### Xóa thuộc tính

```javascript
delete user.email;
```

---

### Kiểm tra thuộc tính

```javascript
console.log("name" in user);
```

---

### Computed property

```javascript
const key = "score";

const student = {
    [key]: 9
};
```

---

### Property value shorthand

```javascript
const name = "Minh";
const age = 21;

const user = {
    name,
    age
};
```

---

### Method trong object

```javascript
const user = {
    name: "Minh",

    sayHello() {
        console.log("Hello");
    }
};

user.sayHello();
```

---

### Duyệt object bằng `for...in`

```javascript
for (const key in user) {
    console.log(key, user[key]);
}
```

---

# Ví dụ tổng hợp

```javascript
const name = "Nguyễn Minh";
const age = 21;
const major = "Information Technology";

const student = {
    name,
    age,
    major,

    address: {
        city: "Hà Nội",
        country: "Việt Nam"
    },

    introduce() {
        console.log(
            `Tôi là ${this.name}, ${this.age} tuổi, học ngành ${this.major}.`
        );
    }
};

student.email = "minh@example.com";
student.age = 22;

student.introduce();

for (const key in student) {
    if (Object.hasOwn(student, key)) {
        console.log(`${key}:`, student[key]);
    }
}
```

---

# Ví dụ thực tế: tạo thông tin sản phẩm

```javascript
function createProduct(name, price, quantity) {
    return {
        name,
        price,
        quantity,

        getTotalPrice() {
            return price * quantity;
        }
    };
}

const product = createProduct(
    "Laptop",
    20000000,
    2
);

console.log(product.name);
// "Laptop"

console.log(product.getTotalPrice());
// 40000000

for (const key in product) {
    console.log(key, product[key]);
}
```

---

# Một số lưu ý quan trọng

## Object được sao chép theo tham chiếu

```javascript
const user1 = {
    name: "An"
};

const user2 = user1;

user2.name = "Bình";

console.log(user1.name); // "Bình"
```

Cả hai biến cùng tham chiếu tới một object.

---

## Hai object có nội dung giống nhau vẫn không bằng nhau

```javascript
console.log({} === {}); // false
```

Mỗi object literal tạo ra một object mới.

```javascript
const first = {};
const second = first;

console.log(first === second); // true
```

---

## `const` không làm object bất biến hoàn toàn

```javascript
const user = {
    name: "Minh"
};

user.name = "An"; // Hợp lệ
user.age = 20;    // Hợp lệ
```

Nhưng không thể gán lại biến:

```javascript
// user = {};
// TypeError
```

---

## Dùng dấu ngoặc vuông khi property là biến

```javascript
const key = "name";

console.log(user[key]);
```

Không dùng:

```javascript
console.log(user.key);
```

trừ khi object thật sự có thuộc tính tên là `key`.

---

# Ghi nhớ nhanh

```javascript
const user = {
    name: "Minh",
    age: 21
};

user.name;       // Truy cập bằng dấu chấm
user["age"];     // Truy cập bằng ngoặc vuông
user.email = ""; // Thêm thuộc tính
delete user.age; // Xóa thuộc tính

for (const key in user) {
    console.log(key, user[key]);
}
```

Các điểm quan trọng:

* Object lưu dữ liệu dưới dạng `key: value`.
* Object literal sử dụng dấu ngoặc nhọn `{}`.
* Có thể truy cập thuộc tính bằng dấu chấm hoặc ngoặc vuông.
* Property shorthand giúp viết object ngắn hơn.
* `for...in` dùng để duyệt các property của object.
* Khi dùng biến làm tên property, phải dùng `object[key]`.
* Không nên dùng `for...in` để duyệt giá trị của array.
