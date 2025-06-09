import { useState } from 'react'
import ProgressBarKata from './components/ProgressBar/ProgressBarKata'
import ImageCarouselKata from './components/ImageCarousel/ImageCarouselKata'
import JobBoardKata from './components/JobBoard/JobBoardKata'
import TicTacToe from './components/TicTacToe/TicTacToe'

import './App.css'

interface Kata {
    id: string
    title: string
    description: string
    component: React.ComponentType
}

const katas: Kata[] = [
    {
        id: 'progress-bar',
        title: 'Progress Bar',
        description:
            'A customizable progress bar component with different progress values',
        component: ProgressBarKata,
    },
    {
        id: 'image-carousel',
        title: 'Image Carousel',
        description: 'An image carousel with left / right and page navigation',
        component: ImageCarouselKata,
    },
    {
        id: 'job-board',
        title: 'Job Board',
        description:
            'API fetch from Hacker News Jobs and display them in a list + laod more button',
        component: JobBoardKata,
    },
    {
        id: 'tic-tac-toe',
        title: 'Tic Tac Toe',
        description: 'A 2 player game of Tic Tac Toe',
        component: TicTacToe,
    },
]

function App() {
    const [currentPage, setCurrentPage] = useState<string>('home')

    const renderKataList = () => (
        <div className="kata-container">
            <h1>React Katas</h1>

            <div className="kata-grid">
                {katas.map((kata) => (
                    <div key={kata.id} className="kata-card">
                        <h3>{kata.title}</h3>
                        <p>{kata.description}</p>
                        <button
                            className="kata-button"
                            onClick={() => setCurrentPage(kata.id)}
                        >
                            Try it out →
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

    const renderKataPage = () => {
        const kata = katas.find((k) => k.id === currentPage)
        if (!kata) return null

        const KataComponent = kata.component

        return (
            <div className="kata-page">
                <button
                    className="back-button"
                    onClick={() => setCurrentPage('home')}
                >
                    ← Back to Katas
                </button>
                <h2>{kata.title}</h2>
                <KataComponent />
            </div>
        )
    }

    return (
        <div className="app">
            {currentPage === 'home' ? renderKataList() : renderKataPage()}
        </div>
    )
}

export default App
