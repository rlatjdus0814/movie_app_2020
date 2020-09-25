import React from "react";
import img01 from './images/1.jpg';
import img02 from './images/2.jpg';
import img03 from './images/3.jpg';
import img04 from './images/4.jpg';
import img05 from './images/5.jpg';

function Food({ name, picture, message }) {

  return (
    <div>
      <h3>I Love {name}</h3>
      <img src={picture} alt={message} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "볶음밥",
    image: img01,
    message: '볶음밥 사진'
  },
  {
    id: 2,
    name: "핫케이크",
    image: img02,
    message: '핫케이크 사진'
  },
  {
    id: 3,
    name: "파스타",
    image: img03,
    message: '파스타 사진'
  },
  {
    id: 4,
    name: "떡볶이",
    image: img04,
    message: '떡볶이 사진'
  },
  {
    id: 5,
    name: "피자",
    image: img05,
    message: '피자 사진'
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} message={dish.message} />
      ))}
    </div>
  );
}

export default App;
