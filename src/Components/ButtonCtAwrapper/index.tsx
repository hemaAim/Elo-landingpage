"use client";
import styles from "./page.module.css";
import { useState } from 'react';
import PipefyForm from "@/Components/Pipefy"

import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
 


export type ButtonProps = {
  title?: string
}



function ButtonCtAwrapper({title}: ButtonProps) {
 
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
     
      <button className={styles.ctaButton} onClick={() => setLgShow(true)}>{title}</ button>
     
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className={styles.title}id="example-modal-sizes-title-lg">
           Cadastro para o Lançamento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex align-items-center justify-content-center"> 
        <PipefyForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ButtonCtAwrapper;
