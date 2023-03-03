import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Tab, Tabs, Box, Typography, Grid, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import { faLeaf, faPen } from '@fortawesome/free-solid-svg-icons';
import PlantCard from './components/PlantCard'
import AccountCard from './components/AccountCard';
import { Bubble } from 'react-bubble-ui-v2';
import BubbleChildComponent from './components/BubbleChildComponent';
import DummyBubble from './components/DummyBubble';
import { useRef, useState } from 'react';
import './plant.scss'




function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = React.useState(0);
  const [editFormOpen, setEditFormOpen] = React.useState(false);
  const zipcode = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const buttonStyle = {
    color: 'var(--primary-color)',
  }
  const tabStyle = {
    color: 'var(--primary-color)',
    fontWeight: 'bold'
  }
  const handleEditFormOpen = () => setEditFormOpen(true);
  const handleEditFormClose = () => setEditFormOpen(false);

  const [temperateData, setTemperateData] = useState(null)
  // submit for edit form
  const handleSubmit = (event) => {
    event.preventDefault();
    if (zipcode.current.value.length == 0) {
      setTemperateData(null)
      return
    }

    fetch(`https://phzmapi.org/${zipcode.current.value}.json`)
      .then(response => response.json())
      .then(data => {
        // const tempArr = []
        // Object.keys(data).forEach(key => tempArr.push({name: key, value: data[key]}))

        const temp = Object.entries(data);
        temp.splice(1, 1)
        setTemperateData(temp);

        console.log(temperateData);

        // console.log(temp);

      });

    // handleEditFormClose();
  }
  const plantMetadata = [
    {
      image: "https://gardenerspath.com/wp-content/uploads/2021/07/How-to-Grow-Buttercrunch-Lettuce-Cover.jpg",
      title: "Lettuce",
      firstPlant: true,
    },
    {
      image: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/article_1200_800_fallback/public/2022-05/tomatoes%C2%A9iStock.jpg?itok=zSwUIa5E",
      title: "Tomato",
      firstPlant: false,
    },
    {
      image: "https://gardenerspath.com/wp-content/uploads/2021/05/Types-of-Cucumbers-FB.jpg",
      title: "Cucumbers",
      firstPlant: false,
    },
    {
      image: "https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg",
      title: "Apples",
      firstPlant: false,
    },
    {
      image: "https://hips.hearstapps.com/hmg-prod/images/766/everything-you-need-to-know-about-blackberries-main-1499890002.jpg?crop=1xw:0.884xh;center,top&resize=1200:*",
      title: "Blackberries",
      firstPlant: false,
    },
    {
      image: "https://assets.bonappetit.com/photos/5cfa7e1fdf8e95e1e62ca6a3/5:4/w_3515,h_2812,c_limit/Basically-Strawberry-Shortcake-Strawberries.jpg",
      title: "Strawberries",
      firstPlant: false,
    },
    {
      image: "https://thekitchencommunity.org/wp-content/uploads/2021/06/Green-chilies-1200x900.jpg",
      title: "Chilies",
      firstPlant: false,
    },
    {
      image: "https://www.bhg.com/thmb/8ql9jldzLGPruyLpmOWWWmR3UJQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-oranges-4d6a86c11fe14668ad798774e16697f8.jpg",
      title: "Oranges",
      firstPlant: false,
    }
  ]

  const userMetaData = [
    {
      image: "https://vcdn1-giaitri.vnecdn.net/2020/02/03/269-1580697484-1580702498-9721-1580721326.png?w=680&h=0&q=100&dpr=1&fit=crop&s=3QUgr8q5BGc2tNyRMHyz3A",
      title: "Josh Phan",
      tier: "New Ferter"
    },
    {
      image: "https://images.pexels.com/photos/15300872/pexels-photo-15300872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Eva Smith",
      tier: "Expert Ferter"
    },
    {
      image: "https://image1.masterfile.com/getImage/NjMwLTA2NzIzNDYyZW4uMDAwMDAwMDA=ANy15r/630-06723462en_Masterfile.jpg",
      title: "Isha Patel",
      tier: "New Ferter"
    },
    {
      image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/1-asian-woman-plant-a-flower-in-her-garden-anek-suwannaphoom.jpg",
      title: "Emily Su",
      tier: "Intermediate Ferter"
    },
    {
      image: "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/methode/2020/05/13/886958b4-8dc3-11ea-a674-527cfdef49ee_image_hires_175914.jpg?itok=eHH6J59Z&v=1589363959",
      title: "Grace Cho",
      tier: "New Ferter"
    },
    {
      image: "https://thumbs.dreamstime.com/b/asian-man-gardener-holding-small-houseplant-using-spray-bottle-watering-plants-to-taking-care-plants-asian-man-228381720.jpg",
      title: "Mark Miller",
      tier: "Expert Ferter"
    },
    {
      image: "https://media.istockphoto.com/id/1323140489/photo/confident-young-asian-male-florist-owner-of-small-business-flower-shop-holding-potted-plant.jpg?s=612x612&w=0&k=20&c=ZniQ7nD7KC70Y_ihu3ENhP_CMqwZFIUoF-Uwn_kMSno=",
      title: "Ryan Hughes",
      tier: "Intermediate Ferter"
    },
    {
      image: "https://www.shutterstock.com/image-photo/young-asian-woman-holding-plant-260nw-1619910811.jpg",
      title: "Lia Park",
      tier: "Expert Ferter"
    },
    {
      image: "https://media.istockphoto.com/id/1248160497/photo/asian-woman-gardener-spraying-of-water-on-the-plant-in-the-garden-at-home.jpg?s=612x612&w=0&k=20&c=_yRYHnq-dw2sOPL5gVSyp8ARNDH6e0VoSTs2CMy_qAE=",
      title: "Ava Vasquez",
      tier: "New Ferter"
    }
  ]

  function sendMessage(){
  // const client = twilio(accountSid, authToken);

  // client.messages
  //   .create({
  //     body: 'Hello from twilio-node',
  //     to: '+18048730659', // Text this number
  //     from: '+18443225674', // From a valid Twilio number
  //   })
  //     .then((message) => console.log(message.sid));
    }

  function formatText(text) {
    text = text.charAt(0).toUpperCase() + text.slice(1);
    return text.split('_').join(' ');
  }

  return (
    <div className="App">
      <header className="topnav">
        <a id='logo' className="active" href="#home">

          FERT
          <FontAwesomeIcon icon={faLeaf} style={{ fontSize: "32px" }}>
          </FontAwesomeIcon>
        </a>
      </header>

      <div class="main" style={{ display: "flex" }}>
        <div class="profile" style={{ width: "20%" }}>
          <div style={{ aspectRatio: 1, overflow: "cover", width: "100%" }}>
            <img src="https://vcdn1-giaitri.vnecdn.net/2020/02/03/269-1580697484-1580702498-9721-1580721326.png?w=680&h=0&q=100&dpr=1&fit=crop&s=3QUgr8q5BGc2tNyRMHyz3A" style={{ boxSizing: "border-box", objectFit: "cover", borderRadius: "50%", width: "100%", height: "100%", padding: "10%" }} />
          </div>
          <div className='profileStatus'>
            <h1 className='name'>Josh Pham</h1>
            <h2 style={{ fontWeight: '500' }}>New Ferter</h2>
          </div>
          <h3 style={{ fontWeight: '400' }}>
            Location: 24060<br />
            Food Planter<br />
            Price Range: $10-$40<br />
          </h3>
          <Button variant="contained" style={{ color: 'white' }} disableElevation disableRipple disableFocusRipple onClick={handleEditFormOpen}>
            Find Temperate Zone
          </Button>


          <Dialog open={editFormOpen} onClose={handleEditFormClose}>
            <DialogTitle>Find Temperate Zone based on Zipcode</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Enter your zipcode
              </DialogContentText>

              <TextField
                autoFocus
                margin="dense"
                id="zipcode"
                label="Zipcode"
                type="text" pattern="[0-9]{5}"
                fullWidth
                variant="standard"
                inputRef={zipcode}
              />

              {temperateData ? temperateData.map((item) => {
                return <Typography>{formatText(item[0])}: {formatText(item[1])} {item[0] === "temperature_range" ? "°F" : ""}</Typography>
              }) : ""}
              {/* Temperate Zone: {temperateData} */}


            </DialogContent>
            <DialogActions>
              <Button style={buttonStyle} onClick={handleEditFormClose}>Cancel</Button>
              <Button style={buttonStyle} onClick={handleSubmit}>Search</Button>
            </DialogActions>
          </Dialog>

          <Tabs orientation='vertical' indicatorColor='secondary' style={{ marginTop: '20px' }} value={value} onChange={handleChange}>
            <LinkTab style={tabStyle} label="My Plants" />
            <LinkTab style={tabStyle} label="My Plant Circle" />
          </Tabs>
        </div>

        <TabPanel value={value} index={0} style={{ width: '80%' }}>
          <div class="feed" >
            <Grid container spacing={2} alignItems='stretched'>
              {
                plantMetadata.map((plantInfo) => {
                  return <Grid item> <PlantCard image={plantInfo.image} title={plantInfo.title} firstPlant={plantInfo.firstPlant} plantName={plantInfo.title.toLowerCase()}></PlantCard> </Grid>
                })
              }
            </Grid>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ width: '80%', height: "100%" }}>
          <div class="feed">
            <Grid container spacing={2}>
              {
                userMetaData.map((userInfo) => {
                  return <Grid item > <AccountCard image={userInfo.image} title={userInfo.title} tier={userInfo.tier}></AccountCard> </Grid>
                })
              }
            </Grid>
          </div>
        </TabPanel>
      </div>
      <footer>
        <div class="wrap" style={{height: "0px"}}>
          <div class="base"  style={{transform: "translate(500%, 0%)"}}>
            <div class="flowerpot"></div>
            <div class="blade blade-center"></div>
            <div class="blade blade-left-s"></div>
            <div class="blade blade-right-s"></div>
            <div class="blade blade-left-l"></div>
            <div class="blade blade-right-l"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
