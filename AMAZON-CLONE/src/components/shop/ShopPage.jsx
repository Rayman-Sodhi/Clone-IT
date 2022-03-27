import React from "react";
import { Form } from "react-bootstrap";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarBorder } from "../../assets/star_border.svg";
import ProductCard from "../card/ProductCard";

const ShopPage = ({ products, departments }) => {
  //  Merge the products from different department
  // const allProducts = shopData
  //   .map((el) => el.products)
  //   .reduce((all, item) => [...all, ...item]);

  // remove duplated brand and seller
  const brands = products.map((el) => el.brand);
  const featuredBrands = [...new Set(brands)];

  const sellers = products.map((el) => el.seller);
  const featuredSellers = [...new Set(sellers)];

  return (
    <div className="shopPage">
      <div className="shopPage__sideBar">
        <div className="shopPage__sideBar__refinedBy">
          <div>
            <div className="shopPage__sideBar__refinedBy__title">
              <span>Department</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              {departments &&
                departments.map(({departmentName, id}) => (
                  <Form key={id}>
                    <Form.Group
                      controlId={id}
                      className="shopPage__sideBar__refinedBy__content--form"
                    >
                      <Form.Check type="checkbox" label={departmentName} />
                    </Form.Group>
                  </Form>
                ))}
            </div>
          </div>

          <div>
            <div className="shopPage__sideBar__refinedBy__title">
              <span>From Our Brands</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              <Form>
                <Form.Group
                  controlId="amazonBrand"
                  className="shopPage__sideBar__refinedBy__content--form"
                >
                  <Form.Check type="checkbox" label="Our Brands" />
                </Form.Group>
              </Form>
            </div>
          </div>
          <div>
            <div className="shopPage__sideBar__refinedBy__title">
              <span>Featured Brands</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              {featuredBrands &&
                featuredBrands.map((brand, id) => (
                  <Form key={`brand-${id}`}>
                    <Form.Group
                      controlId={`brand-${id}`}
                      className="shopPage__sideBar__refinedBy__content--form"
                    >
                      <Form.Check type="checkbox" label={brand} />
                    </Form.Group>
                  </Form>
                ))}
            </div>
          </div>
          <div>
            <div className="shopPage__sideBar__refinedBy__title">
              <span>Avg. Customer Review</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <span> & Up</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <span> & Up</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <span> & Up</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              <Star className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <StarBorder className="shopPage__sideBar__refinedBy__content__star" />
              <span> & Up</span>
            </div>
          </div>
          <div>
            <div className="shopPage__sideBar__refinedBy__title">
              <span>Price</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              <span>under $25</span> <br />
              <span>$25 to $50</span> <br />
              <span>$50 to $100</span> <br />
              <span>$100 to $200</span> <br />
              <span>$200 and above</span> <br />
            </div>
          </div>

          <div>
            <div className="shopPage__sideBar__refinedBy__title">
              <span>Seler</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              {featuredSellers &&
                featuredSellers.map((seller, id) => (
                  <Form key={`seller-${id}`}>
                    <Form.Group
                      controlId={`seller-${id}`}
                      className="shopPage__sideBar__refinedBy__content--form"
                    >
                      <Form.Check type="checkbox" label={seller} />
                    </Form.Group>
                  </Form>
                ))}
            </div>
          </div>

          <div>
            <div className="shopPage__sideBar__refinedBy__title">
              <span>Availability</span>
            </div>
            <div className="shopPage__sideBar__refinedBy__content">
              <Form>
                <Form.Group
                  controlId="Active"
                  className="shopPage__sideBar__refinedBy__content--form"
                >
                  <Form.Check type="checkbox" label="Active" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group
                  controlId="Upcoming"
                  className="shopPage__sideBar__refinedBy__content--form"
                >
                  <Form.Check type="checkbox" label="Upcoming" />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group
                  controlId="Missed"
                  className="shopPage__sideBar__refinedBy__content--form"
                >
                  <Form.Check type="checkbox" label="Missed" />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="shopPage__list">
        {products.map(({ id, ...props }) => (
          <ProductCard key={id} productId={id} {...props} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
