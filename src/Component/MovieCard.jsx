import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

export default function MediaCard({ob}) {
  const  {Titre , Description , rang , url , id } = ob
  console.log(id)
  return (
    <Link to={`/trailer/${id}`}>
    <Card  sx={{ maxWidth: 445 }}>
      <CardMedia
        sx={{ height: 240 }}
        image= {url}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Titre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Description}
        </Typography>
      </CardContent>
      <CardActions>
           </CardActions>
      <Stack spacing={1}>
  
      <Rating name="read-only" value={rang} readOnly />
    </Stack>
    </Card>
    </Link>
  );
}
