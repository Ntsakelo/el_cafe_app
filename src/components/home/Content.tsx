import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ItemsSlider from "./ItemsSlider";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Description } from "./Description";
import { useState } from "react";
import QuiltedImageList from "./ImageList";
import Commas from '../../Commas.svg';


export const Content = () => {
    const [description,setDescription] = useState('people'); 

    const handleDefault = (e:any) => {
       e.target.parentElement.parentElement.children[0].classList.add('active')
    }

    const handleDescription = (val:string,event:any) => {
      const itemsList = document.querySelectorAll<HTMLDivElement>('.item-icon');
      itemsList.forEach(item => {
        item.classList.remove('active')
      })
      
        event.target.classList.add('active');
        setDescription(val)  
    }
    return (
        <div className="content">
          <Grid container>
            <Grid item xs={12} md={6} className="welcomeContent">
                <div className="content-text">
              <h3>Welcome</h3>
              <h1>WE MAKE THE BEST COFFEE IN TOWN</h1>
              <p>We delight in taking care of our customers. We have been serving in town since 2012. We are proud to be the trail blazer for best coffee taste in town.</p>
              <div className="content-action">
              <Link to="/about" className="about-link">
                MORE ABOUT US
              </Link>             
              </div> 
                </div>
            </Grid> 
            <Grid item xs={12}  md={6}>
                <img className="welcomeImage" src={`${process.env.PUBLIC_URL}/welcome.png`} alt="" />
            </Grid> 
          </Grid>
          <div style={{width:'100%',background:'#fff'}}>
          <div className="imageStack">
              <h1>ORDER NOW, PICK UP IN STORE</h1> 
             <ItemsSlider />
          </div>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="specials-content">
                <h1 className="specialsHead-1">WHAT SETS US APART</h1>
                </div>
            </Grid>
          </Grid>
 
          <Grid container sx={{background:"#fff",width:'70%',margin:'auto'}}>
             <Grid item xs={12} sm={4} lg={3} > 
                 <div  className="item-icon active" onClick={(e:any) => handleDescription('people',e)}>
                    <Diversity3Icon className="icon" sx={{color:'#CC142C'}}/>
                 </div>
                 <h3 className="item-head">OUR PEOPLE</h3>
             </Grid>
             <Grid item xs={12} sm={4} lg={3} > 
                 <div className="item-icon" onClick={(e:any) => handleDescription('coffee',e)}>
                    <CoffeeIcon className="icon" sx={{color:'#CC142C'}}/>
                 </div>
                 <h3 className="item-head">OUR COFFEE</h3>
             </Grid>
             <Grid item xs={12} sm={4} lg={3} > 
                 <div className="item-icon"  onClick={(e:any) => handleDescription('food',e)}>
                    <LunchDiningIcon className="icon" sx={{color:'#CC142C'}}/>
                 </div>
                 <h3 className="item-head">OUR FOOD</h3>
             </Grid>
             <Grid item xs={12} sm={4} lg={3} > 
                 <div className="item-icon" onClick={(e:any) => handleDescription('sustainability',e)}>
                    <FavoriteIcon className="icon" sx={{color:'#CC142C'}}/>
                 </div>
                 <h3 className="item-head">OUR SUSTAINABILITY</h3>
             </Grid>
          </Grid>
           <div className="descriptions">
             <Description description={description}/>
          </div> 

          <div className="restaurant-setting">
            <Grid container sx={{width:'70%',margin:'auto'}}>
                <Grid item xs={12} md={4}>
                    <img src={`${process.env.PUBLIC_URL}/restaurant.jpg`} alt="" className="restaurant-img"/>
                </Grid>
                <Grid item xs={12} md={8}>
                     <h1 className="restaurant-head">STYLISH DECOR, INVITING AMBIANCE</h1>
                     <p>From the humbling beginnings in a garage, We're so proud to have opened our first store in Cape town with the mission to grow and expand in South Africa and Africa as a whole. Visit our store to experience perfect aesthetics and relaxation. Socialize, Unwind, and enjoy our coffee.</p>
                     <br />
                     <p>We are open from Monday to Saturday. We recommend that you make a reservation for your visit to avoid waiting.</p>
                     <button className='reservationBtn'>MAKE A RESERVATION</button>
                </Grid>
            </Grid>
          </div>
          <div className="reviewContainer">
           {/* <div className="customerReviews">
               <p>testimonial</p>
               <h1>Customer Reviews</h1>
               <img src={Commas} alt="" className="commas"/>
               <p id="reviewText">I am entirely happy with the service that i received from el cafe'. It was really awesome dining and rewinding at the cafe'. Good music too. hahahaha!. I am entirely happy with the service that i received from el cafe'. It was really awesome dining and rewinding at the cafe'. Good music too. hahahaha!. I am entirely happy with the service that i received from el cafe'. It was really awesome dining and rewinding at the cafe'. Good music too. hahahaha!</p>
               <h3 className="reviewer">~Ntsakelo Makhuvele</h3>
           </div>  */}

          </div>
          </div> 
        </div>
    )
}