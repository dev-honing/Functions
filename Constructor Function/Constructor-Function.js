// Constructor-Function.js
/*
생성자 함수란?

객체를 생성하기 위한 함수로, new 키워드와 함께 호출된다.
예제를 통해 이름과 나이를 받아 간단한 객체를 생성한다.
생성된 객체에는 인사말을 출력하는 메서드가 있다.
*/

/**
 * 
 * 사람 객체를 생성하는 생성자 함수
 * @param {*} name - 이름
 * @param {*} age - 나이
 */
function Person(name, age) {
  // new 키워드와 함께 호출되면 this는 새로운 객체를 가리킨다.
  this.name = name;
  this.age = age;
  /**
   * 사람 객체의 인사말 메서드
   */
  this.sayHello = function () {
    console.log(`ㅎㅇ. 내 이름은 ${this.name}이고, 나이는 ${this.age}살임.`)
  }
}

// 생성자 함수를 사용해 객체 생성(new 키워드 사용)
const person1 = new Person('John', 25);
const person2 = new Person('Jane', 30);

// 객체의 메서드 호출
person1.sayHello(); // ㅎㅇ. 내 이름은 John이고, 나이는 25살임.
person2.sayHello(); // ㅎㅇ. 내 이름은 Jane이고, 나이는 30살임.