'use client'
import { useEffect, useState } from 'react';

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const url ="https://zenquotes.io/api/random/";
        const response = await fetch(url);
        const data = await response.json();
        if (data && data.length > 0) {
          setQuote(data[0].q);
          setAuthor(data[0].a);
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="">
   
      {quote && (
        <blockquote className="mt-4 text-lg italic">
          "{quote}"
          <footer className="mt-2 ">- {author}</footer>
        </blockquote>
      )}
    </div>
  );
};

export default QuoteComponent;
