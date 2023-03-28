import React from 'react';
import './style.css';

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
  image: 'https://api.time.com/wp-content/uploads/2016/08/gettyimages-589521390.jpg',
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
     <h2>{worldrecord.title} ({worldrecord.year})</h2>
    <img
      className="usainImage"
      src={worldrecord.image}
      alt={worldrecord.title}
      style={{
        width: worldrecord.width,
        height: worldrecord.height
      }}
      />
      </div>
  );
}


export default function App() {
  return (
    <div>
      <DisplayText />
      <FasterThanBolt />
      <BoltPicture />
    </div>
  );
}
