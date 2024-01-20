import { Grid } from "@mui/material";
import { useEffect } from "react";


export const Description =  (description:any) => {

    return(
        <div className="descriptions">
          {description.description === "people" && <Grid container sx={{background:"#fff",width:'70%',margin:'auto'}}>
             <Grid item xs={12}  md={4} sx={{height:'350px'}} id="description-image">
                <img src={`${process.env.PUBLIC_URL}/description-1.jpg`} alt="" className="img-display"/>
             </Grid>
             <Grid item xs={12}  md={8} sx={{height:'350px'}}>
                <h1>OUR PEOPLE, OUR PURPOSE</h1>
                 <p>At the heart of everything we do, Our passionate vision bearers work tirelessly to ensure that you get to enjoy every sip and every bite. merci à eux!</p>
                 <button className="description-btn">OUR STORY</button>
             </Grid>
          </Grid>}  
          {description.description === 'coffee' && <Grid container sx={{background:"#fff",width:'70%',margin:'auto'}}>
             <Grid item xs={12}  md={4} sx={{height:'350px'}} id="description-image">
                <img src={`${process.env.PUBLIC_URL}/description-2.jpg`} alt="" className="img-display"/>
             </Grid>
             <Grid item xs={12}  md={8} sx={{height:'350px'}}>
                <h1>VARIETY OF COFFEES</h1>
                 <p>The universe contains different people with different cultures, our coffee is a reflection of the dynamic personalities who embody the el caffe way of life, our range of bespoke blends & single origin coffees are out of this world.</p>
                 <button className="description-btn">OUR COFFEE</button>
             </Grid>
          </Grid>}
          {description.description === 'food' && <Grid container sx={{background:"#fff",width:'70%',margin:'auto'}}>
             <Grid item xs={12}  md={4} sx={{height:'350px'}} id="description-image">
                <img src={`${process.env.PUBLIC_URL}/description-3.jpg`} alt="" className="img-display"/>
             </Grid>
             <Grid item xs={12}  md={8} sx={{height:'350px'}}>
                <h1>FOOD WITH DIVERSIFIED TASTE</h1>
                 <p>Our customers are as diverse as we are, hence we cater for all dietary needs where and when we can. A variety of Vegetarian, Vegan and Halal options, are offered on availability</p>
                 <button className="description-btn">OUR FOOD</button>
             </Grid>
          </Grid>}
          {description.description === 'sustainability' && <Grid container sx={{background:"#fff",width:'70%',margin:'auto'}}>
             <Grid item xs={12}  md={4} sx={{height:'350px'}} id="description-image">
                <img src={`${process.env.PUBLIC_URL}/description-4.jpg`} alt="" className="img-display"/>
             </Grid>
             <Grid item xs={12}  md={8} sx={{height:'350px'}}>
                <h1>OUR ENVIRONMENT, OUR RESPONSIBILITY</h1>
                 <p>We are committed to the environment and want to ensure that we remain as faithful as we can to ensure that it remains clean and free from any harm to protect all that lives within this planet.Let's be good together!</p>
                 <button className="description-btn">OUR SUSTAINABILITY</button>
             </Grid>
          </Grid>}
          
        </div>
    )
} 