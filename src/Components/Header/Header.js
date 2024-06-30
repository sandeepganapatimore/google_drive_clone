import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header({ searchValue, setSearchValue }) {
    return (
        <div class="header" >
            <div className="header_logo">
                <img src="//ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" />
                <span>Drive</span>
            </div>
            <div className="header_search">
                <SearchIcon />
                <input type='text' placeholder='Search in Drive' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <FormatAlignCenterIcon />
            </div>
            <div className="header_icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon sx={{ ml: 2 }} />
                </span>
                <span>
                    <AppsIcon />
                    <AccountCircleIcon sx={{ ml: 2 }} />
                </span>
            </div>
        </div>
    )
}
export default Header