import React from 'react'
import LogOutTab from '../atoms/logout-tab';
import LogoTab from '../atoms/logoTab';

const NavCell = (props) => {

    return ( 
        <div className="nav-bar">
            <LogoTab/>
            <LogOutTab history={props.history}/>
        </div>
    )
}

export default NavCell;