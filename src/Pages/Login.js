import React from 'react'
import {Box, Checkbox, FormControlLabel, TextField, Typography,Button,Grid,Link} from '@mui/material';

const Login = () => {
    const handleSubmit =() =>{

    }
  return (
    <Grid container>
    <Box sx={{ my:8, mx:4, display:'flex', flexDirection:"column", alignItems:"center"}}>
        <Typography variant='h5'>Log In</Typography>
        <Box  component="form" noValidate onSubmit={handleSubmit} sx={{mt:1}}>
            <TextField margin='normal' required fullWidth id='username' label="Username" name='username' autoFocus></TextField>
            <TextField margin='normal' required fullWidth id='password' label="Password" name='Password' autoFocus></TextField>
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
  )
}

export default Login
