import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import PostCardList from "../PostCardList/PostCardList";
import UserList from "../UserList/UserList.jsx";

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