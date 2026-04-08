import { useFeedback } from './hooks/useFeedback';
import StatsCards from './components/StatsCards';
import FeedbackForm from './components/FeedbackForm'; // (You'll create a simple form next)

function App() {
    const { feedbacks, addFeedback } = useFeedback();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Terapage Insight Prototype</h1>
                    <p className="text-gray-500">Uncovering the 'Why' behind user feedback</p>
                </header>

                <StatsCards feedbacks={feedbacks} />
                <FeedbackForm onAdd={addFeedback} />

                {/* List of feedbacks below */}
                <div className="mt-8 space-y-4">
                    {feedbacks.map(f => (
                        <div key={f._id} className="bg-white p-4 rounded-lg border-l-4 shadow-sm" 
                             style={{ borderLeftColor: f.sentimentLabel === 'Positive' ? 'green' : 'red' }}>
                            <p>{f.content}</p>
                            <span className="text-xs text-gray-400">{f.sentimentLabel}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default App;