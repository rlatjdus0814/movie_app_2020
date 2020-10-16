import React from "react";

class App extends React.Component {
  constructor(props) { //render보다 먼저 실행됨
    super(props);
    console.log('constructor!');
  }
  state = {
    count: 0,
  }
  add = () => {
    this.setState(current => ({
      count: current.count + 1
    }));
  }
  minus = () => {
    this.setState(current => ({
      count: current.count - 1
    }));
  }
  componentDidMount() {
    console.log('componentDidMount!'); //render보다 나중에 실행됨
  }
  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }
  //화면이 변하면 render함수 실행
  render() { //클래스에서 return해주기 위함
    console.log('render!');
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;