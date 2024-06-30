import React, { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import Button from '@mui/material/Button';

const formatFileSize = (size) => {
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`;
    if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
};

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};
const filterValue = (data, search) => {
    return data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

}
function Files({ uploadedItem, setUploadedItems, handleAddItems, searchValue, setSearchValue }) {
    // console.log("uploadedItem", uploadedItem)
    const [openMenu, setOpenMenu] = useState(false)
    const [editName, setEditName] = useState('');
    const [indexVal, setIndexVal] = useState(null)
    const [edit, setEdit] = useState(false)
    const [editingItem, setEditingItem] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event, index, name) => {
        setAnchorEl(event.currentTarget);
        setEditingItem(name)
        console.log("new indx vaslue", name)
        setIndexVal(index)
        setEditName(name)
        setOpenMenu(true)


    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleDelete = (index) => {
        console.log("file", uploadedItem)
        const updatedData = [...uploadedItem];
        updatedData.splice(indexVal, 1);
        setUploadedItems([...updatedData]);
        setOpenMenu(false)
        handleClose()
    };

    // const handleEditStart = (item) => {

    //     // setIndexVal(index)
    //     setEdit(!edit)
    //     setEditingItem(item);
    //     setEditName(item.name);
    //     setEdit(false)
    // };

    // const handleEditSave = () => {
    //     console.log("editing file", editingItem)
    //     const updatedData = uploadedItem.map(item => {
    //         console.log(item)
    //         console.log(editingItem)
    //         console.log(item.name === editingItem)
    //         if (item.name === editingItem) {
    //             return { ...item, name: editName };
    //         }
    //         if (item.type === 'folder') {
    //             return {
    //                 ...item,
    //                 files: item.files.map(file => {
    //                     if (file === editingItem) {
    //                         return { ...file, name: editName };
    //                     }
    //                     return file;
    //                 })
    //             };
    //         }
    //         return item;
    //     });
    //     console.log("updatedDataEdit", updatedData)
    //     setUploadedItems([...updatedData]);
    //     handleClose()
    // };
    const handleEditSave = () => {
        const updatedData = [...uploadedItem];
        if (indexVal !== null) {
            updatedData[indexVal].name = editName;
            setUploadedItems([...updatedData]);
            setEdit(false)
        }
        setEdit(false)
    };
    const handleDownload = (item) => {
        // Create a blob and initiate download
        const blob = new Blob([editName], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = item.name;
        link.click();
        handleClose()
        setOpenMenu(false)
    };
    return (

        <div style={{ border: "1px solid lightgray", borderRadius: "6px", padding: "20px", height: "100%" }}>
            <div className='detailrow' style={{ display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightgray" }}>
                <p>Name</p>
                <p>Reason Suggested</p>
                <p>Owner</p>
                <p>Location</p>
                <p>size</p>
                <p></p>
            </div>

            {
                filterValue(uploadedItem, searchValue)?.map((item, index) => {
                    return <>
                        <div className='detailrow' style={{ display: 'flex', justifyContent: "space-between", borderBottom: "1px solid lightgray" }} key={index}>
                            <p>
                                {
                                    !edit ? item?.name : edit && indexVal === index ? <input type='text' value={editName} onChange={(e) => setEditName(e.target.value)} /> : item?.name
                                }
                            </p>
                            <p> {formatDate(item.lastModified)}</p>
                            <p>me</p>
                            <p>My drive</p>
                            <p>{formatFileSize(item?.size)}</p>

                            {
                                !edit ? <p className='threedot'><MoreVertIcon sx={{ cursor: 'pointer' }} className='threedot' onClick={(event) => handleClick(event, index, item.name)} />
                                    {
                                        openMenu && <>
                                            <Menu
                                                id="demo-positioned-menu"
                                                aria-labelledby="demo-positioned-button"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left',
                                                }}
                                            >
                                                <MenuItem onClick={() => setEdit(true)}><EditIcon sx={{ pr: 1 }} /> Rename</MenuItem>
                                                <MenuItem onClick={() => handleDelete()}><DeleteIcon sx={{ pr: 1 }} />Move To Thrash</MenuItem>
                                                <MenuItem onClick={handleDownload}><DownloadIcon sx={{ pr: 1 }} />Download</MenuItem>
                                            </Menu>
                                        </>
                                    }

                                </p> : edit && indexVal === index ? <>
                                    <Button variant="contained" color="success" onClick={handleEditSave}>
                                        Save
                                    </Button>
                                </> : null
                            }

                        </div>
                    </>
                })
            }

        </div>
    )
}

export default Files