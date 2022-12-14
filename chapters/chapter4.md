__Deep Dive 4장__

# 변수

## 변수는 무엇인가요?
변수는 하나의 값을 저장하기 위해 확보한 __메모리 공간 자체__ 또는 그 메모리 공간을 __식별__ 하기 위해 붙인 이름을 말한다.

### 메모리는 무엇인가요?
메모리는 데이터를 저장할 수 있는 메모리 셀의 집합체이다. 셀 하나의 크기는 1byte (= 8bit)이며, 컴퓨터는 1바이트 단위로 데이터를 저장(write)하거나 읽는다(read).

### 메모리 셀의 역할은 무엇인가요?
메모리 셀은 데이터를 저장할 수 있는 하나의 단위이며, 각 셀은 고유의 메모리 주소 (memory address)를 가지고 있다. 자바스크립트에서 값들은 메모리에 기억(저장)되고 CPU가 이들을 읽어 연산한다.

## 변수 즉 메모리 공간 자체가 왜 필요한가요?
메모리에 값을 저장하여, CPU로 연산을 한 값을 다시 메모리에 저장했다면 그 값을 어떻게 재사용할 것인가에 대해 생각해야 한다. 메모리 주소값으로 직접 접근하여 값을 읽으면 될 것 같지만, 시스템이 치명적인 오류를 줄 수있다. 따라서 자바스크립트는 개발자의 직접적인 메모리 제어를 허용하지 않는다.  
만약 허용한다 하더라도, 메모리의 상황에 따라 주소가 변경된다.

## 조금 더 풀어서 변수를 설명한다면요?
변수는 값을 저장하고 참조하는 메커니즘으로 값의 위치를 가리키는 상징적인 이름을 뜻한다. 이 변수는 컴파일러 또는 인터프리터에 의해 값이 저장된 메모리 공간의 주소로 치환되어 실행된다.


## 변수 이름들은 그냥 변수 이름인가요?
변수 이름을 식별자(identifier)라고 한다. 어떤 값을 구별해서 식별할 수 있는 고유한 이름을 뜻한다. 식별자는 메모리 주소값을 기억해야한다. 즉 식별자는 ????__메모리주소와 매핑관계를 맺으며, 이 매핑 정보도 메모리에 저장되어야한다__. 식별자는 값이 아닌 메모리 주소를 기억한다.

### 식별자는 아무렇게 지어도 되나요?
아니다. 식별자는 변수, 함수, 클래스 등의 이름 모두 식별자이다. 메모리 상에 존재하는 변수 값을 식별할 수 있고 함수 이름으로는 함수를 식별할수 있어야 한다. 그래서 식별자는 네이밍 규칙을 준수해야 한다. 선언(declartion)에 의해 자바스크립트 엔진에 식별자의 존재를 알린다.

## 그러면 선언을 어떻게 하나요?
변수를 선언 한다는 것은 변수를 생성한다는 것을 말한다. 메모리 공간을 확보하고(allocate) 이름과 메모리 주소를 연결 (name binding)해서 값을 저장하는 준비를 한다. 선언으로 확보된 메모리 공간이 해제되기 전까지 공간을 사용할 수 없도록 보호하므로 안전하게 사용가능하다.

## 선언이 꼭 필요하나요?
필요하다. 변수를 선언할 때는 var let const 키워드를 사용한다. ES6에서 let const 키워드가 도입되었고 그 전까지는 유일하게 var가 있었다. let const의 도입은 var의 단점으로 발생되었고, 그 이유는 이후에 언급한다.

### 키워드가 뭐에요?
키워드 자바스크립트 엔진의 동작을 규정한 일종의 명령어다.

## 변수를 선언하면 어떻게 되나요?
변수 선언으로 메모리 공간이 확보되고 비어있다고 생각할 수 있는 공간에 자바스크립트엔진은 undefined라는 값을 암묵적으로 할당하여 초기화한다. 자바스크립트의 독특한 특징이다. (var로 선언시)  
자바스크립트는 2단계로 변수선언이 이루어진다.
- 선언 단계: 변수이름을 등록 엔진에게 존재를 알린다. var score
- 초기화 단계: 값을 저장하기위한 메모리 공간을 확보 암묵적으로 undefined를 할당해 초기화한다. var score = undefined

### 변수 이름(식별자)은 어디에 등록되나요?
모든 식별자는 실행컨텍스트에 등록된다. 실행 컨텍스트의 식별자와 스코프를 통해 자바스크립트 엔진이 소스코드를 관리한다. 키/값 형태의 객체로 등록되어있다. 

### 초기화를 하지 않으면요?
초기화 단계를 거치지 않으면 메모리 공간에 이전에 사용했던 값이 남아 있을 수 있다. 이러한 값을 쓰레기 값이라 한다. 따라서 메모리 공간을 확보한 다음, 값을 할당하지 않은 상태에서 곧바로 변수 값을 참조하면 쓰레기 값이 나올 수 있다. var 키워드는 암묵저으로 초기화를 수행하므로 이러한 위험으로부터 안전하다.
---
내가 이해한 내용은 이러하다. 어느 메모리 공간에 쓰레기1이 저장되어 있었다면, 내가 초기화하지않고 선언만으로 변수를 등록하여 그 주소를 가리키면 그 변수는 쓰레기1 라는 값을 가지게 되는 것이다. 이웅모 강사님께 질문해보자.