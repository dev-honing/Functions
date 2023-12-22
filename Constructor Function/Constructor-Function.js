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
   * Person 객체의 인사말 메서드
   */
  this.sayHello = function () {
    console.log(`ㅎㅇ. 내 이름은 ${this.name}이고, 나이는 ${this.age}살임.`)
  }
}