import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const AccountCard = (props) => {
    return (
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={props.image}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.tier}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View Profile</Button>
          </CardActions>
        </Card>
      );
}

export default AccountCard