import logo from './logo.svg';
import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Tab, Tabs, Box, Typography, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import { faLeaf, faPen} from '@fortawesome/free-solid-svg-icons';
import PlantCard from './components/PlantCard'

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const plantMetadata = [
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
    {
      image: "https://parade.com/.image/t_share/MTkwNTgxNDY1MzcxMTkxMTY0/different-types-of-apples-jpg.jpg",
      title: "Apples"
    },
    {
      image: "https://hips.hearstapps.com/hmg-prod/images/766/everything-you-need-to-know-about-blackberries-main-1499890002.jpg?crop=1xw:0.884xh;center,top&resize=1200:*",
      title: "Blackberries"
    },
    {
      image: "https://assets.bonappetit.com/photos/5cfa7e1fdf8e95e1e62ca6a3/5:4/w_3515,h_2812,c_limit/Basically-Strawberry-Shortcake-Strawberries.jpg",
      title: "Strawberries"
    },
    {
      image: "https://thekitchencommunity.org/wp-content/uploads/2021/06/Green-chilies-1200x900.jpg",
      title: "Chilies"
    },
    {
      image: "https://www.bhg.com/thmb/8ql9jldzLGPruyLpmOWWWmR3UJQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/types-of-oranges-4d6a86c11fe14668ad798774e16697f8.jpg",
      title: "Oranges"
    }
  ]

  return (
    <div className="App">
      <header className="topnav">
        <a id='logo' className="active" href="#home">FERT<FontAwesomeIcon icon={faLeaf} style={{ fontSize: "32px" }}></FontAwesomeIcon> </a>
      </header>

      <div class="main" style={{display:"flex"}}>
        <div class="profile" style={{ width: "20%" }}>
          <div style={{ aspectRatio: 1, overflow: "cover", width: "100%" }}>
            <img src="https://vcdn1-giaitri.vnecdn.net/2020/02/03/269-1580697484-1580702498-9721-1580721326.png?w=680&h=0&q=100&dpr=1&fit=crop&s=3QUgr8q5BGc2tNyRMHyz3A" style={{ boxSizing: "border-box", objectFit: "cover", borderRadius: "50%", width: "100%", height: "100%", padding: "10%" }} />
          </div>
          <div className='profileStatus'>
            <h1 className='name'>Josh Pham</h1>
            <h2>[New Ferter]</h2>
          </div>
          <h3>
            Location: 24060<br />
            Food Planter<br />
            Price Range: $10-$40<br />
            EDIT<FontAwesomeIcon icon={faPen} style={{ fontSize: "18px" }}></FontAwesomeIcon>
          </h3>
          <Tabs orientation='vertical' value={value} onChange={handleChange}>
            <LinkTab label="My Plants" />
            <LinkTab label="My Plant Circle" />
          </Tabs>
        </div>

        <TabPanel value={value} index={0} style={{width:'80%'}}>
          <div class="feed" >
            <Grid container spacing={2}>
              {
                plantMetadata.map((plantInfo) => {
                  return <Grid item> <PlantCard image={plantInfo.image} title={plantInfo.title}></PlantCard> </Grid>
                })
              }
            </Grid>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1} style={{width: '80%'}}>
          Item Two
        </TabPanel>


      </div>
    </div>
  );
}

export default App;
