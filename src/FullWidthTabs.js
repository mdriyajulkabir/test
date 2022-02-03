import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import "./FullWidthTabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  <script src="./another.js"></script>;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
        //   indicatorColor="secondary"
        //   textColor="inherit"
        //   variant="fullWidth"
          aria-label="full width tabs example">
          <Tab
            label={
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
            }
            {...a11yProps(0)}
            style={{ backgroundColor: "white" }}
          />
          <Tab
            label={
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
            }
            {...a11yProps(1)}
            style={{ backgroundColor: "white" }}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0} dir={theme.direction}></TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
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
      </SwipeableViews>
    </Box>
  );
}
