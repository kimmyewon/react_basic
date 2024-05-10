class Hello extends React.Component { // 'Hello' 라는 이름을 가진 컴포넌트
    render() {
        return <div>Hello {this.props.toWhat}</div> // 자바스크립트와 html 코드가 결합된 jsx 
    }
}

React.DOM.render( //  React.DOM의 render 함수를 사용해 화면에 렌더링 해줌 
    <Hello toWhat = "world" />
    document.getElementById('root')
)

React.createElement (
    type, // div나 span등의 태그 또는 다른 React 컴포넌트
    [props], 
    [chiildren] // 현재 엘리먼트가 포함하고 있는 자식 엘리먼트
)