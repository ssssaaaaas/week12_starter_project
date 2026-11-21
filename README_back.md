# OSS Week 12 - Seungah's Hooks Lab (Student Starter)

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장. 프로젝트 폴더에서 실행:

```bash
npm install
npm run dev
```

브라우저에 터미널의 Local URL을 열고 LAB 탭을 이동하세요. 제출 전 `npm run build`도 실행하세요.

## 수행 방법
1. `src/components/` 아래의 LAB 1~4 파일에 있는 `TODO`를 직접 완성합니다.
2. `src/App.jsx`, `src/App.css`는 공통 화면이므로 가급적 수정하지 않습니다.
3. 각 LAB의 동작 화면과 콘솔 결과를 기록합니다.
4. 한 LAB에서 다른 LAB으로 탭을 전환하면 기존 컴포넌트가 언마운트됩니다. Cleanup 결과를 관찰합니다.


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
    - 이전 State 값을 기준으로 업데이트 함
    - 최신 Count를 정확하게 반영할 수 있음
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
    - useEffect(fn, [])은 Mount 시 실행되고, useEffect(fn)은 렌더링될 때마다 실행된다.
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
    - Dependency가 변경되기 전과 컴포넌트가 언마운트 될 때 실행된다.
    - StrictMode에서는 Effect와 Cleanup이 추가로 실행되어 문제를 확인할 수 있다.
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
    - useState는 값이 변경되면 재렌더링되지만, useRef의 .current가 변경되어도 재렌더링되지 않는다.
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?
    - LAB 2는 running State를 이용해 useEffect에서 Timer를 관리하고, LAB 4는 useRef에 Timer ID를 저장해 이벤트 핸들러에서 직접 관리한다.