# 🤟🏻 수어지교(手語之交)

수어지교(手語之交)는 PC 혹은 모바일 디바이스의 카메라를 이용하여 화면에 보이는  손 모양을 인식하여 정확한 수어를 연습하고, 더 나아가 소통을 할 수 있는 애플리케이션입니다.


<img src="https://user-images.githubusercontent.com/94096095/180269508-7897efd0-659d-440e-875a-e34d25be4912.png"  width="700"/>  


### 

<br />
<br />

## :link: 배포



- [Netlify을 이용한 애플리케이션 배포](https://connectwithhand.online/) (링크)




<br />
<br />

## 🛹 개발 동기


평소 알게 모르게 실생활에서 머신 러닝을 많이 사용하고 있어 이번 개인 프로젝트에 직접 사용해 보고 싶어 찾아보던 와중에 손가락의 특정 포인트를 인식 및 추적하는 Handpose-detection 모델이 있다는 것을 알게 되었습니다.

학창 시절에 수화 동아리에 있으면서 배웠던 한글 지문자를 기억하고 있어서, 해당 모델을 이용하여 화면에 보이는 손의 모양이 지문자와 어느 정도 일치하는지를 확인하여 정확한 지문자의 손 모양을 학습하는 서비스를 만들고 싶었습니다. 더 나아가 다른 사람의 제스처를 실시간으로 인식 후 텍스트로 번역이 가능하다면 실시간으로 소통이 가능하지 않을까하는 작은 뜻을 품고 프로젝트를 시작하였습니다.

<br />
<br />

## 🗓️개발 기간



- Week 1 (2022.06.27 ~ 2022.07.03)
    - 아이디어 수집 및 기획
    - 기술 스택 검증 및 정리
    - 디자인 Mockup 작업
- Week 2-3 (2022.07.04 ~ 2022.07.17)
    - tensorflow.js 및 handpose 모델 적용
    - fingerpose 라이브러리 수정 및 개선
    - 마무리 (버그 수정, 테스트 코드 작성 등)

<br />
<br />

## ****🔨 기술 스택****



- FrontEnd
    - React
    - tensorflow.js - handpose-detection, kNN classifier
    - Styled-Component
    - jotai
    - Responsive Web
    - Atomic Design
    - PWA
    

- ThirdParty
    - PropTypes
    - Jest / React Native Testing Library
    - EsLint
    - Prettier
    - Git
    
<br />
<br />


## 🔌 세팅 방법



- FrondEnd

```jsx
$ git clone https://github.com/ConnectWithHands/ConnectWithHands-client.git
$ npm install
$ npm start
```

<br />
<br />

## 🖥️ 주요 기능



- **한글 자음/모음 순차 연습하기**
    - 한글 자음 (총 19개 - 단자음 14개, + 쌍자음 5개)
    - 한글 모음 (총 17개 - 단모음 10개 + 이중모음 7개
    - 웹캠에 손 모양을 만들면 현재의 자음 및 모음과 일치하는지 결과 및 정확도 확인
    - 이전 및 다음 버튼을 이용하여 자음, 모음을 연습할 수 있음
    
    [![연습하기](http://img.youtube.com/vi/RPlxgKbDt6Y/0.jpg)](https://youtu.be/RPlxgKbDt6Y)




        
- **한글 자음/모음 테스트하기**
    - 자음 및 모음에서 랜덤으로 5개를 선정하여 테스트 진행
    - 손의 모양이 테스트 글자와 70% 이상 일치하면 다음 글자로 이동
    - 이미지 박스를 클릭하면 숨겨진 힌트를 얻을 수 있음
    - 5개의 테스트가 종료되면 최종 결과를 확인
    
    [![테스트하기](http://img.youtube.com/vi/XI3Rxdpw0mw/0.jpg)](https://youtu.be/XI3Rxdpw0mw)

        
        
- **한글 자음/모음 자율 연습하기**
    - 자음 및 모음을 선택하여 자율적으로 연습
    - 현재 웹캠의 손 모양과 일치하는 글자를 반환
        
     [![자율연습](http://img.youtube.com/vi/RKbah_ERwFY/0.jpg)](https://youtu.be/RKbah_ERwFY)

        
- **수어 실시간 인식하기**
    - 화면의 손 모양을 인식하여 가장 가까운 텍스트를 출력
    - 특정 제스처를 취하면 텍스트를 삭제하거나 음성으로 변환하여 출력
        
     [![실시간 인식](http://img.youtube.com/vi/TovL6BBVF0c/0.jpg)](https://youtu.be/TovL6BBVF0c)

    
- **나만의 제스처 만들기**
    - kNN Classifier을 이용하여 이미지 학습 진행
    - 원하는 단어를 추가한 후 여러 번 학습 버튼을 클릭 (반복)
    - 현재 웹캠의 화면 기준으로 학습한 단어와 정확도를 확인
    - 정확도를 높이도록 여러 번 학습 진행
    - 학습한 데이터를 json으로 파일 저장 및 업로드를 통해 기존 학습한 데이터를 불러오기
    
    [![실시간 인식](http://img.youtube.com/vi/M7GLIeioiEs/0.jpg)](https://youtu.be/M7GLIeioiEs)

        

<br />
<br />


## 🚀 기술 관련 고민



### 1. Fingerpose 라이브러리 개선하기



딥러닝 모델인 Handpose가 반환하는 좌표를 이용하여 제스처를 등록해야 했으며, 이를 이용하여 손가락의 curl과 direction을 계산하여 제스처 등록을 도와주는 fingerpose라는 라이브러리가 있어 이번 프로젝트에 사용하고자 하였습니다.

하지만, 프로젝트에 적용하려고 보니 handpose 이전 버전을 기준으로 작동이 가능하였고, 이를 해결하기 위해 라이브러리를 처음부터 끝까지 뜯어보면서 handpose 모델의 신규 버전이 적용될 수 있도록 코드를 수정하였습니다.

:one: [Fingerpose 라이브러리 수정 (1) - 신규 버전 Handpose 인식](https://www.notion.so/Fingerpose-1-Handpose-5bb0e574f3f1451db7d43ec1a8172143)

:two: [Fingerpose 라이브러리 수정 (2) - 양 손 감지 추가](https://www.notion.so/Fingerpose-2-dd1627d360724a90977441ed15f1f60e)

fingerpose를 신규 버전에 맞추어 업데이트 한 후 실제 제스처를 등록하여 확인해 보니 한글 모음의 경우 제스처 간의 정확도가 낮은 현상이 발생하였습니다. 또한, 기존 점수 계산 방식으로는 한 손 제스처와 양 손 제스처를 구분하기 어려워 제스처 간의 정확도를 올리기 위해 아래와 같은 작업을 추가로 진행하였습니다. 

:three: [Fingerpose 라이브러리 수정 (3) - 손등, 손바닥 구분 로직 추가](https://www.notion.so/Fingerpose-3-75832ece8fcc42b59e78dfe372cbecdc)

:four: [Fingerpose 라이브러리 수정 (4) - 기존 메서드를 활용한 YZ축 계산 로직 추가](https://www.notion.so/Fingerpose-4-YZ-7252736087444a58bc79b927d69278a9)

:five: [Fingerpose 라이브러리 수정 (5) -bestGesture 로직 적용 과정](https://www.notion.so/Fingerpose-5-bestGesture-d47fd57f990b4aaeb3dd53347397a625)

<br />

### 2. 한글 쌍자음 인식에 대한 로직 적용하기



한글 자음 중에서 “ㄲ”, “ㄸ”, “ㅃ”, “ㅆ”, “ㅉ”인 쌍자음이 있습니다. 쌍자음의 지문자는 관련된 단자음과 제스처 모양이 동일하나 손을 오른쪽으로 이동하여야 하는 형태입니다. 즉, 정적인 형태가 아닌 동적인 움직임을 감지하여야 했습니다. 이를 위해 상대 좌표가 아닌 절대 좌표를 이동하여 특정 시간 내 x 좌표를 수집하고 최고 값과 최저 값의 차이가 기준치 이상일 때 쌍자음으로 인식하도록 작업하였습니다.

:open_hands: [한글 쌍자음 인식 로직 적용하기](https://www.notion.so/55689cd89613451ca72c99d649e89c4e)

<br />

### 3. 제스처 실시간 감지 로직에 throttle 추가하기



웹캠에 비친 손의 모양을 판단하여 텍스트를 출력하는 프로세스를 적용하려고 하니, 실시간으로 손을 탐지하기 위해 setInterval을 짧은 시간마다 반복하도록 적용하여 같은 텍스트가 여러 번 출력 되는 현상이 발생하였습니다. 이는 서비스 관점에서 사용자에게 불필요한 정보를 제공하므로 **특정 시간 동안 동일한 제스처가 반복된다면 한 번만 텍스트가 출력될 수 있도록 throttle을 적용**하였습니다.

일반적으로 대화할 때 동일한 단어를 연달아 말하지 않을 것을 전제로, 배열의 마지막 글자와 제스처 모양의 동일 여부를 비교하며, 단어가 동일하지 않다면 throttle이 실행됩니다. throttle 전에는 3초 동안 총 여섯 번의 텍스트가 출력되었다면, throttle 적용으로 3초 동안 한 번의 텍스트가 출력되어 불필요한 데이터의 제공을 제한하였습니다.


**[Throttle 적용 전]**

<img src="https://user-images.githubusercontent.com/94096095/180267761-7a87d34b-3f91-407d-9dac-4ab0318a0926.gif" width="500">

**[Throttle 적용 후]**

<img src="https://user-images.githubusercontent.com/94096095/180267771-01653cc3-7a15-4695-8939-3deb42d4a1f2.gif" width="500">

<br />

### 4. 반응형 디자인 및 PWA(Progressive Web Applications) 적용하기



프로젝트를 PC와 모바일에서 모두 사용할 수 있도록 반응형 웹으로 만들던 도중 PWA에 대해서 알게 되었습니다. 모바일에서 마치 네이티브 앱처럼 앱 아이콘과 전체 화면으로 실행할 수 있으며, 웹 브라우저를 통한 웹 기술 적용과 이미지 등의 미디어 파일을 캐싱할 수 있는 장점이 있어 적용해 보고자 하였습니다. 이를 위해 service-worker 적용, manifest.json 수정하여 현재 PC와 모바일 화면에서 앱 아이콘을 추가하고 실행할 수 있도록 했습니다.

- PWA 적용 화면
    
<img src="https://user-images.githubusercontent.com/94096095/180415610-14aad541-882a-42ad-91f4-555f14a01113.png" width="500">

반응형을 처음 접하고 적용하다 보니 디바이스에 맞추어 이미지 사이즈 등을 유동적으로 변경해야 하는 점에서 공수가 많이 발생하는 것을 깨달았고,  PC와 모바일(아이폰)로만 테스트를 진행하여 태블릿, 안드로이드 등을 반영하여 작업하지 못한 점이 아쉬웠습니다. 또한, PWA 장점 중 하나인 푸시 알림 등의 기능을 적용할 기회가 없어 PWA 장점을 모두 경험할 수 없던 점도 아쉬웠습니다. 

<br />

### 5. atomic design 적용기


리액트를 사용하면서 페이지를 기준으로 컴포넌트를 생성하고 구성하는 것이 당연하다고 생각하였습니다. 하지만, atomic design 관련 글을 읽으면서 정말 단편적인 사고에 사로잡혀 있었다고 생각이 들었고 이번 프로젝트에 atomic design을 적용하고자 하였습니다.

:pencil2: [atomic Design 적용기](https://www.notion.so/Atomic-Design-4c2c878604db41de9f4a55f5e70f06ee)


<br />
<br />

## 🙇🏻‍♀️ 프로젝트 소감


### 프로젝트에서 아쉬운 점

- **새로운 툴 사용**
    
    이번 프로젝트에서 기존에 사용해보지 않은 툴과 개념을 적용하고 싶어 전역 상태 관리로 jotai와 디자인 방법론으로 Atomic Design을 선택하였습니다. jotai의 경우 러닝 커브가 낮은 만큼 기술 검증 과정에서 짧은 시간에 CRUD를 모두 적용해 볼 수 있었으나, 프로젝트 구조상 적은 데이터만 전역 상태 관리를 진행했기에 다소 얕게 사용한 것 같아 아쉽습니다. 또한, Atomic Design은 초기 구성이 중요한 만큼 시간을 많이 투자해야 했는데 프로젝트 기간 내 여러 기능들을 같이 적용하다 보니 이해도가 낮은 상태로 단편적인 부분만 적용한 것 같습니다. 추후 다른 프로젝트에서는 조금 더 Atomic Design을 깊게 이해하고 적용하고 싶습니다.
    
- **PC와 모바일 디바이스 기능 적용 과정**
    
    PC 및 모바일 디바이스에서 애플리케이션을 사용할 수 있도록 작업을 시작하였지만, 기능 중 kNN Classifier의 경우 모바일에서 비디오 사이즈를 조정하는 데 어려움이 있었으며, 학습 및 예측 속도 및 페이지가 너무 느려 서비스를 지속할 수 없다고 판단하여 모바일 디바이스에서는 사용이 불가하도록 설정하였습니다. 여러 키워드로 조사를 해보았지만 정확한 원인 파악은 못 했지만 아무래도 핸드폰 자체의 CPU, GPU 등의 스펙 문제로 판단됩니다. 동일한 기능이라도 모든 디바이스에서 유연하게 적용하기가 어렵다는 점을 알게 되었습니다.
    

### 혼자라는 압박감과 두려움, 하지만 하면 된다!

일주일마다 진행되는 과제와 팀 프로젝트에선 동료들이 모두 같은 목적을 가졌기에, 모르는 부분은 서로 고민 상담하고 어려운 부분은 같이 헤쳐 나가면서 서로 많은 힘이 되었습니다. 하지만, 이번 프로젝트는 오롯이 나 혼자 기획부터 개발까지 담당해야 했으므로 처음에는 제대로 할 수 있을지 부담감과 두려움이 너무 컸습니다. 하지만, 처음에 차근차근 계획을 세우고 매일 계획에 맞추어 작업을 진행하다 보니 프로젝트 진척도가 눈에 서서히 보이면서 “나도 할 수 있구나”라는 자신감이 생겼습니다. 처음 홀로서기를 진행한 만큼 많이 떨렸지만 새로운 도전을 해 볼 수 있는 용기와 경험을 얻었습니다.

### 새로운 개념을 두려워 하지 말자

처음 코딩을 배울 때는 단순히 다른 사람의 만든 라이브러리를 나의 코드에 적용하기만 했는데, 이번 프로젝트에서는 라이브러리를 처음부터 끝까지 뜯어보고 이해해야 했습니다. 특히, 좌표를 이용하여 방향을 계산하기 위해 삼각함수에 대한 수학적인 개념이 필요하였고, 개발 과정에서 2~3일 정도는 삼각함수를 이해하기 위해 많은 시간을 쏟아야 했습니다. 지금도 100% 이해하지 못했지만 어떤 용도로 수학적인 개념을 적용했는지 알 수 있었습니다. 원하는 결과를 얻기 위해 코드 자체에서 벗어나 여러 개념을 이해하고 학습해야 한다는 사실을 알게 되었고, 짧은 의미로 코드만 잘 작성하는 프로그래머가 아닌 넓은 시야를 가지고 여러 지식을 갖춘 프로그래머가 되어야겠다는 다짐을 하게 되었습니다.
