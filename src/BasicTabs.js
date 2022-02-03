import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Grid } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="inherit">
          <Tab   label={
              <>
                <Card
                  className="grid-card"
                  style={{ width: "230px", height: "100%" }}>
                  <CardMedia
                    textColor="inherit"
                    component="img"
                    alt="green iguana"
                    style={{
                      width: "160px",
                      marginTop: "26px",
                      marginLeft: "15px",
                    }}
                    image="https://i.ibb.co/3mZnzhd/Capture.png"
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontSize: "18px",
                        marginLeft: "-60px",
                        fontWeight: "bold",
                      }}
                      className="cloud"
                      gutterBottom
                      variant="h5"
                      component="div">
                      Private Cloud
                    </Typography>
                    <Typography
                      style={{ marginLeft: "-30px" }}
                      variant="body2"
                      color="text.secondary">
                      Use your own servers.
                    </Typography>
                  </CardContent>
                </Card>
              </>
            } {...a11yProps(0)} />
          <Tab label={
              <>
                <Card
                  className="grid-card"
                  style={{ width: "230px", height: "100%" }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    style={{
                      width: "120px",
                      marginTop: "26px",
                      marginLeft: "15px",
                    }}
                    image="https://i.ibb.co/mcVJ0R0/Capturre.png"
                  />
                  <CardContent>
                    <Typography
                      style={{
                        fontSize: "18px",
                        marginLeft: "-60px",
                        fontWeight: "bold",
                      }}
                      className="cloud"
                      variant="h5">
                      Public Cloud
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <span> AWS, Azure, GCP, or other.</span>
                    </Typography>
                  </CardContent>
                </Card>
              </>
            } {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Typography
            style={{ fontWeight: "bold", color: "black", marginLeft: "25px" }}
            variant="h6">
            Choose a cloud provider
          </Typography>
          <Grid className="grid-card-all">
            <Box className="option" >
              <img
                src="https://xpert-careers.com/wp-content/uploads/2021/02/aws1.png"
                alt=""
              /> 
            </Box>
            <Box className="option">
              <img
                src="https://www.freecodecamp.org/news/content/images/2020/10/gcp.png"
                alt=""
              />
            </Box>
            <Box className="option">
              <img
                src="https://blogs.vmware.com/vmworld/files/2021/09/MS-Azure_logo_stacked_c-gray_rgb.png"
                alt=""
              />
            </Box>
            <Box className="option">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqBoM7V5oDoDwWvSGDfi7Df6IsUdjvciCDI7I1sW9VP9whsjx1ebufxmV4obU8jy8fd8&usqp=CAU"
                alt=""
              />
            </Box>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}