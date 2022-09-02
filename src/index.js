/* eslint-disable eqeqeq */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// // This class renders buttons
// class Squares extends React.Component {
//   // In order to remember which button got --> State
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null
//   //   }
//   // }
//   render() {
//     return (
//       <button className="square"
//         onClick={() => { this.props.onClick() }} >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// Writing fucntion components
function Squares(props) {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  // Created a State which has Array of 9 items = null
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      isTrue: true,

    }
  }

  // Each time renderSquare get called it renders a Squares. Which is Button
  renderSquare(i) {
    return <
      Squares
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  }



  handleClick(i) {
    // Get a copy of the State Array
    const tempArray = this.state.squares.slice();
    if (this.state.isTrue) { tempArray[i] = 'X' }
    else { tempArray[i] = 'O' }

    this.setState({ squares: tempArray, isTrue: !this.state.isTrue });

  }

  render() {
    const status = 'Next player: ' + (this.state.isTrue ? "X" : "O");
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {/*Instead of calling a function we also can call the component and pass the props directly */}
          {/* <Squares value={0} /> */}
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
