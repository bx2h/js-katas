import { useState, useEffect } from 'react'

import './style.css'

export default function App() {
    const [message, setMessage] = useState('Player O turn')
    const [gameState, setGameState] = useState<string[][]>([])
    const [turn, setTurn] = useState(0)
    const [hasWinner, setHasWinner] = useState(false)

    useEffect(() => {
        reset()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (hasWinner) {
            const winner = turn ? 'X' : '0'
            setMessage(`Player ${winner} wins!`)
        } else {
            if (turn === 0) {
                setMessage('Player O turn')
            } else {
                setMessage('Player X turn')
            }
        }
    }, [turn, hasWinner])

    const reset = function () {
        setTurn(0)
        buildBoard()
        setHasWinner(false)
    }

    const buildBoard = function () {
        const board = new Array(3)
        for (let i = 0; i < 3; i++) {
            board[i] = new Array(3).fill(null)
        }

        setGameState(board)
    }

    const checkWinner = function (_gameState: string[][]) {
        for (let i = 0; i < 3; i++) {
            if (
                _gameState[i][0] !== null &&
                _gameState[i][0] === _gameState[i][1] &&
                _gameState[i][0] === _gameState[i][2]
            ) {
                return true
            }

            if (
                _gameState[0][i] !== null &&
                _gameState[0][i] === _gameState[1][i] &&
                _gameState[0][i] === _gameState[2][i]
            ) {
                return true
            }
        }

        if (
            _gameState[0][0] !== null &&
            _gameState[0][0] === _gameState[1][1] &&
            _gameState[0][0] === _gameState[2][2]
        ) {
            return true
        }

        if (
            _gameState[0][2] !== null &&
            _gameState[0][2] === _gameState[1][1] &&
            _gameState[0][2] === _gameState[2][0]
        ) {
            return true
        }

        return false
    }

    const move = function (i: number, j: number) {
        if (gameState[i][j] !== null || hasWinner) return

        gameState[i][j] = turn ? 'X' : 'O'

        setGameState(gameState)

        if (checkWinner(gameState)) {
            console.log('has winner', turn)
            setHasWinner(true)
        } else if (turn === 0) {
            setTurn(1)
        } else {
            setTurn(0)
        }
    }

    return (
        <div className="tictactoe">
            <h2 className="tictactoe__status">{message}</h2>
            <div className="tictactoe__board">
                {gameState.map((row, i) => {
                    return (
                        <div className="board__row" key={`row_${i}`}>
                            {row.map((col, j) => (
                                <div
                                    key={`col_${j}`}
                                    className="board__cell"
                                    onClick={() => {
                                        move(i, j)
                                    }}
                                >
                                    {col}
                                </div>
                            ))}
                        </div>
                    )
                })}
            </div>
            <button className="board__reset" onClick={reset}>
                Reset
            </button>
        </div>
    )
}
