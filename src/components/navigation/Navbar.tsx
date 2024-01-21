import { Grid } from "@mui/material";
import Logo from "../../logo.svg";
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
    return(
        <div className="navbar">
           <Grid container>
              <Grid item xs={4}>
                 <Link to="/">
                 <img src={Logo} alt="" className="logo"/>                 
                 </Link>
              </Grid>
              <Grid item xs={8} id="navLinks">
                  <div className="nav-desktop">
                     <Link to="/menu" className="navLink">
                        Menu
                     </Link>
                     <Link to="/rewards" className="navLink">
                        Rewards
                     </Link>
                     <Link to="reservation" className="navLink">
                         Reservation
                     </Link>
                     <Link to="/" className="navLink">
                        <PermIdentityOutlinedIcon sx={{position:'relative',top:'5px'}}/>
                     </Link>
                     <Link to="/" className="navLink">
                        <ShoppingCartOutlinedIcon sx={{position:'relative',top:'5px'}}/>
                     </Link>
                  </div>
                  <div className="nav-mobile">
                       <div className="navToggle">
                           <MenuOutlinedIcon sx={{fontSize:'40px',color:'#CC142C'}}/>
                       </div>
                  </div>
              </Grid>
           </Grid>
        </div>
    )
}