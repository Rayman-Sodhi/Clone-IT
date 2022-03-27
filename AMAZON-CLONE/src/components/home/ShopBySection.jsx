import React from "react";
import { Card, Button } from "react-bootstrap";
import { selectUser } from "../../redux/userSlice.js";
import { useSelector } from "react-redux";
import { auth } from "../../firebase.utils";
import { useNavigate } from "react-router-dom";
import RouterLink from "./../link/RouterLink";

const ShopBySection = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const signOut = (e) => {
    e.preventDefault();
    if (user) auth.signOut();
  };
  const signIn = (e) => {
    e.preventDefault();
    navigate("/auth");
  };
  return (
    <div className="shop-by-section">
      <RouterLink to="/shop">
        <Card className='shop-by-section__card'>
          <Card.Body>
            <Card.Title>AmazonBasics</Card.Title>
            <Card.Img
              variant="top"
              src="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/aucc/pc_cat_be_1x._SY304_CB417974003_.jpg"
            />
            <Button variant="link">see more</Button>
          </Card.Body>
        </Card>
      </RouterLink>
      <RouterLink to="shop">
        <Card className='shop-by-section__card'>
          <Card.Body>
            <Card.Title>Shop by Category</Card.Title>
            <div className="shop-by-section__category">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg"
                  alt="Computers & Accessories"
                />
                <p>Computers & Accessories</p>
              </div>
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg"
                  alt="Video Games"
                />
                <p>Video Games</p>
              </div>
            </div>
            <div className="shop-by-section__category">
              <div>
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg"
                  alt="Baby"
                />
                <p>Baby</p>
              </div>
              <div>
                <img
                  src="https://m.media-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/trafficdrivers/hol20_gifthub_profilecard_FGG._AC_SR120,80_.png"
                  alt="Fashion"
                />
                <p>Fashion</p>
              </div>
            </div>
            <Button variant="link">See all</Button>
          </Card.Body>
        </Card>
      </RouterLink>
      <RouterLink to="/shop">
        <Card className='shop-by-section__card'>
          <Card.Body>
            <Card.Title>
              Get US $10 off
            </Card.Title>
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/November/Fuji_Dash_BXGY_1x._SY304_CB416796032_.jpg"
            />
            <Button variant="link">Use code NZ10 on purchase</Button>
          </Card.Body>
        </Card>
      </RouterLink>
      <Card className="shop-by-section__user">
        <Card.Body>
          {user ? (
            <div>
              <Card.Title>Hi, {user?.name}</Card.Title>
              <Button
                onClick={signOut}
                block
                className="shop-by-section__user__button"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div>
              <Card.Title> Sign in for the best experience</Card.Title>
              <Button
                onClick={signIn}
                block
                className="shop-by-section__user__button"
              >
                Sign in securely
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShopBySection;
