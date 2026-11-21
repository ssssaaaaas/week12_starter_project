import { useRef, useState } from 'react';

// LAB 3 (Slide 15): Input Focus with useRef
export default function Lab3InputFocus() {
  // TODO 1: input DOM을 참조할 inputRef 생성 (초기값 null)
  const inputRef = useRef(null);
  const [msg, setMsg] = useState('');
  const [isError, setIsError] = useState(false);

  const focusInput = () => {
    // TODO 2: ref.current를 이용해 input에 focus() 호출
    inputRef.current.focus();
  };

  const clearInput = () => {
    // TODO 3: input의 값을 지우고 다시 Focus
    inputRef.current.value = '';
    setMsg('');
    inputRef.current.focus();
  };

  // 이름 검사
  const checkInput = () => {
    const name = inputRef.current.value.trim();

    if (name === '') {
      setMsg('이름을 입력해주세요');
      setIsError(true);
    } else if (name.length < 2) {
      setMsg('2글자 이상 입력해주세요');
      setIsError(true);
    } else if (/[0-9]/.test(name)) {
      setMsg('숫자는 입력할 수 없어요');
      setIsError(true);
    } else {
      setMsg('확인 완료! ' + name + '님 안녕하세요');
      setIsError(false);
      return;
    }

    inputRef.current.focus(); // 틀리면 다시 입력창으로
  };

  return (
    <div>
      <p className="hint">TODO를 완성하면 Focus / Clear 버튼이 동작합니다.</p>
      <label htmlFor="student-name" className="hint">Name</label>
      <input id="student-name" className="field" placeholder="Enter your name" ref={inputRef} />
      {msg && <p className={isError ? 'msg error' : 'msg ok'}>{msg}</p>}
      <div className="controls">
        <button onClick={focusInput}>Focus</button>
        <button className="secondary" onClick={clearInput}>Clear</button>
        <button className="secondary" onClick={checkInput}>Check</button>
      </div>
    </div>
  );
}
