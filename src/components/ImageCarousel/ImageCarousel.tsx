import { useState } from 'react'
import './style.css'

export default function ImageCarousel({
    images,
}: Readonly<{
    images: ReadonlyArray<{ src: string; alt: string }>
}>) {
    const [currIndex, setIndex] = useState(0)

    const next = () => {
        const nextIndex = currIndex === images.length - 1 ? 0 : currIndex + 1
        setIndex(nextIndex)
    }

    const prev = () => {
        const nextIndex = currIndex === 0 ? images.length - 1 : currIndex - 1
        setIndex(nextIndex)
    }

    const goTo = (idx: number) => {
        setIndex(idx)
    }

    return (
        <div className="carousel">
            <img
                key={images[currIndex].src}
                alt={images[currIndex].alt}
                src={images[currIndex].src}
                className="image"
                width="100%"
            />
            <div className="nav-container">
                <button className="nav" aria-label="Previous" onClick={prev}>
                    &larr;
                </button>
                {images.map(({ src, alt }, i) => (
                    <button
                        key={src}
                        className={
                            currIndex === i ? 'page nav active' : 'nav page'
                        }
                        aria-label={`Navigate to ${alt}`}
                        onClick={() => goTo(i)}
                    ></button>
                ))}
                <button className="nav" aria-label="Next" onClick={next}>
                    &rarr;
                </button>
            </div>
        </div>
    )
}
