# Memory

- CS step 2에서는 CPU와 메모리에 대해 학습하고 Memory 객체를 구현하는 것이 목표이다. 컴퓨터 구조조차 모르는 현재에는 Memory 객체를 구현하는 것은 무리가 있을 것 같아 먼저 Memory와 cpu의 역할, 종류, 그리고 구조에 대해 공부한 것을 정리하고자 한다.

## 간단한 PC 동작 원리

Memory를 학습하기 전 메모리에 대한 이해를 돕기 위해 공부한 부분이다. <br>아래는 간단한 PC 동작 원리이다.

1. PC 사용자가 키보드, 마우스 등을 사용해 명령을 내린다.
2. CPU가 명령을 처리하기 위해 계산(연산)을 한다.
3. 이때 처리된 정보들이 일시적으로 컴퓨터 메모리에 저장된다.
4. 이를 바탕으로 모니터나 프린터 등의 출력 장치에 결과를 보여준다.

## Memory란?

Memory의 구조를 공부하기 전에 어떤 것이고 어떤 일을 하는지 먼저 공부하여 정리했다.

### Memory의 역할

- CPU가 처리한 정보를 기억하는 곳이자 처리해야 할 데이터를 보관하는 곳
    - 예를 들어 100이라는 일이 주어지면, CPU가 50을 한번에 처리하고 나머지는 메모리에 보관하여 순차적으로 처리.
    - 메모리 용량이 적으면 병목현상 발생하여 컴퓨터가 버벅대는 느낌을 받음
- 컴퓨터를 구입할 때 성능의 가장 중요한 부품은 CPU이지만, 개발자는 메모리가 가장 중요한 요소이다. (메모리 관리가 중요!)

### Memory의 범위와 종류

컴퓨터 구성 요소 중 임시적 또는 영구적으로 저장기능을 갖고 있는 것.

- 메인 메모리: D-RAM 계열 메모리로, 메인메모리는 바뀔 수 있지만 일반적으로 메인 메모리로 사용하는 것이 RAM이다.
- 레지스터(Register): CPU 내장 요소로 연산을 위한 저장소 역할
- 캐쉬 (Cache): D-RAM보다 빠른 S-RAM으로 구성. RAM과 구별하기 위해 Cache라고 표현. CPU와 RAM 사이에서 중간 저장소 역할.
- 하드디스크와 이외 저장 장치들: 하드디스크, SD 카드, CD-ROM등의 장치

### 메모리 계층 구조
- 메모리 간의 차이점은 CPU 기준으로 얼마나 떨어져 있나.
- 하드디스크 -> 메인메모리 -> L2캐쉬 -> L1캐쉬 -> 레지스터 또는 그 반대
- 메모리의 궁극적 역할은 아래 계층 메모리에 대해 자주쓰는 메모리의 일부를 자신이 저장했다가 필요시 바로 쓸 수 있게 준비하여 속도를 향상시키는 것
- 캐쉬가 실제로 CPU 휴식시간을 줄여 CPU와 RAM의 성능차이를 줄여주고 있으며 cache의 용량적 한계로 L1, L2와 같이 캐쉬를 2개 둠.

## 메모리 저장 구조

![Memory Architecture](https://user-images.githubusercontent.com/37759759/55863287-32bd8480-5bb5-11e9-987b-a30cc8d4f0bf.png)
(출처블로그: [Giftbot님 블로그](https://m.blog.naver.com/PostView.nhn?blogId=itperson&logNo=220821884483&proxyReferer=https%3A%2F%2Fwww.google.com%2F))


위의 그림에 자세하게 나와 있지만, 메모리 영역은 크게 5 부분으로 나뉜다고 한다.

1. Code / Text
   - 실행 파일을 구성하는 명령어들이 올라가는 메모리 영역 
     - 기계어로 제어
     - 순수 코드만 있는 영역
     - hex, bin 파일과 같은 것이 바로 이 부분
  
2. Data
   - 전역변수,  static변수, array, structure등을 저장하는 곳
   - 초기화 된 데이터를 저장 (이론상 BSS와 반대)
   - 프로그램 실행 시 생성, 프로그램 종료시 시스템 반환
   - 함수 내부에 선언된 static 변수는 프로그램이 실행할 때 공간 할당 된 후 실행시 초기화 됨.

3. BSS
   - Data영역과 비슷하나 초기화 되지 않은 전역/static 변수만 저장

4. Heap
   - 프로그래머가 자율적으로 동적 할당 하는 영역 / 
   - C언어 사용시 malloc, calloc등의 함수 활용하여 할당하고 free함수로 반납하는 행위를 함
   - 기본적으로 빈 메모리 공간을 필요시 프로그램에 할당했다가 회수되는 작용이 되풀이 되는 영역이다. 정확한
   - 컴파일 이후인 런타임에 메모리 크기를 결정하고 메모리 동적 할당을 통해 힙 영역 메모리에 할당한다.

5. Stack
   - 함수 호출시 생성되는 지역 변수와 매개변수가 저장되는 영역
   - 함수 호출이 완료되면 사라짐
   - 사이즈는 각 프로세스마다 할당 되어 있음 (런타임시 변경 불가능)
   - Stack과 Heap은 같은 공간을 사용하지만, 시작 부분이 다르다. (Stack: 높은 주소 -> 낮은 주소 / Heap: 낮은 주소 -> 높은 주소)
   - 서로 겹치게 되면 stack overflow / heap overflow 라고 함.
