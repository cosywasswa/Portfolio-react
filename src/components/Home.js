import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaHandPointDown, FaHandPeace } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.css';
import emailjs from '@emailjs/browser';
import { MdArrowOutward } from 'react-icons/md';
import { FaRegCopyright } from 'react-icons/fa6';
import CountUp from 'react-countup';
import { fetchquote } from '../redux/projectsSlice/projectSlice';
import profile from './images/new-profile.png';
import linkedin from './images/SOCIAL1/Linkedin.svg';
import angel from './images/SOCIAL1/angel.svg';
import github from './images/SOCIAL1/github.svg';
import medium from './images/SOCIAL1/medium.svg';
import twitter from './images/SOCIAL1/twitter.svg';
import Item from './projectItem';

function Home() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const dispatch = useDispatch();
  const aboutRef = useRef();
  const contactRef = useRef();
  const { projects, quotes } = useSelector((store) => store.projectList);

  useEffect(() => {
    dispatch(fetchquote());

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
    return undefined;
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsAboutVisible(true);
        observer.unobserve(entry.target);
      }
    });
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsContactVisible(true);
        observer.unobserve(entry.target);
      }
    });
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const forms = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xg8vjgg', 'template_yf4a5va', forms.current, 'DGVlJqKcoE4rXL6NA')
      .then((result) => {
        toast.success('Message successful:ok', result);
        forms.current.reset();
      }, (error) => {
        toast.error('error:', error);
      });
  };

  return (
    <main>
      <section className="main-home">
        <section className="home" id="home">
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
                I&apos;M
                <strong className="full-names"> Cosmas Wasswa</strong>
              </h1>
            </div>
            <div className="round-shape" />
            <h2>A Full-stack software developer</h2>
            <div className="into-p">
              <p>
                Experienced in crafting web applications
                <br />
                I enjoy creating websites that work well on all device
                and give users a great experience.
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
            <div className="home-btn">
              <div className="resume">
                <a className="res" href="https://docs.google.com/document/d/1mClDhoeCog2GU7OSaIb2oWOd_9P9sLRR/export?format=pdf">Get resume</a>
              </div>
              <div className="get-contact">
                <li>
                  <HashLink smooth to="#projects" className="res-link">My Projects</HashLink>
                </li>
                <MdArrowOutward className="arrow-contact" />
              </div>
            </div>
          </div>
        </section>
        <div className="count-container">
          <div className="count-div1">
            <h1>
              <CountUp start={0} end={3} delay={1} />
              <span>+</span>
            </h1>
            <p>Years Of Experience</p>
          </div>
          <div className="count-div2">
            <h1>
              <CountUp start={0} end={35} delay={2} />
              <span>+</span>
            </h1>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <h1>Who Iam</h1>
        <h2>About me</h2>
        <div className="about-container">
          <div className="about-left">
            <div className="details">
              <p className={`my-details ${isAboutVisible ? 'visible' : ''}`} ref={aboutRef}>
                As an innovative Full-stack software developer,
                I love solving problems and creating great projects.
                I see challenges as opportunities to grow and improve continuously.
                I&apos;m dedicated to making top-notch solutions that make
                a real difference in the digital world
                I have spent all my journey coding collaboratively with different
                people across the globe.
                My ability to think outside the box and approach problems with
                innovative solutions is what differentiates me.
              </p>
              <h3 className="stack">
                <code>
                  Current Tech-stack
                  <FaHandPointDown className="fa-check-circle" />
                </code>
              </h3>
              <div className="technologies-list">
                <ul className="list-stacks">
                  <div>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      React JS
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      Redux
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      Tailwind CSS
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      JavaScript
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      Eleven labs
                    </li>
                  </div>
                  <div>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      NodeJs
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      Rails
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      N8N
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      PostgreSQL
                    </li>
                    <li>
                      <i className="fa fa-check-circle" aria-hidden="true" />
                      MongoDB
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

              <i className="devicon-tailwindcss-plain colored" />

              <i className="devicon-react-original-wordmark colored" />

              <i className="devicon-css3-plain colored" />

              <i className="devicon-rails-plain colored" />

              <i className="devicon-redux-original colored" />

              <i className="devicon-javascript-plain colored" />

              <i className="devicon-ruby-plain-wordmark colored" />

              <i className="devicon-babel-plain colored" />

              <i className="devicon-nodejs-plain colored" />

              <i className="devicon-mongodb-plain colored" />
            </div>
            <div className="about-me-img" />
          </div>
        </div>
      </section>
      <section className="projects-container" id="projects">
        <h1 className="proj-title">
          <code>
            Recent Projects
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
          <h2 ref={contactRef} className={`contact-h2 ${isContactVisible ? 'visible' : ''}`}>
            I&apos;m always interested in hearing about new projects, so if you would
            like to chat please get in touch.
          </h2>
        </div>
        <div className="form-right">
          <form ref={forms} onSubmit={sendEmail} id="send">
            <div className="field">
              <input
                type="text"
                name="user_name"
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
                name="user_email"
                id="email"
                placeholder="Email address"
                required
              />
              <span className="input-error" id="email-error" />
            </div>
            <div className="field">
              <textarea
                name="message"
                id="textmsg"
                rows="3"
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
      <div className="footer">
        <div className="caller-div">
          <LuPhoneCall />
          <p>+256775487125 +256757123505</p>
        </div>
        <div className="copyright-div">
          <span className="copyright"><FaRegCopyright /></span>
          <p>Cosmas Wasswa 2023 All rights Reserved</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
