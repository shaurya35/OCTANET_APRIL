import React from 'react'
import home from '../assets/home.png'
import "./Main.css"

const Main = () => {
  return (
    <section className="home">
      <div className="content">
        <h1 className="title">
          Fresh <span>coffee</span> in the <span>morning</span>
        </h1>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, architecto tenetur officiis quasi velit vel </p>
        <a href="#" className="btn">Get Started</a>
      </div>
      <div className="image">
        <img src={home} alt="Home" className='move' />
      </div>
    </section>
  )
}

export default Main
