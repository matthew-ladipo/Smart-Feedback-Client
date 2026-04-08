import React, { useState } from 'react';
import { Send } from 'lucide-react';

const FeedbackForm = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        setIsSubmitting(true);
        try {
            await onAdd(text); // Calling the function from our Custom Hook
            setText('');       // Clear input on success
        } catch (err) {
            alert("Failed to send feedback. Is the backend running?");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <label className="block text-gray-700 font-medium mb-2 text-sm uppercase tracking-wider">
                Leave your Feedback
            </label>
            <div className="flex flex-col gap-4">
                <textarea
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                    rows="3"
                    placeholder="Tell us about your experience..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={isSubmitting}
                />
                <button
                    type="submit"
                    disabled={isSubmitting || !text.trim()}
                    className={`flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-white transition-all 
                        ${isSubmitting || !text.trim() ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'}`}
                >
                    {isSubmitting ? 'Analyzing Sentiment...' : 'Analyze & Submit'}
                    <Send size={18} />
                </button>
            </div>
        </form>
    );
};

export default FeedbackForm;