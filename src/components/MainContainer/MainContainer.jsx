import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList.jsx";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MainContainer() {
    return (
        <Box
            sx={{ width: '100%', mt: '3rem'}}>
            <Grid container
                  alignItems='start'
                  justifyContent='center'
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 30 }}
            >
                <Grid md={4}>
                    <UserList />
                </Grid>
                <Grid container
                      direction='column'
                      alignItems='center'
                      justifyContent='center'
                      md={8}>
                    <PostCardList />
                </Grid>
            </Grid>
        </Box>
    );
}