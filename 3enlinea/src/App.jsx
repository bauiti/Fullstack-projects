import { useState } from "react";
import "./App.css";
import {Square} from "./components/Square.jsx"
import {TURNS} from "./components/constants.js"




function App() {
    const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null);
  

  }
)
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {

    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  

  const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6],
  [0,3,6],
  [1,4,7],
  [2,5,8],
]

  const checkWinner = (boardToCheck) => {

    for (const combo of WINNER_COMBOS) {

      const [a,b,c] = combo;    
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ) {
          return boardToCheck[a]
        }
    }
    return null
  }

  const checkEndGame = (newBoard) => {

    return newBoard.every((square) => square != null);
  }

  const updateBoard = (index) => {

    if (board[index] || winner) return
    
    const newBoard = [... board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    window.localStorage.setItem('board', JSON.stringify(newBoard)),
    window.localStorage.setItem('turn', turn)
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner);
      confetti()
    } else if (checkEndGame (newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>3 en línea putas</h1>
      <button onClickCapture={resetGame}> La concha de tu madre all boys</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <section>
        {
          winner != null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false
                    ? 'Empate'
                    :'Gano'
                  }
                </h2>

                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>Empezar de nuevo!</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  );
}

export default App;