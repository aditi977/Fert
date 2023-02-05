import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Modal, Box, Slider } from '@mui/material'
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import ModalView from './ModalView';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import AssignmentIcon from '@mui/icons-material/Assignment';

const zoomOutProperties = {
  duration: 200,
  transitionDuration: 0,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const buttonStyles = {
  color: 'var(--primary-color)',
  textTransform: 'capitalize',
}


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


const PlantCard = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const images = [
    {
      src: `/${props.plantName}_timelapse/snapshot1.jpg`
    },
    {
      src: `/${props.plantName}_timelapse/snapshot2.jpg`
    },
    {
      src: `/${props.plantName}_timelapse/snapshot3.jpg`
    },
    {
      src: `/${props.plantName}_timelapse/snapshot4.jpg`
    },
    {
      src: `/${props.plantName}_timelapse/snapshot5.jpg`
    },
    {
      src: `/${props.plantName}_timelapse/snapshot6.jpg`
    },
    {
      src: `/${props.plantName}_timelapse/snapshot7.jpg`
    },
    {
      src: `/${props.plantName}_timelapse/snapshot8.jpg`
    }
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={style}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Instructions
            </Typography>
            <Button onClick={handleClose}>Close</Button>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Water it 3 times a week.
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ borderRadius: "20%" }}
      >
        <Box sx={style} style={{ maxHeight: "80%" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Time Lapse
            </Typography>
            <Button onClick={handleClose2}>Close</Button>
          </div>
          <Zoom {...zoomOutProperties}>
            {images.map((img, index) => (
              <img key={index} src={process.env.PUBLIC_URL + img.src} style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
            ))}
          </Zoom>
        </Box>

      </Modal>

      <Card sx={{ width: 200 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{ fontFamily: "Open Sans", fontWeight: "bold" }}>
            {props.title}
          </Typography>
        </CardContent>
        <CardActions style={{display: 'flex', justifyContent: "space-between"}}>
            <IconButton style={buttonStyles} pill onClick={handleOpen}><AssignmentIcon /></IconButton>
            <IconButton style={buttonStyles} onClick={handleOpen2}><TimelapseIcon /></IconButton>
        </CardActions>

      </Card>

    </>
  );
}

export default PlantCard;