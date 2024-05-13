import React, { useState } from "react";

/* // class 컴포넌트는 거의 사용하지 않음
class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        // 확인여부 초기 설정
        this.state = {
            isConfirmed: false,
        };
    }

    // 컨펌 함수
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    };

    render() {
        return (
            <button
                // 컨펌 함수 적용
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인필요"}
            </button>
        )
    }
}
*/

function ConfirmButton(props) {
    const[isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
    };

    return (
        <button
            onClick={handleConfirm} disabled={isConfirmed}
        >
            { isConfirmed ? "확인됨" : "확인필요" }
        </button>
    )

}

export default ConfirmButton;