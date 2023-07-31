import React from 'react'
// import AboutPic from "./assets/headshot.JPG"

import './style.css'

export default function About() {
  return (
    <div className="center">
      <div class="about-header">
      <h1>My name is Alex Colin, here is a little information about myself.</h1>
      </div>
      {/* <div className="image-container">
        <img src={AboutPic} alt=""></img>
      </div> */}
      <br></br>
      <div className="box"> 
        <p>Hello! My name is Alex Colin. I have an associates from College of Dupage in CIS. I haven't had much background in this field yet besides schooling, but am hoping to make a name for myself in this field as i continue to grow! My background in this field is having knowledge in python, html, css, and javascript. I have created minimal websites and programs and am looking forward to making more complex ones!</p>
      </div>

      <div className="box">
        <h2 className="about-h2">Fun stuff about me</h2>
        <ul>
          <li>I love sports and being from chigaco i am a fan of the Bulls, Blackhawks, and Bears</li>
          <li>I enjoy playing video games.</li>
          <li>I like to read material that usually has an eductional purpose, but i love a good fiction book too</li>
          <li>I enjoy hanging out with my friends, family. I like to go fishing a lot which is where i spend most of my time with my friends.</li>
        </ul>
      </div>
    </div>
  )
}