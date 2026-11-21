import { useEffect, useState } from 'react';
import { formatTime } from '../formatTime.js';

// LAB 2 (Slide 10): Timer Start / Stop / Reset
export default function Lab2TimerControl() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    // TODO 1: running이 false면 타이머를 만들지 않기
    // TODO 2: running이 true면 setInterval로 1초마다 count 증가
    // TODO 3: Cleanup에서 clearInterval 호출
    if (!running) return;

    const id = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    console.log('[LAB 2] start', id);

    return () => {
      clearInterval(id);
      console.log('[LAB 2] clear', id);
    };
  }, [running]);

  const reset = () => {
    // TODO 4: 타이머를 멈추고 count를 0으로 초기화
    setRunning(false);
    setCount(0);
  };

  // 상태 글자
  let statusText = 'Ready';
  if (running) statusText = 'Running';
  else if (count > 0) statusText = 'Paused';

  return (
    <div>
      <p className="status">
        <span className={running ? 'dot on' : 'dot'}></span>
        상태: {statusText}
      </p>
      <div className="count">{formatTime(count)}</div>
      <p className="hint">총 {count}초</p>
      <div className="controls">
        <button onClick={() => setRunning(true)} disabled={running}>Start</button>
        <button className="secondary" onClick={() => setRunning(false)} disabled={!running}>Stop</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
      <p className="hint">Start/Stop 버튼의 State 변경과 Effect 실행의 관계를 확인하세요.</p>
    </div>
  );
}
