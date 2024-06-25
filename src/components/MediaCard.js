import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MediaCard({recipe}) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={recipe.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {recipe.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Typography variant="h6">Meal type:</Typography>
                    {recipe.mealType}
                    <Typography variant="h6">Calories:</Typography>
                    {recipe.calories}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={recipe.url}>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default MediaCard