import React from 'react'
import {EuiText,EuiPanel} from '@elastic/eui';
import data from "../../data.json";

function Modal({showModal, setShowModal, activeIndex, result, parseISOString}) {
  return (
    <>
     <div
      className="modal show"
      style={{ display: 'block', position: 'initial'}}
    >
      <Modal
      show={showModal} 
      onHide={() => setShowModal(false)}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ padding: "20px" }}
    >

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="fs-1" style={{textAllign: "center"}} >
         {/* {result[activeIndex]["Name"]}:*/}
         Title
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       Hi
      </Modal.Body>
    </Modal>
    </div>
    
    
    
    
    </>  )
}

export default Modal