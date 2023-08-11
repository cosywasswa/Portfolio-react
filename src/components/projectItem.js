import React from 'react';
import { FaPlayCircle, FaGithub } from 'react-icons/fa';

function projectItem({
  title, description, image, lan1, lan2, lan3, url1, url2,
}) {
  return (
    <article className="card-container">
      <div className="image-div">
        <img src={image} alt={title} />
      </div>
      <div className="card-details">
        <div className="works-head">
          <h2>{title}</h2>
          <p className="paragraph">{description}</p>
        </div>
        <div className="languages">
          <ul className="list">
            <li><a href="index.html">{lan1}</a></li>
            <li><a href="index.html">{lan2}</a></li>
            <li><a href="index.html">{lan3}</a></li>
          </ul>
        </div>
        <div className="visit">
          <ul className="clicks">
            <li>
              <a href={url1} target="_blank" rel="noopener noreferrer">See live</a>
              {' '}
              <FaPlayCircle className="play-icon" />
            </li>
            <li>
              <a href={url2} target="_blank" rel="noopener noreferrer">See source</a>
              <FaGithub className="git-icon" />
            </li>
          </ul>
        </div>

      </div>
    </article>
  );
}

export default projectItem;
