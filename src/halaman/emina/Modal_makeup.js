import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import Meta from "../../components/Meta";
import React from "react";

export default function Modal_makeup(props) {
    const pageTitle = 'Detail | Emina - Makeup'
    
    return (
        <>
            <Meta title={pageTitle}/>
            <Modal
                {...props}
                size="9xl"
                active={props.showModal}
                toggler={() => {props.setShowModal(false)}}
            >
                <ModalHeader toggler={() => {props.setShowModal(false)}}>
                    Deskripsi Produk
                </ModalHeader>
                <ModalBody>
                    <p className="text-base text-justify leading-relaxed text-gray-600 font-normal">
                        {props.deskripsi}
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="red" ripple="dark" onClick={() => {props.setShowModal(false)}}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}