import { Grid } from "@mui/material";
import Logo from "../../logo.svg";
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useRef } from "react";

export const Navbar = () => {
   const divElement = useRef<HTMLDivElement>(null);
   window.addEventListener('scroll',() => {
      if(window.scrollY >= 700){
         divElement.current?.classList.add('active');
         divElement.current?.classList.remove('inactive');
      }else{
         divElement.current?.classList.remove('active');
      }
   })
    return(
        <div className="navbar" ref={divElement}>
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
                     <Link to="/menu" className="navLink">
                        Rewards
                     </Link>
                     <Link to="/menu" className="navLink">
                         Reservation
                     </Link>
                     <Link to="/menu" className="navLink">
                        <PermIdentityOutlinedIcon sx={{position:'relative',top:'5px'}}/>
                     </Link>
                     <Link to="/menu" className="navLink">
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