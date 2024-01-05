import React from 'react'
import {Box, Checkbox, FormControlLabel, TextField, Typography,Button,Grid,Link, Paper, colors} from '@mui/material';
import image from './Group 72.png'
import { red } from '@mui/material/colors';
const Login = () => {
    const handleSubmit =() =>{
    }
  return (
    <>
     <Grid container m={2}>
<Grid  item lg={6} md={6} sm={12} xs={12}>X</Grid>
<Grid  item lg={6} md={6} sm={12} xs={12}>Y</Grid>
</Grid>
    <Grid container component='main'  sx={{height:"50vh"}}>
      {/* <Grid item 
      xs={false} 
      sm={4} 
      md={7} 
      sx={{backgroundImage: ,
      backgroundRepeat:"no-repeat",
      backgroundColor:(t)=>t.palette.mode === 'light' ? t.palette.grey[50] : t.palette[900],
      backgroundSize:'cover',
      backgroundPosition:'center'
    }}/> */}
   {/* <div className=''>
      <img style={{height:'150vh', width:'50%', marginLeft:'5px'}} src={image}/>
   </div> */}
   <Grid item lg={6} md={6} sm={12} xs={12}>
    <img src={image}/>
   </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12} component={Paper} square elevation={3}>
           <Box sx={{ my:8, mx:4,  display:'flex', flexDirection:"column", alignItems:"center"}}>
              <Typography style={{fontWeight:'bold',}} variant='h3'>Log In</Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt:1}}>
                      <TextField margin='normal' required fullWidth id='uname' label="Username" name='username' autoFocus></TextField>
                      <TextField margin='normal' required fullWidth id='pass' label="Password" name='Password' autoFocus></TextField>
                      <FormControlLabel control={<Checkbox/>} label="Remember me"/>
                      <Button fullWidth type="submit" variant="contained" sx={{mt:3,mb:2}}>LogIn</Button>
                  <Grid container>
                 <Grid item xs>
              <Link href="#" variant="body2">Forgot Me</Link>
             </Grid>
           </Grid>
       </Box>
    </Box>
  </Grid>
</Grid>

{/* <Grid container color='red' m={2}>
<Grid  item lg={6} md={6} sm={12} xs={12}>X</Grid>

</Grid> */}
</>

  )
}

 export default Login
