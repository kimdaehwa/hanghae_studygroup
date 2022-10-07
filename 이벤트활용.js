이벤트 모델 = 이벤트를 연결하는 방법을 의미

표준 이벤트 모델 = addEventListener() 메소드를 사용했는데 이 방법이 현재 표준으로 사용하고 있는 방법.
// document.body.addEventListener('keyup', ()=> { })

고전 이벤트 모델 = onOO으로 시작하는 속성에 함수 할당 -> 이벤트 연결
// document.body.onkeyup = (event) => {}

인라인 이벤트 모델 = 고전 이벤트 모델의 속성을 HTML 요소에 직접 넣어 이벤트 연결하는 것.
{/* <script>
  const listener = (event) => {

  }
</script>
<body onkeyup = "listener(event)">

</body>   */}