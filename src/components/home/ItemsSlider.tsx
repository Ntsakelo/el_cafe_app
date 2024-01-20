import React, { Component, useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Slides } from "./Slides";


const NextArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
    <ArrowForwardIosOutlinedIcon className={className} onClick={onClick} style={{...style,color:'#fff',background:'#000',borderRadius:'50%',padding:'3px'}}/>
    );
  }

 const  PrevArrow = (props:any) => {
    const { className, style, onClick } = props;
    return (
    <ArrowBackIosOutlinedIcon className={className} onClick={onClick} style={{...style,color:'#fff',background:'#000',borderRadius:'50%',padding:'3px'}}/>
    );
  }  

  

export default class ItemsSlider extends Component {
   render(): React.ReactNode {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 799,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                infinite:true,
                dots: false,
            }
        },
        {
            breakpoint: 599,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
                infinite:true,
                dots: false,
            }
        },
        
      ],
    };
    return (
          <Slides settings={settings}/>
    );
  }
}
