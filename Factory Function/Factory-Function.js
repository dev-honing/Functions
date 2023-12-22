// Factory-Function.js

/* 
팩토리 함수란?

객체를 생성하고 반환하는 함수. 
객체를 일관되게 생성하므로 코드의 재사용성이 높아지고, 가독성도 개선된다고 한다.
*/

/**
 * 
 * 팩토리 함수 예제
 * @param {*} name 이름
 * @param {*} age 나이
 * @returns 
 */
function createPerson(name, age) {
  return {
    name: name,
    age: age,

    /**
     * 인사말을 출력하기 위한 함수
     */
    sayHello: function() {
      console.log(`ㅎㅇ 내 이름은 ${this.name}이고, 나이는 ${this.age}살임.`)
    }
  }
}