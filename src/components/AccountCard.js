import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, CardHeader, Avatar, Modal, Box, Grid } from '@mui/material';
import PlantCard from './PlantCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '4px',
  boxShadow: 24,
  p: 4,
};

const plantData = [
  {
    image: "https://gardenerspath.com/wp-content/uploads/2021/07/How-to-Grow-Buttercrunch-Lettuce-Cover.jpg",
  title: "Lettuce"
  },
  {
    image: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/article_1200_800_fallback/public/2022-05/tomatoes%C2%A9iStock.jpg?itok=zSwUIa5E",
  title: "Tomato"
  },
  {
    image: "https://gardenerspath.com/wp-content/uploads/2021/05/Types-of-Cucumbers-FB.jpg",
    title: "Cucumbers"
  },
]

const AccountCard = (props) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '10px'}}>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
            <Avatar src={props.image} sx={{width: 40, height: 40}}/>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {props.title}
            </Typography>
            </div>
            <Button onClick={handleClose}>Close</Button>
          </div>
            <Grid container spacing={2}>
              {
                plantData.map((plantInfo) => {
                  return <Grid item> <PlantCard image={plantInfo.image} title={plantInfo.title} plantName={plantInfo.title.toLowerCase()}></PlantCard> </Grid>
                })
              }
            </Grid>
        </Box>
      </Modal>

    <Card sx={{ width: 350, maxHeight: 150 }}>
      <CardActionArea onClick={handleOpen}>
      {/* <CardMedia
        sx={{ height: 140 }}
        image={props.image}
        title={props.title}
      /> */}
      <CardHeader
        avatar={
            <Avatar src={props.image} sx={{width: 56, height: 56}}/>
        }
        title={props.title}
        subheader={props.tier}
      />
      </CardActionArea>
    </Card>
    </>
  );
}

export default AccountCard