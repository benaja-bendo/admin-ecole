import {Modal, ModalClose, ModalDialog} from "@mui/joy";
import React from "react";

export default function ModalFullPage({
                                          open,
                                          onClose,
                                          children
                                      }: { open: boolean, onClose: (b: boolean) => void, children: React.ReactNode }) {
    return (<Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => onClose(false)}>
        <ModalDialog
            aria-labelledby="layout-modal-title"
            aria-describedby="layout-modal-description"
            layout="fullscreen"
        >
            <ModalClose/>
            {children}
        </ModalDialog>
    </Modal>);
}