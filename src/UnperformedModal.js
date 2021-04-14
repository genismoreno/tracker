import React from "react";
import Modal from 'react-bootstrap/Modal';

import "bootstrap/dist/css/bootstrap.css";

function UnperformedModal(props) {
    const { classes, show, close, activities } = props;
    return (
        <Modal show={show} onHide={close} test-id="unperformed-modal-root">
            <Modal.Header closeButton className={classes.modalHeader}>
                <Modal.Title test-id="unperformed-modal-title">Unperformed activities</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div test-id="unperformed-modal-body">
                    The following activities were not performed due covid unfriendly status
                    </div>
                <ul test-id="unperformed-modal-list">
                    {activities.map(activity => <li test-id="unperformed-modal-activity" key={activity}>{activity}</li>)}
                </ul>
            </Modal.Body>
        </Modal>
    )
}

export default UnperformedModal;
