import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about-container">
      <span>
        201930301 김서연입니다. 지금은 11월 13일 웹 컨텐츠 프로그래밍 수업 중입니다.
      </span>
      <span>-김서연, 2020.11.13</span>
    </div>
  );
}

export default About;