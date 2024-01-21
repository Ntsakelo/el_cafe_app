import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

interface Item {
  id: number;
  title: string;
  ingredients: string;
  item_image: string;
  active: number;
  item_price: string;
  menu_size: string;
}
export const Slides = ({settings}: any) => {
  const [items, setItems] = useState<Item[]>();
  const baseUrl = "https://el-cafe-api.onrender.com/menu";
  const navigate = useNavigate()

  useEffect(() => {
    axios({
      method: "get",
      baseURL: baseUrl,
    }).then((response) => {
      console.log(response);
      setItems(response.data);
    });
  });
  const handleNavigation = (url:string) => {
    navigate(url)
  } 
  return (
    <Slider {...settings} >
      {items && items.map(item => {
        return (
            <div className="item">
            <div className="special-item">
              <h3 className="itemName">{item.title}</h3>
              <p className="ingredients">{item.ingredients}</p>
              <h3 className="price">{item.item_price}</h3>
              <button className="orderNowBtn" id={item.id.toString()} onClick={() => {handleNavigation(`/product/${item.title}`)}}>
                <ShoppingCartOutlinedIcon
                  sx={{
                    fontSize: "16px",
                    position: "relative",
                    top: "2px",
                    marginRight: "5px",
                  }}
                />
                ORDER NOW
              </button>
              <img
                className="itemImage"
                src={item.item_image}
                alt="Black coffee"
              />
            </div>
          </div>
        )
      })}
    </Slider>
  );
};
