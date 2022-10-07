객체 : 실제로 존재하는 사물을 의미
이름(key)와 값(value)로 구성된 속성(property)를 가진 JS 기본 데이터 타입.

JS에선 여러 자료 다룰 때 객체(object) 사용
배열 또한 여러 자료를 다룰 수 있음. => 배열도 객체이기 때문

const arry = [100, 20 '문자열', true, function() {}, ()=>{}]
console.log(arry[0]) // 100
console.log(arry[1]) // 20

const object = { <- 중괄호 사용
  키 : 값,        
  키 : 값,
  name : '구름', <- 키에는 식별자를 사용(1. 숫자x 2.기호는 $, _만 가능)
  age : 7        <- 원하는 자료형 사용 가능
}
object['name'] <-객체도 대괄호 열고 안에 키를 넣어 접근 가능하다.
object.name
object.age    <-일반적으로 점 찍어서 키를 넣어 사용.

배열 안의 자료를 바꿀 땐

const arry = [100, 20 '문자열', true, function() {}, ()=>{}]
array[0] = 200
console.log(array[0]) // [200, 20 '문자열', true, function() {}, ()=>{}]

객체 안의 자료 바꿀땐

const dog = { 
  키 : 값,        
  키 : 값,
  name : '구름',  //dog 객체의 name 속성
  age : 7         //dog 객체의 age 속성
}
object.name = '별'  
object.age = 1
console.log(object.name)  // 별
console.log(object.age)   // 1

페이지 247. 식별자로 사용할 수 없는 단어를 키로 사용할 경우


속성과 메소드

요소 = 배열 내부에 있는 값을 의미
속성 = 객체 내부에 있는 값을 의미
메소드 = 객체 내부의 함수
JS에선 메소드는 속성의 일종, 함수 자료형인 속성.


this 키워드 사용

출력하기

const dog = {
  name : '구름',
  age : 7,
  bark: function () {
    console.log(`${dog.name}이가 짓습니다`)
    console.log(`${this.name}이가 짓습니다`)
  sleep: () => {
    console.log(`${dog.name}이 잡니다!`)
  }
}

dog.bark()
dog.sleep()
2가지 출력시 bark 익명함수에선 this가 자기 자신의 객체를 나타내고
화살표 함수 내부에서 this를 출력하면 window(외부)를 출력한다.

익명함수 : this 바인딩 한다.
화살표 함수 : this 바인딩을 안한다.
# this 바인딩 : this를 현재 객체와 연결하는 행위를 뜻함.

객체를 만들고 내부에서 this를 활용할땐 화살표 함수를 안쓰고 익명함수만 사용한다.
다른 프로그램에선 this.를 생략하고 키로 입력해도 객체가 불려오지만,
JS에선 this.을 붙여서 사용하지 않고 키만 입력하게 되면 객체 내부의 속성이라 생각하지 않는다.
반드시 this 사용

출력하기

const dog = {
  name : '구름',
  age : 7,
  bark: function () {
    // console.log(`${dog.name}이가 짓습니다`)
    // console.log(`${this.name}이가 짓습니다`)
    console.log(this)
  },
  sleep: () => {
    // console.log(`${dog.name}이 잡니다!`)
    console.log(this)
  }
}

객체에 동적으로 속성 추가하기

// 객체의 키와 값을 정적으로 생성한다 = 처음 만들때 같이 만드는 것
const pet ={
  name = '구름',
  age: 8
}

// 객체의 키와 값을 동적으로 생성한다. = 나중에 어떠한 속성을 부여하는 것
pet.color = 'brown'
//출력
console.log(pet) //=> {name: "구름", age: 8, color: "brown"}

객체에 동적으로 속성 제거하기

const pet ={
  name = '구름',
  age: 8
}
//객체의 키와 동적으로 제거한다!
delete pet.color  // delete는 연산자, 뒤에 오는 녀석을 제거하는 역할
                  // {name: "구름", age: 8}

여기서 이상한 점이 있을껍니다.
pet이란 녀석을 const 상수로 만들었는데 어떻게 내용이 변경 가능한가?라고 생각하신분?

이유는 const는 pet에 다른걸 추가하는걸 막는것이지
이미 정적으로 만들어진 const를 가지고 지지고 볶는건 상관없다.