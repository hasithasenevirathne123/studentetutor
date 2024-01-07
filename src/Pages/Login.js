import React from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Button,
  Grid,
  Link,
  Paper,
  colors,
  Card,
} from "@mui/material";
import image from "./Group 72.png";
import { red } from "@mui/material/colors";
import { Navigate } from "react-router";

const Login = () => {
  const handleSubmit = () => {};

  const clickAlert = () => {
    
    alert("Hello")

  };

  return (
    <>
      <Grid container m={2}>
      <Grid container>
              <Grid item xs>
                <Typography variant="h3" style={{fontFamily:"Plus Jakarta Sans"}}>etutor</Typography>
              </Grid>
              <Grid item>
              <Button
            className="btn-reg"
            style={{ backgroundColor: "#d96767" }}
            variant="contained"
          >
            Register
          </Button>
              </Grid>
            </Grid>
      </Grid>
      <Grid container component="main">
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img style={{ width: "100%" }} src={image} />
        </Grid>

        <Grid
          style={{ height: "40rem", marginTop: "5rem" }}
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          component={Paper}
          squarero
          elevation={2}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              style={{ fontWeight: "bold", fontFamily: "Plus Jakarta Sans" }}
              variant="h3"
            >
              Log In
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                style={{ fontFamily: "Plus Jakarta Sans" }}
                margin="normal"
                required
                fullWidth
                id="uname"
                label="Username"
                name="username"
                autoFocus
              ></TextField>
              <TextField
                style={{ fontFamily: "Plus Jakarta Sans"}}
                margin="normal"
                required
                fullWidth
                id="pass"
                label="Password"
                name="Password"
                autoFocus
              ></TextField>
              <FormControlLabel
                style={{ fontFamily: "Plus Jakarta Sans",justifyContent:"space-between"}}
                control={<Checkbox />}
                label="Remember Me"
              />

              <Link href="#" variant="body2" style={{ textDecoration: "none", justifyContent:"space-between", color:"#d96767", fontWeight:"bolder", marginLeft:"50%"}}>
                Forgot Password?
              </Link>

              <Button
                fullWidth
                style={{
                  backgroundColor: "#d96767",
                  fontFamily: "Plus Jakarta Sans",
                }}
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                LogIn
              </Button>
              <label
                className="custom-control-form"
                style={{
                  fontWeight: "600",
                  justifyContent: "center",
                  color: "black",
                  fontFamily: "Plus Jakarta Sans",
                  marginLeft:"35%"
                }}
              >
                Don't have an account?
              </label>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "bolder",
                  color: "#d96767",
                }}
              >
                Register
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;

{
  /* <Grid item 
      xs={false} 
      sm={4} 
      md={7} 
      sx={{backgroundImage: ,
      backgroundRepeat:"no-repeat",
      backgroundColor:(t)=>t.palette.mode === 'light' ? t.palette.grey[50] : t.palette[900],
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}/> */
}
{
  /* <div className=''>
      <img style={{height:'150vh', width:'50%', marginLeft:'5px'}} src={image}/>
   </div> */
}

{
  /* <Grid container>
                 <Grid item lg={6} md={6} sm={12} xs={12}>
                 
             </Grid>
                 </Grid> */
}
