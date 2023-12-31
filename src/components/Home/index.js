import React from 'react'
import './style.css'
import grid from './assets/grid.mp4'
import Typewriter from "typewriter-effect";




export default function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <video src={grid} autoPlay loop muted />
      <div className="content">
      <Typewriter 
        onInit={(typewriter) => {
          typewriter
          .typeString("Hello! My name is Alex Colin.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("I am newly made full stack web developer.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Click a tab if you wish to learn more information about me!")
          .pauseFor(1000)
          .start();
        }}
        />
      </div>
    </div>

  )
}
