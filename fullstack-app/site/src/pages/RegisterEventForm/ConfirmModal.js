import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmModal = ({ show, modalData, handleClose }) => {
  const { eventType, sourceName, versionName } = modalData;
  console.log(modalData);

  return (
    <>
      <Modal show={show} hide={handleClose}>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You has successfully register a new event type!</p>
          <p>Event Type Name: {eventType}</p>
          <p>Source Name: {sourceName}</p>
          <p>Version Number: {versionName}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit another
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
