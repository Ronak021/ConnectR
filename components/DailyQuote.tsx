// components/DailyProductivityQuote.tsx
'use client'
import { useEffect, useState } from 'react';

interface Quote {
  content: string;
  author: string;
}

// Quotes array
const quotes: Quote[] = [
  { content: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { content: "Well done is better than well said.", author: "Benjamin Franklin" },
  { content: "Productivity is never an accident.", author: "Paul J. Meyer" },
  { content: "Good behavior is the last refuge of mediocrity.", author: "Henry S. Haskins" },
  { content: "Quality is not an act, it is a habit.", author: "Aristotle" },
  { content: "Efficiency is doing things right; effectiveness is doing the right things.", author: "Peter Drucker" },
  { content: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { content: "Action is the foundational key to all success.", author: "Pablo Picasso" },
  { content: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
  { content: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
  { content: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { content: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
  { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { content: "Success is the sum of small efforts, repeated day-in and day-out.", author: "Robert Collier" },
  { content: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { content: "Your attitude, not your aptitude, will determine your altitude.", author: "Zig Ziglar" },
  { content: "Excellence is to do a common thing in an uncommon way.", author: "Booker T. Washington" },
  { content: "You just can't beat the person who never gives up.", author: "Babe Ruth" },
  { content: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { content: "Genius is 1% inspiration, 99% perspiration.", author: "Thomas Edison" },
  { content: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
  { content: "The best preparation for good work tomorrow is to do good work today.", author: "Elbert Hubbard" },
  { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { content: "Efficiency is doing things right; effectiveness is doing the right things.", author: "Peter Drucker" },
  { content: "Setting goals is the first step in turning the invisible into the visible.", author: "Tony Robbins" },
  { content: "You will never change your life until you change something you do daily.", author: "John Maxwell" },
  { content: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { content: "Optimism is the faith that leads to achievement.", author: "Helen Keller" },
  { content: "If you want to make an easy job seem mighty hard, just keep putting off doing it.", author: "Olin Miller" },
  { content: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { content: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
  { content: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { content: "Success doesn't come from what you do occasionally. It comes from what you do consistently.", author: "Marie Forleo" },
  { content: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { content: "The more I want to get something done, the less I call it work.", author: "Richard Bach" },
  { content: "To win in the marketplace you must first win in the workplace.", author: "Doug Conant" },
  { content: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Ryun" },
  { content: "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.", author: "Steve Jobs" },
  { content: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
 
];



const DailyQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="mt-4 text-lg italic">
      {quote ? (
        <>
          <h2 className="text-xl font-semibold">{quote.content}</h2>
          <p className="mt-2 text-right">— {quote.author}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DailyQuote;
