import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useState, useEffect} from "react";
import axios from "axios";

export default function UserList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://dummyapi.io/data/v1/user', {
            headers: {'app-id': import.meta.env.VITE_APP_ID}
        }).then(response => setUsers(response.data.data))
    }, []);


    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {users.map((user, idx) => {
                return (
                    <ListItem
                        key={user.id}
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°${idx + 1}`}
                                    src={user.picture}
                                />
                            </ListItemAvatar>
                            <ListItemText id={user.id} primary={user.firstName + ' ' + user.lastName} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}