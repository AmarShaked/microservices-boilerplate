import React from 'react';
import diagram from './diagram.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ isAuthenticated }) => {
  return (
    <div className="Home">
        <article>
          <section>
            <h1>
              Welcome to Microservices boilerplate 
            </h1>
            <p>The project demonstrates how to build a Web application in micro-service architecture.</p>
            <p>I've used lots of technologies, including:</p>
            <ul>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>Redux</li>
              <li>React-Router v4</li>
              <li>Webpack</li>
            </ul>
            <p>The complete source code can be found <a href="http://github.com">here</a>.</p>
            <p>This web application contains a basic registration and logging mechanism for the REST API</p>
            <p>Try to <Link to="/signup">signup</Link> and <Link to="/login">login</Link></p>
          </section>
        </article>
        <img src={diagram} />
    </div>
  )
}

export default Home;