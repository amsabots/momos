import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Music, Video, UserAccount } from "../components";
import { Footer, Header } from "../layout";

const TopSection = ({ data }) => {
  return <div className="w-100"></div>;
};

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
      {value === index && <Box sx={{ p: 1, py: 3 }}>{children}</Box>}
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-100">
      <Header />
      <div
        className="container bg-light wrapper pt-2"
        style={{ marginTop: "60px" }}
      >
        <Box sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", zIndex: 1000 }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="momos"
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab label="Music" {...a11yProps(0)} />
              <Tab label="Videos" {...a11yProps(1)} />
              <Tab label="User Account" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div style={{}}>
            <TabPanel value={value} index={0}>
              <Music />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Video />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <UserAccount />
            </TabPanel>
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
