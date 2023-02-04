import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Modal, Box, Slider } from '@mui/material'
import Typography from '@mui/material/Typography';
import ModalView from './ModalView';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';

const zoomOutProperties = {
  duration: 200,
  transitionDuration: 0,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const images = [
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot1.jpg'
  },
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot2.jpg'
  },
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot3.jpg'
  },
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot4.jpg'
  },
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot5.jpg'
  },
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot6.jpg'
  },
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot7.jpg'
  },
  {
    src: process.env.PUBLIC_URL + '/tomato_timelapse/snapshot8.jpg'
  }
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};


const PlantCard = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Instructions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ maxHeight: "80%" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Time Lapse
          </Typography>
          <Zoom {...zoomOutProperties}>
            {images.map((img, index) => (
              <img key={index} src={img.src} style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
            ))}
          </Zoom>
          <Button onClick={handleClose2}>Close</Button>
        </Box>

      </Modal>

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
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>Planting Instructions</Button>
          <Button size="small" onClick={handleOpen2}>Time Lapse</Button>
        </CardActions>

      </Card>

    </>
  );
}

export default PlantCard;