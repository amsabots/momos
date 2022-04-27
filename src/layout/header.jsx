/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import { CircularImage } from "../components";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = !!anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "white",
        minHeight: "60px",
        maxHeight: "60px",
        zIndex: 1000,
      }}
      className="d-flex align-items-center px-3 justify-content-between"
    >
      <a href="#">
        {" "}
        <img src={require("../assets/momos.png")} alt="" />
      </a>
      <div>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <CircularImage size={48} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div className="mb-2 px-2">
            <b style={{ color: "#d94939" }}>Momos interview process</b>
          </div>
          <Divider />
          <MenuItem>
            <Avatar /> Sign Out
          </MenuItem>
          <Divider />
          <div className="px-2">
            <small style={{ color: "#d94939" }}>
              With <i className="fa fa-heart mr-1" aria-hidden="true"></i>
              from Kenya
            </small>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export { Header };
