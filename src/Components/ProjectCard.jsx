
import React, { useState } from 'react';
import { Card, Col, Modal, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './project.css';

function ProjectCard({ card, index }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const side = index % 2 === 0 ? 'left' : 'right';

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Col xs={12} md={6} lg={4} ref={ref} className="d-flex justify-content-center mb-5">
        <div
          className={`card-container enter-from-${side} ${
            inView ? 'visible' : ''
          }`}
        >
          <Card className="mb-4 small-card" onClick={handleOpenModal} style={{cursor:"pointer"}}>
            <Card.Img variant="top" src={card.img} className="img-fluid" style={{height:"200px"}}/>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleCloseModal} size="sm">
        <Modal.Header closeButton>
          <Modal.Title>{card.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img src={card.img} alt={card.title} className="img-fluid" style={{height:"200px"}}/>
          <div className="mt-3 text-start d-flex flex-column">
          <div className='mt-2'><i class="fa-solid fa-link ms-3 me-2 fs-4"></i><a href={card.link} target='_blank' style={{textDecoration:"none",color:"inherit"}}>View Link</a></div>
         <div className='mt-2'> <i class="fa-brands fa-github ms-3 me-2 fs-4"></i> <a href={card.github} target='_blank' style={{textDecoration:"none",color:"inherit"}}>Git Hub Link</a></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;

