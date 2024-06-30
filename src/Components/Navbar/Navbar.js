import React, { useState } from 'react'
import './Navbar.css'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CloudQueueOutlinedIcon from '@mui/icons-material/CloudQueueOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SimpleModal from './Modal';

function Navbar({ uploadedItem, setUploadedItems, handleAddItems }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className='sidebar'>
                <div className='sidebar_btn' style={{ cursor: 'pointer' }}>
                    <button style={{ cursor: "pointer" }} type="button" role='button' tabIndex={0} className='button' onClick={() => setOpen(true)}>
                        <span class="a-ec-Gd-zc-c"><svg class="Q6yead QJZfhe " width="24" height="24" viewBox="0 0 24 24" focusable="false"><path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path></svg></span>
                        <span style={{ marginLeft: "4px" }}>New</span>
                    </button>
                    {
                        open && <SimpleModal open={open} setOpen={setOpen} uploadedItem={uploadedItem} setUploadedItems={setUploadedItems} handleAddItems={handleAddItems} />
                    }
                </div>
                <div className='sidebar_options'>
                    <div className='sidebar_option sidebar_option-active'>
                        <HomeOutlinedIcon />
                        <span>Home</span>
                    </div>
                </div>
                <div className='sidebar_options'>
                    <div className='sidebar_option'>
                        <MobileScreenShareIcon />
                        <span>My Drive</span>
                    </div>
                </div>
                <div className='sidebar_options'>
                    <div className='sidebar_option'>
                        <DevicesIcon />
                        <span>Computers</span>
                    </div>
                </div>
                <div className='sidebar_options'>
                    <div className='sidebar_option'>
                        <PeopleAltOutlinedIcon />
                        <span>Shared with me</span>
                    </div>
                </div>
                <div className='sidebar_options'>
                    <div className='sidebar_option'>
                        <QueryBuilderOutlinedIcon />
                        <span>Recent</span>
                    </div>
                </div>
                <div className='sidebar_options'>
                    <div className='sidebar_option'>
                        <StarBorderOutlinedIcon />
                        <span>Starred</span>
                    </div>
                </div>

                <div className='sidebar_options'>
                    <div className='sidebar_option'>
                        <DeleteOutlineOutlinedIcon />
                        <span>Trash</span>
                    </div>
                </div>

                <hr />
                <div className='sidebar_options'>
                    <div className='sidebar_option'>
                        <CloudQueueOutlinedIcon />
                        <span>Storage</span>
                    </div>
                    <div className='progress_bar' >
                        <progress size="tiny" value={50} max={100} />
                        <span style={{ display: "flex" }}>6.45 GB of 15GB used</span>
                    </div>
                    <div className='sidebar_option'>
                        <button className='storagebutton'>
                            Get more storage
                        </button>
                    </div>
                </div>
            </div >

        </>
    )
}

export default Navbar