import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHandPointDown, FaHandPeace } from 'react-icons/fa';
import '@fortawesome/fontawesome-free/css/all.css';
import { fetchquote } from '../redux/projectsSlice/projectSlice';
import profile from './images/my pic-bk.jpg';
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
          <div className="icons">
            <a href="https://github.com/cosywasswa" target="_blank" rel="noreferrer"><img src={github} alt="Github" /></a>
            <a href="https://www.linkedin.com/in/cosmas-wasswa/" target="_blank" rel="noreferrer"><img src={linkedin} alt="Linkedln" /></a>
            <a href="https://medium.com/@cosywas" target="_blank" rel="noreferrer"><img src={medium} alt="Medium" /></a>
            <a href="https://wellfound.com/u/cosmas-waswa" target="_blank" rel="noreferrer"><img src={angel} alt="Wellfound" /></a>
            <a href="https://twitter.com/cwasswa" target="_blank" rel="noreferrer"><img src={twitter} alt="twitter" /></a>
          </div>
          <img src={profile} alt="" className="pic" />
        </div>
        <div className="intro">
          <div className="h1">
            <h1 className="hey">
              Hey There
              <span className="waving">
                👋🏻
              </span>
              <br />
            </h1>
            <h1 className="myname">
              IAM
              <strong className="full-names"> Cosmas Wasswa</strong>
            </h1>
          </div>
          <h2>I&apos;m a Full-stack software developer from Uganda</h2>
          <div className="into-p">
            <p>
              Experienced in crafting web applications using languages like
              <strong className="my-languages">
                {' '}
                Ruby on Rails,
                React, Ruby, JavaScript, HTML5, CSS3, and tailwing CSS
                {' '}
              </strong>
              I enjoy creating websites that work well on any device
              and give users a great experience.
              Keeping up with new tech is my jam,
              and I&apos;m dedicated to using my skills to make awesome,
              top-notch projects that businesses and people love.
            </p>
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
        <h2>About me</h2>
        <div className="about-container">
          <div className="about-left">
            <div className="details">
              <p>
                As an innovative Full-stack software developer,
                I love solving problems and creating great projects.
                I see challenges as opportunities to grow and improve continuously.
                I&apos;m dedicated to making top-notch solutions that make
                a real difference in the digital world
                I have spent all my journey coding collaboratively with different
                people across the globe.
                My ability to think outside the box and approach problems with
                innovative solutions is what differentiates me.
                I have managed to build, and deploy more than 30 projects
                using the different stacks and also acquired numerous certifications
              </p>
              <p className="stack">
                <code>
                  Current Tech-stacks
                  <FaHandPointDown className="fa-check-circle" />
                </code>
              </p>
              <div className="technologies-list">
                <ul className="list-stacks">
                  <div>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      React JS
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      Ruby / Rails
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      JavaScript
                    </li>
                  </div>
                  <div>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      HTML5 / CSS3
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      Tailwind CSS
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      PostgreSQL
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-right">
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
            <div className="about-me-img" />
          </div>
        </div>
        <div className="resume">
          <a className="res" href="https://docs.google.com/document/d/1oMldrNEUyND5YjjUq67pWXmAWZpw5Za-LD2Z5oHP2_w/export?format=pdf">Download resume</a>
        </div>
      </section>
      <section className="projects-container" id="projects">
        <h1 className="proj-title">
          <code>
            My Recent Projects
          </code>
        </h1>
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
