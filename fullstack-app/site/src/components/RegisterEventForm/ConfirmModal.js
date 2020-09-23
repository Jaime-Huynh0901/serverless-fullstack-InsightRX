import React from "react";
import { Modal } from "antd";

const ConfirmModal = ({ visible, modalData, handleClose }) => {
  const { eventType, sourceName, versionName } = modalData;
  console.log(modalData);

  return (
    <>
      <Modal
        title="Confirmation"
        visible={visible}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <p>You have successfully registered a new event type!</p>
        <p>Event Type Name: {eventType}</p>
        <p>Source Name: {sourceName}</p>
        <p>Version Number: {versionName}</p>
      </Modal>
    </>
  );
};

export default ConfirmModal;
