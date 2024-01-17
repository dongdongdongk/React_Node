import React, { useState } from "react";
import './NewGoal.css'

// NewGoal 컴포넌트 선언
const NewGoal = (props) => {
    // useState를 사용하여 enteredText 상태와 해당 상태를 업데이트하는 setEnteredText 함수를 선언
    const [enteredText, setEnteredText] = useState('');

    // addGoalHandler 함수 선언
    const addGoalHandler = (event) => {
        event.preventDefault(); // 폼 제출 시 기본 동작 방지

        // 새로운 목표(newGoal) 객체 생성
        const newGoal = {
            id: Math.random().toString(), // 무작위 고유 id 생성
            text: enteredText // 입력된 텍스트를 목표 객체의 text 속성에 할당
        };

        setEnteredText(''); // 입력 상자 비우기
        props.onAddGoal(newGoal); // 부모 컴포넌트로부터 전달받은 onAddGoal 콜백 함수 호출
    };

    // textChangeHandler 함수 선언
    const textChangeHandler = (event) => {
        setEnteredText(event.target.value); // 입력 상자의 값이 변경될 때마다 enteredText 상태 업데이트
    };

    // JSX 반환
    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            {/* 입력 상자 및 버튼을 포함한 폼 */}
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit">AddGoal</button>
        </form>
    );
}

export default NewGoal; // NewGoal 컴포넌트를 내보냄