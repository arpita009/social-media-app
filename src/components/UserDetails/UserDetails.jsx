import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CircularProgress } from "@mui/material";
import useUserDetails from "../../hooks/useUserDetails";

export default function UserDetails() {
    const [user, isLoading] = useUserDetails();

    if (isLoading) {
        return <CircularProgress variant="outlined" />
    } else {
        return (
            <Card sx={{ display: 'flex', mt: '3rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {user.firstName} {user.lastName}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {user.email}
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    image={user.picture}
                    alt={user.firstName}
                />
            </Card>
        );
    }
}