import React from 'react'
import {Box, Checkbox, FormControlLabel, TextField, Typography,Button,Grid,Link, Paper, colors} from '@mui/material';
import image from './Group 72.png'
import { red } from '@mui/material/colors';
import { Navigate } from 'react-router';



const Login = () => {
    const handleSubmit =() =>{
    }

    
  return (
    <div>
     <Grid container m={2}>
<Grid style={{fontFamily:'Plus Jakarta Sans', fontSize:'50px'}}  item lg={6} md={6} sm={12} xs={12}>etutor</Grid>
<Grid  item lg={6} md={6} sm={12} xs={12}>
  <Button className='btn-reg' style={{backgroundColor:'#d96767'}}  variant='contained'>Register</Button>
</Grid>
</Grid>
    <Grid container component='main' style={{height:'50vh'}}>
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
    <img  src={image}/>
   </Grid>
      <Grid style={{height:'40rem', marginTop:'80px'}} item lg={6} md={6} sm={12} xs={12} component={Paper} square elevation={2}>
           <Box sx={{ my:8, mx:4,  display:'flex', flexDirection:"column", alignItems:"center"}}>
              <Typography style={{fontWeight:'bold', fontFamily:'Plus Jakarta Sans'}} variant='h3'>Log In</Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt:1}}>

                      <TextField style={{fontFamily:'Plus Jakarta Sans'}} margin='normal' required fullWidth id='uname' label="Username" name='username' autoFocus></TextField>
                      <TextField style={{fontFamily:'Plus Jakarta Sans'}} margin='normal' required fullWidth id='pass' label="Password" name='Password' autoFocus></TextField>
                      <FormControlLabel style={{fontFamily:'Plus Jakarta Sans'}} control={<Checkbox/>} label="Remember Me"/>
                      <Link href="#" variant='body2' >Forgot Password</Link>

                      <Button fullWidth style={{backgroundColor:'#d96767', fontFamily:'Plus Jakarta Sans'}} type="submit" variant="contained" sx={{mt:3,mb:2}} >LogIn</Button>
                      <label className='custom-control-form' style={{fontWeight:'600', justifyContent:'center', color:'black',fontFamily:'Plus Jakarta Sans' }}>Do you have a account?</label>

                  {/* <Grid container>
                 <Grid item lg={6} md={6} sm={12} xs={12}>
                 
             </Grid>
                 </Grid> */}
       </Box>
    </Box>
  </Grid>
</Grid>

{/* <Grid container color='red' m={2}>
<Grid  item lg={6} md={6} sm={12} xs={12}>X</Grid>

</Grid> */}
</div>

  )
}

 export default Login
