import React, { useEffect, useState } from 'react';
import NavCell from '../cells/nav-cell';
import { ChatEngine } from 'react-chat-engine';
import { useAuth } from '../../context/authContext';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const NavBarOrg = () => {

    const { user } = useAuth();
    const history = useHistory();
    const [loading, setLoading] = useState(true); 

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob()

        return new File([data], "userPhoto.jpg", {type : 'image/jpg'})
    }
    
    useEffect(() => {
        if (!user) {
            history.push('/')
            return;
        }
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                'project-id': process.env.REACT_CHAT_PROJECT_ID,
                'user-name': user.email,
                'user-secret': user.uid
            }
        }).then(() => {
            setLoading(false)
        }).catch(() => {
            let formData = new FormData();
            formData.append('email', user.email);
            formData.append('username', user.displayName);
            formData.append('secret', user.uid)

            getFile(user.photoURl)
                .then(avatar => {
                    formData.append('avatar', avatar, avatar.name)

                    axios.post('https://api.chatengine.io/users',
                        formData, {
                        headers: { "private-key": process.env.REACT_CHAT_PRIVATE_KEY }
                    })
                        .then(() => setLoading(false))
                        .catch((err) => console.log(err))
                })
        })
    
    }, [user, history])
    
    // if (!user || loading) return 'Loading...'

    console.log(user)
    return (
        <div className="nav-bar">
            <NavCell history={history} user={user}/>
            <ChatEngine
                height='calc(100vh - 66px)'
                projectID={process.env.REACT_CHAT_PROJECT_ID}
                userName={user.email}
                userSecret={user.uid}
            />
        </div>
    )
}

export default NavBarOrg;