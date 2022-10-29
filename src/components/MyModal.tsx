import React from "react";
import {Modal, ModalClose, Sheet, Typography} from "@mui/joy";

export default function MyModal(
    {
        focus = true,
        open,
        onClose,
        title,
        children
    }: { focus?: boolean, open: boolean, onClose: (b: boolean) => void, title: string, children: React.ReactNode }) {
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => focus && onClose(false)}
            sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        >
            <Sheet
                variant="outlined"
                sx={{
                    minWidth: 400,
                    maxWidth: 500,
                    borderRadius: 'md',
                    p: 3,
                    boxShadow: 'lg',
                }}
            >
                <ModalClose
                    variant="outlined"
                    sx={{
                        top: 'calc(-1/4 * var(--IconButton-size))',
                        right: 'calc(-1/4 * var(--IconButton-size))',
                        boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                        borderRadius: '50%',
                        bgcolor: 'background.body',
                    }}
                />
                <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    fontWeight="lg"
                    mb={1}
                >
                    {title}
                </Typography>
                {children}
            </Sheet>
        </Modal>
    );

}