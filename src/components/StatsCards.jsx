import { MessageSquare, Smile, Frown } from 'lucide-react';

const StatsCards = ({ feedbacks }) => {
    const total = feedbacks.length;
    const positive = feedbacks.filter(f => f.sentimentLabel === 'Positive').length;
    const negative = feedbacks.filter(f => f.sentimentLabel === 'Negative').length;

    const cards = [
        { label: 'Total Reviews', value: total, icon: <MessageSquare />, color: 'bg-blue-100' },
        { label: 'Positive', value: positive, icon: <Smile className="text-green-600" />, color: 'bg-green-100' },
        { label: 'Negative', value: negative, icon: <Frown className="text-red-600" />, color: 'bg-red-100' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {cards.map((card, i) => (
                <div key={i} className={`${card.color} p-6 rounded-xl shadow-sm flex items-center justify-between`}>
                    <div>
                        <p className="text-sm text-gray-600">{card.label}</p>
                        <h3 className="text-2xl font-bold">{card.value}</h3>
                    </div>
                    {card.icon}
                </div>
            ))}
        </div>
    );
};

export default StatsCards;