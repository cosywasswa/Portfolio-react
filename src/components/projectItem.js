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
            <li>{lan1}</li>
            <li>{lan2}</li>
            <li>{lan3}</li>
          </ul>
        </div>
        <div className="visit">
          <ul className="clicks">
            <li>
              <a href={url1} target="_blank" rel="noopener noreferrer">
                <FaPlayCircle />
                See live
              </a>
            </li>
            <li>
              <a href={url2} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                See source
              </a>
            </li>
          </ul>
        </div>

      </div>
    </article>
  );
}

export default projectItem;
