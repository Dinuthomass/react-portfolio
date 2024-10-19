
import React from 'react';
import { Row } from 'react-bootstrap';
import ProjectCard from './ProjectCard'; 
import image1 from '../assets/images/discount-cal.gif';
import image2 from '../assets/images/media-player.gif';
import image3 from '../assets/images/car.gif';
import image4 from '../assets/images/bata.gif';
import image5 from '../assets/images/travel.gif';

function Project() {
  const cards = [
        { title: 'Budget Calculator', img: image1,github:'https://github.com/Dinuthomass/budget_calculator',link:' https://dinuthomass.github.io/budget_calculator/' },
        { title: 'Media-Player', img: image2 ,github:'https://github.com/Dinuthomass/Mediaplayer_frontend',link:'https://mediaplayer-frontend-gamma.vercel.app/'},
        { title: 'Parallax-website', img: image3, github:'https://github.com/Dinuthomass/Parallax-website',link:'https://dinuthomass.github.io/Parallax-website/' },
        { title: 'Bata-clone', img: image4 ,github:'https://github.com/Dinuthomass/bataclone',link:'https://dinuthomass.github.io/bataclone/'},
        { title: 'Travel', img: image5,github:'https://github.com/Dinuthomass/Travel-website',link:'https://dinuthomass.github.io/Travel-website/' },
      ];

  return (
    <div id="projects" className="container-fluid">
      <h2 className="text-center fw-bolder mb-4">PROJECTS</h2>
      <Row className="justify-content-center">
        {cards.map((card, index) => (
          <ProjectCard key={index} card={card} index={index} />
        ))}
      </Row>
    </div>
  );
}

export default Project;
