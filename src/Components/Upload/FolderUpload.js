import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const FolderUpload = ({ handleAddItems, open, setOpen }) => {
    const [folders, setFolders] = useState([]);
    const [folderName, setFolderName] = useState('');
    const [error, setError] = useState('');

    const handleFolderChange = (e) => {
        const files = e.target.files;
        setFolders(files);

        if (files.length > 0) {
            const firstFilePath = files[0].webkitRelativePath;
            const firstFolderPath = firstFilePath.split('/');
            const name = firstFolderPath[0]; // Extract the top-level folder name
            setFolderName(name);
        }

        setError('');
    };

    const handleUpload = () => {
        if (folders.length === 0) {
            setError('Please select a folder to upload.');
            return;
        }

        const folderStructure = {};
        Array.from(folders).forEach((file) => {
            const pathParts = file.webkitRelativePath.split('/');
            const folderName = pathParts.slice(0, -1).join('/');
            if (!folderStructure[folderName]) {
                folderStructure[folderName] = [];
            }
            folderStructure[folderName].push({
                name: file.name,
                size: file.size,
                type: 'file',
                lastModified: file.lastModified,
            });
        });

        const newFolders = Object.keys(folderStructure).map((folderName) => ({
            name: folderName,
            type: 'folder',
            files: folderStructure[folderName],
        }));

        handleAddItems(newFolders);
        setFolders([]); // Clear the input after adding
        setFolderName(''); // Clear the folder name after adding
        setOpen(false);
    };

    return (
        <Box>
            <Button variant="contained" component="label">
                Select Folder
                <input type="file" webkitdirectory="true" multiple hidden onChange={handleFolderChange} />
            </Button>
            {folderName && (
                <Typography variant="body1" mt={2}>
                    Selected Folder: {folderName}
                </Typography>
            )}
            <Button variant="contained" color="primary" onClick={handleUpload} sx={{ mt: 1 }}>
                Upload Folder
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            <Typography>{folderName}</Typography>
        </Box>
    );
};

export default FolderUpload;
