import React, { useState } from 'react';
import { Modal, Box, Button, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import FolderUpload from '../Upload/FolderUpload';
import FileUpload from '../Upload/FileUpload';

const SimpleModal = ({ open, setOpen, uploadedItem, setUploadedItems, handleAddItems }) => {
    // const [] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 4,
        boxShadow: 24,
        p: 4,
    };
    console.log("uploadedItems", uploadedItem)

    return (
        <div>

            <Modal open={open} onClose={handleClose}>
                <Box sx={style}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6" component="h2">
                            Upload Files and Folders
                        </Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        You can upload files and folders using the options below.
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                        <FileUpload handleAddItems={handleAddItems} open={open} setOpen={setOpen} />
                        <FolderUpload handleAddItems={handleAddItems} open={open} setOpen={setOpen} />
                    </Box>

                </Box>
            </Modal>
        </div>
    );
};

export default SimpleModal;
