import { useEffect, useState } from 'react'
import './style.css'

const answer = ['t', 'r', 'e', 'e', 's']

export default function Wordle() {
    const [gameState, setGameState] = useState<string[][]>([])
    const [currentRow, setCurrentRow] = useState(0)
    const [currentLetter, setCurrentLetter] = useState(0)

    useEffect(() => {
        reset()
    }, [])

    useEffect(() => {
        if (gameState.length > 0) {
            window.addEventListener('keydown', onLetterTyped)
            return () => window.removeEventListener('keydown', onLetterTyped)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameState, currentRow, currentLetter])

    const checkWord = (wordArray: string[]) => {
        const status = new Array(5)
        for (let i = 0; i < answer.length; i++) {
            if (answer[i] === wordArray[i]) {
                status[i] = 'correct'
                continue
            }

            let somewhereElse = false
            for (let j = 0; j < answer.length; j++) {
                if (answer[j] === wordArray[i] && i !== j) {
                    somewhereElse = true
                }
            }

            if (somewhereElse) {
                status[i] = 'somewhere'
            } else {
                status[i] = 'wrong'
            }
        }

        return status
    }

    const checkWinLose = (status: string[]) => {
        for (let i = 0; i < status.length; i++) {
            if (status[i] !== 'correct') {
                return false
            }
        }
        return true
    }

    const onLetterTyped = (e: KeyboardEvent) => {
        // word is complete
        if (currentLetter >= 5) {
            if (e.key === 'Enter') {
                const status = checkWord(gameState[currentRow])
                console.log(status)

                // TODO update visuals
                if (checkWinLose(status)) {
                    console.log('you win')
                } else if (currentRow === 5) {
                    console.log('you lose')
                } else {
                    setCurrentRow(currentRow + 1)
                    setCurrentLetter(0)
                }
            }
        } else {
            const newGameState = [...gameState]
            newGameState[currentRow] = [...newGameState[currentRow]]
            newGameState[currentRow][currentLetter] = e.key
            console.log(newGameState)
            setGameState(newGameState)
            setCurrentLetter(currentLetter + 1)
        }
    }

    const reset = () => {
        const newGameState = new Array(6)
        for (let i = 0; i < 6; i++) {
            newGameState[i] = new Array(5).fill('')
        }
        setGameState(newGameState)
    }

    const Row = ({ row }: { row: string[] }) => {
        return (
            <div className="row">
                {row.map((letter: string, i: number) => {
                    return (
                        <span key={i} className="letter">
                            {letter}
                        </span>
                    )
                })}
            </div>
        )
    }

    return (
        <section>
            <div className="wordle">
                {gameState.map((row, i) => {
                    return <Row row={row} key={i} />
                })}
            </div>
        </section>
    )
}
