import ProgressBar from './ProgressBar'

export default function ProgressBarKata() {
    const examples = [
        { progress: -100, label: 'Negative value (clamped to 0%)' },
        { progress: 0, label: 'Empty progress bar (0%)' },
        { progress: 25, label: 'Quarter progress (25%)' },
        { progress: 50, label: 'Half progress (50%)' },
        { progress: 75, label: 'Three quarters (75%)' },
        { progress: 100, label: 'Complete progress (100%)' },
        { progress: 200, label: 'Overflow value (clamped to 100%)' },
    ]

    return (
        <div className="progress-kata">
            <div className="progress-examples">
                {examples.map((example, index) => (
                    <div key={index} className="progress-example">
                        <label className="progress-label">
                            {example.label}
                        </label>
                        <ProgressBar progress={example.progress} />
                    </div>
                ))}
            </div>
        </div>
    )
}
