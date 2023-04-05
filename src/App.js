import { useState } from 'react';
import { supabase } from './supabaseClient';


import React from 'react';
import './style.css';

// A React component that queries and displays data from Supabase
function Library() {
  // The useState hook lets us store data in a component across renders
  // setMyBooks is a setter function that updates the state of myBooks
  const [myBooks, setMyBooks] = useState([]);
  // This should look familar from Codepen
  async function getBooks() {
    let { data: books, error } = await supabase.from('books').select('*');
    // Update the state
    setMyBooks(books);
  }
  // Execute the function
  getBooks();
  // Below is what displays when you use <Library />
  return (
    <table>
      {myBooks.map((b) => (
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.ISBN}</td>
          <td>{b.description}</td>
        </tr>
      ))}
    </table>
  );
}

function DisplayText() {
  return (
    <div>
      <h3>Who is the fastest 100 meter sprinter of all time?</h3>
    </div>
  );
}
const worldrecord = {
  title: 'Usain Bolt Breaking the World Record',
  year: '2009',
  image:
    'https://api.time.com/wp-content/uploads/2016/08/gettyimages-589521390.jpg',
};

const sprinters = [
  { id: 1, name: 'Asafa Powell', time: '9.72', isFaster: false },
  { id: 2, name: 'Yohan Blake', time: '9.68', isFaster: false },
  { id: 3, name: 'Usain Bolt', time: '9.58', isFaster: true },
];

function FasterThanBolt() {
  const listSprinters = sprinters.map((runner) => (
    <div
      key={runner.id}
      style={{
        color: runner.isFaster ? 'green' : 'red',
      }}
    >
      {runner.name} {runner.time}
    </div>
  ));
  return <div>{listSprinters}</div>;
}

function BoltPicture() {
  return (
    <div>
      <h2>
        {worldrecord.title} ({worldrecord.year})
      </h2>
      <img
        className="usainImage"
        src={worldrecord.image}
        alt={worldrecord.title}
        style={{
          width: worldrecord.width,
          height: worldrecord.height,
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Library />
      <DisplayText />
      <FasterThanBolt />
      <BoltPicture />
    </div>
  );
}
