import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {useState} from "react";

export default function PostCard({content, author, image, publishDate}) {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <Card sx={{ maxWidth: 345, mb:'2rem' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        {author.firstName.substring(0,1)}
                    </Avatar>
                }
                title={author.firstName + ' ' + author.lastName}
                subheader={publishDate}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="image"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"
                            onClick={() => setIsLiked(!isLiked)}>
                    {isLiked ? <FavoriteIcon sx={{color: purple[800]}}/> :
                        <FavoriteBorderIcon />}
                </IconButton>
            </CardActions>
        </Card>
    );
}