// components/DailyQuote.tsx
'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Quote {
  content: string;
  author: string;
}

const apiDailyQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Fetch a random motivational quote
        const response = await axios.get('https://api.quotable.io/random?tags=motivational');
        setQuote(response.data);
      } catch (err) {
        console.error(err); // Log the error to the console for debugging
        setError('Failed to fetch quote');
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="mt-4 text-lg italic">
      <h2 className="text-xl font-semibold">{quote?.content}</h2>
      <p className="mt-2 text-right">— {quote?.author}</p>
    </div>
  );
};

export default apiDailyQuote;
