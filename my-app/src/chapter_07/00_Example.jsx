import React, { useState, useEffect } from "react";

function Counter(props) {
    const [count, setCount] = useState(0);

    useEffect(() => { 
        // 컴포넌트가 마운트 된 이후,
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
        // 의존성 배열에 빈 배열([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행됨
        // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행됨
        document.title = `You clicked ${count} times`;
    });

    return (
        // 컴포넌트가 마웉디 해제되기 전에 실행됨
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>
                클릭
            </button>
        </div>
    )
}

export default Counter;