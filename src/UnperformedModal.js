import React from "react";
import Modal from 'react-bootstrap/Modal';

import "bootstrap/dist/css/bootstrap.css";

function UnperformedModal(props) {
    const { classes, show, close, activities } = props;
    return (
        <Modal show={show} onHide={close}>
            <Modal.Header closeButton className={classes.modalHeader}>
                <Modal.Title>Unperformed activities</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    The following activities were not performed due covid unfriendly status
                    </div>
                <ul>
                    {activities.map(activity => <li>{activity}</li>)}
                </ul>
            </Modal.Body>
        </Modal>
    )
}

export default UnperformedModal;
