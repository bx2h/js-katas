import './style.css'

const MIN = 0
const MAX = 100

export default function ProgressBar({ progress }: { progress: number }) {
    const clamped = Math.min(MAX, Math.max(MIN, progress))

    return (
        <div
            className="progress"
            role="progressbar"
            aria-valuenow={clamped}
            aria-valuemin={MIN}
            aria-valuemax={MAX}
        >
            <div className="bar" style={{ width: `${clamped}%` }}>
                <div className="number">{clamped}%</div>
            </div>
        </div>
    )
}
