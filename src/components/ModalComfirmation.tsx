import React from 'react';
import {Box, Button, Divider, Modal, ModalDialog, Typography} from "@mui/joy";
import DeleteForever from '@mui/icons-material/DeleteForever';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';

export default function ModalComfirmation({
                                              open,
                                              handleClose,
                                              handleConfirm
                                          }: { open: boolean, handleClose: (b: boolean) => void, handleConfirm: () => void }) {
    return (<>
        <Modal
            aria-labelledby="alert-dialog-modal-title"
            aria-describedby="alert-dialog-modal-description"
            open={open}
            onClose={() => handleClose(false)}
        >
            <ModalDialog variant="outlined" role="alertdialog">
                <Typography
                    id="alert-dialog-modal-title"
                    component="h2"
                    level="inherit"
                    fontSize="1.25em"
                    mb="0.25em"
                    startDecorator={<WarningRoundedIcon/>}
                >
                    Confirmation
                </Typography>
                <Divider sx={{my: 2}}/>
                <Typography
                    id="alert-dialog-modal-description"
                    textColor="text.tertiary"
                    mb={3}
                >
                    Voulez-vous vraiment effectuer cette action ?
                </Typography>
                <Box sx={{display: 'flex', gap: 1, justifyContent: 'flex-end'}}>
                    <Button variant="plain" color="neutral" onClick={() => handleClose(false)}>
                        annuler
                    </Button>
                    <Button variant="solid" color="danger" onClick={() => handleConfirm()}>
                        confirmer
                    </Button>
                </Box>
            </ModalDialog>
        </Modal>
    </>);
}