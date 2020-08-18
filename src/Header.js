import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon
                    className="header__icon"
                    fontSize="large"
                />
            </IconButton>
            <img
                className="header__logo"
                src="https://t4.ftcdn.net/jpg/01/20/40/47/240_F_120404797_aorZEYTkXpb4sjTgWrxirobo0xHxk61B.jpg"
                alt="logo"
            />
            <IconButton>
            <ForumIcon
                className="header__icon"
                fontSize="large"
            />
            </IconButton>
        </div>
    )
}

export default Header