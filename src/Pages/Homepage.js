import React, { useState } from "react";
import {
  Typography,
  Button,
  Box,
  IconButton,
  Grid,
  Card,
  Menu,
  MenuItem,
} from "@mui/material";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import MuiAppBar from "@mui/material/AppBar";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import PaymentsIcon from "@mui/icons-material/Payments";
import HomeIcon from "@mui/icons-material/Home";
import ClassIcon from "@mui/icons-material/Class";
import LocalLibraryRoundedIcon from "@mui/icons-material/LocalLibraryRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ButtonBase from "@mui/material/ButtonBase";
import Paper from "@mui/material/Paper";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import image1 from "./assets/1.jpg";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Toolbar />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText style={{ fontFamily: "Plus Jakarta Sans" }}>
            Home
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText style={{ fontFamily: "Plus Jakarta Sans" }}>
            Classes
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <LocalLibraryRoundedIcon />
          </ListItemIcon>
          <ListItemText style={{ fontFamily: "Plus Jakarta Sans" }}>
            Teachers
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PaymentsIcon />
          </ListItemIcon>
          <ListItemText style={{ fontFamily: "Plus Jakarta Sans" }}>
            Payments
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsRoundedIcon />
          </ListItemIcon>
          <ListItemText style={{ fontFamily: "Plus Jakarta Sans" }}>
            Settings
          </ListItemText>
        </ListItemButton>
      </List>
    </>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchor, setAnchor] = useState(null);
  
  const handleClose = () => {
    setAnchor(null);
  };

  const handleMenu = (e) => {
    setAnchor(e.currenTarget);
  };

  return (
    <Box sx={{ display: "flex" }} s>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "white" }}
        position="static"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography
            sx={{ flexGrow: 1 }}
            variant="h4"
            style={{
              color: "black",
              fontWeight: "bolder",
              marginLeft: "10px",
              marginBottom: "2rem",
            }}
          >
            Home
          </Typography> */}

          {/* <Box>
            <Stack direction="row" spacing={2}>
              <Button>
                <Avatar
                  alt="Travis Howard"
                  src={image1}
                  sx={{ width: 50, height: 50 }}
                  variant="dot"
                />
              </Button>
            </Stack>
            <IconButton size="larger" onClick={handleMenu}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              id="menu-wrapper"
              anchorE1={anchor}
              keepMounted
              open={Boolean(anchor)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Log out</MenuItem>
            </Menu>
          </Box> */}
        </Toolbar>

        <Grid container>
          {/* <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            style={{ backgroundColor: "green" }}
          ></Grid> */}
        </Grid>

        <Grid container component="main">
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={6}
           
          >
            <Grid>
              <Card
                sx={{ maxWidth: 500, maxHeight: 500 }}
                style={{ backgroundColor: "white" }}
              >
                <CardContent style={{ marginLeft: "0px" }}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography variant="h5" style={{ fontWeight: "bolder" }}>
                        Chemistry
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label>Started at : </label>
                      <label style={{ fontSize: "30px" }}>15:30PM</label>
                    </Grid>
                  </Grid>
                  <Typography gutterBottom variant="h7" component="div">
                    Grade 12
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    style={{
                      borderRadius: "36px",
                      height: "33px",
                      width: "106px",
                    }}
                  >
                    Theory
                  </Button>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "bolder" }}
                      >
                        By Shiran Galewela
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <Button
                        style={{
                          backgroundColor: "#d96767",
                          borderRadius: "12px",
                          height: "61px",
                          width: "182px",
                          label: "Join Now",
                        }}
                        variant="contained"
                        endIcon={<ArrowRightAltIcon />}
                      >
                        Join Now
                      </Button>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>

            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{ flexGrow: 1 }}
                  variant="h5"
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    marginTop: "5rem",
                    fontSize: "24px",
                  }}
                >
                  Up Coming Classes
                </Typography>
              </Grid>

              {/* <Grid item xs={6}></Grid> */}
            </Grid>
            <Grid>
              <Card
                sx={{ maxWidth: 350, maxHeight: 700 }}
                style={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
              >
                <CardContent style={{ marginLeft: "0px" }}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontWeight: "bolder", fontSize: "16px" }}
                      >
                        Physics
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          fontSize: "16px",
                        }}
                      >
                        23 Feb
                      </label>
                    </Grid>
                  </Grid>

                  <Typography gutterBottom variant="h7" component="div">
                    Grade 13
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "bolder" }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label>4.00PM - 6.00PM</label>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>

              <Card
                sx={{ maxWidth: 350, maxHeight: 700 }}
                style={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
              >
                <CardContent style={{ marginLeft: "0px" }}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontWeight: "bolder", fontSize: "16px" }}
                      >
                        Chemistry
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          fontSize: "16px",
                        }}
                      >
                        23 Feb
                      </label>
                    </Grid>
                  </Grid>

                  <Typography gutterBottom variant="h7" component="div">
                    Grade 13
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "bolder" }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label>4.00PM - 6.00PM</label>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>

              <Card
                sx={{ maxWidth: 350, maxHeight: 700 }}
                style={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
              >
                <CardContent style={{ marginLeft: "0px" }}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontWeight: "bolder", fontSize: "16px" }}
                      >
                        Biology
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          fontSize: "16px",
                        }}
                      >
                        23 Feb
                      </label>
                    </Grid>
                  </Grid>

                  <Typography gutterBottom variant="h7" component="div">
                    Grade 13
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "bolder" }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label>4.00PM - 6.00PM</label>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} style={{ marginLeft: "" }}>
                <Grid container>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Stack direction="row" spacing={2}>
                      <Avatar alt="Remy Sharp" src={Image} />
                      <Avatar alt="Travis Howard" src={Image} />
                      <Avatar alt="Cindy Baker" src={Image} />
                    </Stack>
                  </Grid>

                  <Grid
                    item
                    lg={6}
                    md={6}
                    sm={12}
                    xs={12}
                    style={{ textAlign: "end" }}
                  ></Grid>
                </Grid>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  sx={{ flexGrow: 1 }}
                  variant="h5"
                  style={{
                    color: "black",
                    fontWeight: "bolder",
                    marginTop: "5rem",
                    fontSize: "24px",
                  }}
                >
                  Up Coming Classes
                </Typography>
              </Grid>

              {/* <Grid item xs={6}></Grid> */}
            </Grid>
            <Grid>
              <Card
                sx={{ maxWidth: 350, maxHeight: 700 }}
                style={{
                  backgroundColor: "#B4DEF0",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
              >
                <CardContent style={{ marginLeft: "0px" }}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontWeight: "bolder", fontSize: "16px" }}
                      >
                        Physics
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          fontSize: "16px",
                        }}
                      >
                        23 Feb
                      </label>
                    </Grid>
                  </Grid>

                  <Typography gutterBottom variant="h7" component="div">
                    Grade 13
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "bolder" }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label>4.00PM - 6.00PM</label>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>

              <Card
                sx={{ maxWidth: 350, maxHeight: 700 }}
                style={{
                  backgroundColor: "#F9E788",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
              >
                <CardContent style={{ marginLeft: "0px" }}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontWeight: "bolder", fontSize: "16px" }}
                      >
                        Chemistry
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          fontSize: "16px",
                        }}
                      >
                        23 Feb
                      </label>
                    </Grid>
                  </Grid>

                  <Typography gutterBottom variant="h7" component="div">
                    Grade 13
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "bolder" }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label>4.00PM - 6.00PM</label>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>

              <Card
                sx={{ maxWidth: 350, maxHeight: 700 }}
                style={{
                  backgroundColor:"#F6A695",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
              >
                <CardContent style={{ marginLeft: "0px", }}>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontWeight: "bolder", fontSize: "16px" }}
                      >
                        Combined
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label
                        style={{
                          fontSize: "30px",
                          fontWeight: "bolder",
                          fontSize: "16px",
                        }}
                      >
                        23 Feb
                      </label>
                    </Grid>
                  </Grid>

                  <Typography gutterBottom variant="h7" component="div">
                    Grade 13
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography
                        style={{ fontSize: "12px", fontWeight: "bolder" }}
                      >
                        Binura Binduhewa
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      sm={12}
                      xs={12}
                      style={{ textAlign: "end" }}
                    >
                      <label>4.00PM - 6.00PM</label>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          {/* <Grid item lg={6} md={6} sm={12} xs={12}>
          
          <Stack direction="row" spacing={2}>
           
              <Avatar alt="Travis Howard" src={image1} sx={{ width: 50, height: 50 }} variant="dot" />
              <Avatar alt="Travis Howard" src={image1} sx={{ width: 50, height: 50 }} variant="dot" />
              <Avatar alt="Travis Howard" src={image1} sx={{ width: 50, height: 50 }} variant="dot" />
              
           
            </Stack>
          </Grid> */}
        </Grid>

      </AppBar>

      {/* SideBar */}
      <Grid container>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>

          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Grid>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;

{
  /* <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src="/" />
              <Avatar alt="Travis Howard" src={image1} sx={{ width: 100, height: 100 }} />
              <Avatar alt="Travis Howard" src={image1} sx={{ width: 100, height: 100 }} />
              <Avatar alt="Travis Howard" src={image1} sx={{ width: 100, height: 100 }} />
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Stack>
          </Grid> */
}



