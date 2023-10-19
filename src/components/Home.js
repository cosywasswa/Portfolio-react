import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHandPointDown, FaHandPeace } from 'react-icons/fa';
import { fetchquote } from '../redux/projectsSlice/projectSlice';
import pic from './images/my-pic.jpg';
import linkedin from './images/SOCIAL1/Linkedin.svg';
import angel from './images/SOCIAL1/angel.svg';
import github from './images/SOCIAL1/github.svg';
import medium from './images/SOCIAL1/medium.svg';
import twitter from './images/SOCIAL1/twitter.svg';
import Item from './projectItem';

function Home() {
  const dispatch = useDispatch();
  const { projects, quotes, isLoading } = useSelector((store) => store.projectList);
  useEffect(() => {
    dispatch(fetchquote());
    if (isLoading) {
      return (
        <p />
      );
    }
    const form = document.querySelector('.form');
    const email = document.querySelector('#email');
    const name = document.querySelector('#full-name');
    const error = document.querySelector('#submit-error');

    if (form) {
      const handleForm = (e) => {
        const mail = email.value;
        e.preventDefault();
        if (mail === mail.toLowerCase() && name.value) {
          form.submit();
          if (error.querySelector('p')) {
            error.removeChild(error.querySelector('p'));
          }
        } else {
          const message = document.createElement('p');
          message.textContent = 'Please fill in name and email in small letters';
          error.appendChild(message);
        }
      };
      form.addEventListener('submit', handleForm);
      return () => {
        form.removeEventListener('submit', handleForm);
      };
    }
    return null;
  }, [dispatch]);
  window.onload = () => {
    const currenTime = () => {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();
      const hours = currentDate.getHours();
      const mins = currentDate.getMinutes();
      const fullDate = `${year}-${month}-${day} ${hours}:${mins}`;
      const display = document.querySelector('.time');
      display.textContent = fullDate;
    };

    currenTime();
    setInterval(currenTime, 1000);
  };
  return (
    <main>
      <section className="home">
        <div className="picture">
          <img src={pic} alt="" />
        </div>
        <div className="intro">
          <h1>
            Hey There.
            <br />
            I&apos;m Cosmas.
          </h1>
          <h2>I&apos;m a Full-stack software developer</h2>
          <div className="into-p">
            <p>
              A passionate and innovative full-stack software developer from Uganda.
              With love for all things tech, I thrive on turning ideas
              into reality through clean,
              efficient, and user-centric code.. Changing the world is my goal.
            </p>
          </div>
          <div className="socials">
            <p>
              Connect with me
              <FaHandPointDown />
            </p>
            <div className="icons">
              <a href="https://github.com/cosywasswa" target="_blank" rel="noreferrer"><img src={github} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/cosmas-wasswa/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedln" /></a>
              <a href="https://medium.com/@cosywas" target="_blank" rel="noreferrer"><img src={medium} alt="Medium" /></a>
              <a href="https://wellfound.com/u/cosmas-waswa" target="_blank" rel="noreferrer"><img src={angel} alt="Wellfound" /></a>
              <a href="https://twitter.com/cwasswa" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
            </div>
          </div>
          <div className="quote">
            <p><code><span className="time" /></code></p>
            {quotes && quotes[0]
            && (
            <p className="quote-p">
              <FaHandPeace />
              <code>
                {quotes[0].quote}
              </code>
              <FaHandPeace />
            </p>
            )}
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-left">
          <h2>About me</h2>
          <div className="details">
            <p>
              &quot;Innovative software developer passionate about crafting elegant solutions.
              Proficient in translating complex ideas into user-friendly applications.
              Dedicated to continuous learning and staying updated with industry trends
              Check out some of my work and feel free to connect with me&quot;
            </p>
            <p className="stack">
              <code>Tech-stack</code>
            </p>
          </div>
        </div>
        <div className="about-right">
          <p>
            <div className="icon-div">
              <i className="devicon-html5-plain-wordmark colored" />

              <i className="devicon-postgresql-plain colored" />

              <i className="devicon-bootstrap-plain-wordmark colored" />

              <i className="devicon-react-original-wordmark colored" />

              <i className="devicon-css3-plain" />

              <i className="devicon-sass-original" />

              <i className="devicon-redux-original" />

              <i className="devicon-javascript-plain" />

              <i className="devicon-ruby-plain-wordmark colored" />

              <i className="devicon-babel-plain" />

            </div>
          </p>

          <div className="about-me-img" />
        </div>
        <div className="resume">
          <a className="res" href="https://docs.google.com/document/d/1oMldrNEUyND5YjjUq67pWXmAWZpw5Za-LD2Z5oHP2_w/edit?usp=sharing">See resume</a>
        </div>
      </section>
      <section className="projects-container" id="projects">
        <h2 className="proj-title">
          <code>
            My Recent Projects
          </code>
        </h2>
        <hr />
        <div className="container">
          {projects.map((project) => (
            <Item
              key={project.id}
              id={project.id}
              title={project.title}
              image={process.env.PUBLIC_URL + project.image}
              description={project.description}
              lan1={project.languages.lan1}
              lan2={project.languages.lan2}
              lan3={project.languages.lan3}
              url1={project.url1}
              url2={project.url2}
            />
          ))}
        </div>
      </section>
      <section className="form-area" id="contact">
        <div className="creator">
          <h2>
            I&apos;m always interested in hearing about new projects, so if you would
            like to chat please get in touch.
          </h2>
        </div>
        <div className="form-right">
          <form className="form" action="https://formspree.io/f/mjvdlwyk" method="post" id="send">
            <div className="field">
              <input
                type="text"
                name="Full-name"
                id="full-name"
                placeholder="Full name"
                maxLength="30"
                required
              />
              <span className="input-error" id="name-error" />
            </div>
            <div className="field">
              <input
                type="email"
                name="email-address"
                id="email"
                placeholder="Email address"
                required
              />
              <span className="input-error" id="email-error" />
            </div>
            <div className="field">
              <textarea
                name="comments"
                id="textmsg"
                rows="5"
                maxLength="500"
                placeholder="Write me something..."
                required
              />
              <span className="text-error" id="text-error" />
            </div>
            <div className="field">
              <button type="submit" id="btn"><h5>Get in touch</h5></button>
              <span className="submit-error" id="submit-error" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Home;
