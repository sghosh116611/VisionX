import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Figure = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { prior, technologies, path, careers } = props.contents;

  return (
    <div className="grid">
      <figure className="effect-lily">
        <div
          className="img-container"
          style={{ height: "100%", width: "100%" }}
        >
          <img
            src={props.img}
            alt="img12"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <figcaption>
          <div>
            <h2>
              <span>{props.title}</span>
            </h2>
            <p>{props.body}</p> <br />
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
          </div>
        </figcaption>
      </figure>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Pre-Requisite</h1>
          {/* {prior} */}
          {prior.map((pri, key) => (
            <li key={key}>{pri}</li>
          ))}
          <h2>Technologies</h2>
          {technologies.map((tech, key) => (
            <div>
              <h2 key={key}>{tech.title}</h2>
              {tech.technology.map((elem, key) => (
                <li key={key}>{elem}</li>
              ))}
            </div>
          ))}
          <h2>Path</h2>
          {path.map((elem, key) => (
            <li key={key}>{elem}</li>
          ))}
          <h2>Career</h2>
          {careers.map((elem, key) => (
            <li key={key}>{elem}</li>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Figure;
