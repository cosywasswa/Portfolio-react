import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { LuPhoneCall } from 'react-icons/lu';
import { HashLink } from 'react-router-hash-link';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import { MdArrowOutward } from 'react-icons/md';
import { FaRegCopyright } from 'react-icons/fa6';
import CountUp from 'react-countup';
import profile from './images/new-profile.png';
import linkedin from './images/SOCIAL1/Linkedin.svg';
import angel from './images/SOCIAL1/angel.svg';
import github from './images/SOCIAL1/github.svg';
import medium from './images/SOCIAL1/medium.svg';
import twitter from './images/SOCIAL1/twitter.svg';
import Item from './projectItem';

const technologies = [
  'React JS', 'Redux', 'Tailwind CSS', 'JavaScript', 'Node JS',
  'Rails', 'PostgreSQL', 'MongoDB', 'Voice agents', 'LLM Chatbots',
];

function Home() {
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const forms = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const { projects } = useSelector((store) => store.projectList);

  const sendEmail = (e) => {
    e.preventDefault();

    const nameValue = nameRef.current?.value.trim();
    const emailValue = emailRef.current?.value.trim();

    if (!nameValue || !emailValue || emailValue !== emailValue.toLowerCase()) {
      setFormError('Please fill in your name and a lowercase email address.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_xg8vjgg',
        'template_yf4a5va',
        forms.current,
        'DGVlJqKcoE4rXL6NA',
      )
      .then(
        () => {
          toast.success('Message sent — thanks for reaching out!');
          forms.current.reset();
          setIsSubmitting(false);
        },
        (error) => {
          toast.error(`Something went wrong: ${error?.text || 'please try again.'}`);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <main>
      <section className="home" id="home">
        <div className="intro">
          <p className="available">
            <span className="dot" />
            Available for work
          </p>
          <h1>
            Hi, I&apos;m
            {' '}
            <span className="highlight">Cosmas Wasswa</span>
          </h1>
          <h2>Full-stack software developer</h2>
          <p className="intro-text">
            I build web applications and AI-powered apps that work well on
            every device and give users a great experience.
          </p>
          <div className="buttons">
            <HashLink smooth to="#projects" className="btn btn-primary">
              View Projects
              <MdArrowOutward />
            </HashLink>
            <a
              className="btn btn-outline"
              href="https://docs.google.com/document/d/1i02BoYplbNeKlRzOCmCfgoJ1NMc7L7x4/export?format=pdf"
            >
              Get Resume
            </a>
          </div>
          <div className="icons">
            <a href="https://github.com/cosywasswa" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/cosmas-wasswa/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://medium.com/@cosywas" target="_blank" rel="noreferrer" aria-label="Medium">
              <img src={medium} alt="Medium" />
            </a>
            <a href="https://wellfound.com/u/cosmas-waswa" target="_blank" rel="noreferrer" aria-label="Wellfound">
              <img src={angel} alt="Wellfound" />
            </a>
            <a href="https://twitter.com/cwasswa" target="_blank" rel="noreferrer" aria-label="Twitter">
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
        <div className="picture">
          <img src={profile} alt="Cosmas Wasswa" className="pic" />
        </div>
      </section>

      <section className="about" id="about">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">About me</h2>
        <div className="about-container">
          <div>
            <p className="about-text">
              As an innovative full-stack software developer, I love solving
              problems and creating great projects with AI capabilities. I see
              challenges as opportunities to grow and improve continuously.
              I&apos;m dedicated to making top-notch solutions that make a real
              difference in the digital world. I have spent my journey coding
              collaboratively with people across the globe. My ability to think
              outside the box and approach problems with innovative solutions is
              what differentiates me.
            </p>
            <div className="stats">
              <div className="stat">
                <h3>
                  <CountUp start={0} end={3} delay={1} />
                  +
                </h3>
                <p>Years experience</p>
              </div>
              <div className="stat">
                <h3>
                  <CountUp start={0} end={30} delay={1} />
                  +
                </h3>
                <p>Projects built</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="stack-title">Current tech stack</h3>
            <ul className="chips">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="projects-container" id="projects">
        <p className="section-label">My work</p>
        <h2 className="section-title">Recent Projects</h2>
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
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let&apos;s work together</h2>
        <p className="contact-text">
          I&apos;m always interested in hearing about new projects, so if you
          would like to chat please get in touch.
        </p>
        <div className="form-right">
          <form ref={forms} onSubmit={sendEmail} id="send">
            <div className="field">
              <input
                type="text"
                name="user_name"
                id="full-name"
                ref={nameRef}
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
                ref={emailRef}
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
              <button type="submit" id="btn" disabled={isSubmitting}>
                <h5>{isSubmitting ? 'Sending...' : 'Get in touch'}</h5>
              </button>
              <span className="submit-error" id="submit-error">
                {formError && <p>{formError}</p>}
              </span>
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
          <span className="copyright">
            <FaRegCopyright />
          </span>
          <p>
            Cosmas Wasswa
            {new Date().getFullYear()}
            {' '}
            All rights Reserved
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
