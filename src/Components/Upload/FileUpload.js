import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const FileUpload = ({ handleAddItems, open, setOpen }) => {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState('');

    const handleFileChange = (e) => {
        setFiles(e.target.files);
        setError('');
    };

    const handleUpload = () => {
        if (files.length === 0) {
            setError('Please select files to upload.');
            return;
        }

        const newFiles = Array.from(files).map((file) => ({
            name: file.name,
            type: 'file',
            size: file.size,
            lastModified: file.lastModified,
        }));

        handleAddItems(newFiles);
        setFiles([]);
        // Clear the input after adding
        setOpen(false)
    };
    console.log("first", files)
    return (
        <Box>
            <Button variant="contained" component="label">
                Select Files
                <input type="file" multiple hidden onChange={handleFileChange} />
            </Button>

            <Button variant="contained" color="primary" onClick={handleUpload} sx={{ mt: 1 }}>
                Upload Files
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            <Typography>{files[0]?.name}</Typography>
        </Box>
    );
};

export default FileUpload;
