import React from 'react';
import { useSelector } from 'react-redux';
import { FaHandPointDown } from 'react-icons/fa';
import pic from './images/my-pic.jpg';
import linkedin from './images/SOCIAL1/Linkedin.svg';
import angel from './images/SOCIAL1/angel.svg';
import github from './images/SOCIAL1/github.svg';
import medium from './images/SOCIAL1/medium.svg';
import twitter from './images/SOCIAL1/twitter.svg';
import Item from './projectItem';

function Home() {
  const { projects } = useSelector((store) => store.projectList);
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
          <p>
            A passionate and innovative full-stack software developer.
            With love for all things tech, I thrive on turning ideas
            into reality through clean,
            efficient, and user-centric code.. Changing the world.
          </p>
          <div className="socials">
            <p>
              Connect with me
              <FaHandPointDown />
            </p>
            <div className="icons">
              <img src={github} alt="" />
              <img src={linkedin} alt="" />
              <img src={medium} alt="" />
              <img src={angel} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-left">
          <h2>About me</h2>
          <div className="details">
            <p>
              Hello, i&apos;m a software developer, I can help you build a
              proffessional website, feature. Look through some of my work and
              experience and if you are pleased with my work, contact me.
            </p>
          </div>
        </div>
        <div className="about-right">
          <h2>SKILLS</h2>
          <p>
            I have knowledge in the following fields
            Front-end: JavaScript, ReactJS, Redux, HTML5,
            Additional knowledge: Java, Restful APIs
            Styling: CSS, Sass, Bootstrap
            Testing: Jest, React Testing Library,
            Version Control: Git
            Development platforms: GitHub, Jira (Kanban boards), GitFlow, Linters
          </p>
          <div className="resume">
            <a className="res" href="https://github.com/cosywasswa">Get my resume</a>
          </div>
          <div className="about-me-img" />
        </div>
      </section>
      <section className="projects-container" id="projects">
        <h2 className="proj-title">
          My Recent Projects
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