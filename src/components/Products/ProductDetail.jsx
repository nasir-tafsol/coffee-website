import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./product.module.css";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import listItem from "../../data/productsData";
import { addToCart, updateQuantity } from "../../features/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const product = listItem.find((item) => item.slug === slug);

  // start code
  const cartItems = useSelector((state) => state.items);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const existingItem = cartItems.find((prod) => prod.id === product.id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
    }
  }, [cartItems, product.id]);

  const handleIncreaseQuantitys = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);

    if (newQuantity > 0) {
      dispatch(addToCart({ ...product, quantity: newQuantity }));
      dispatch(updateQuantity({ id: product.id, quantity: newQuantity }));
    }
  };

  const handleDecreaseQuantitys = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />
      <Container className={classes.productDetailContainer}>
        <Row className={classes.productDetailRow}>
          <Col>
            <div>
              <img src={product.image} width={150} alt={product.title} />
            </div>
          </Col>
          <Col>
            <div>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              <span>
                {product.badge.map((itemBadge, index) => (
                  <div key={index} className={`${classes.badgeDesign} badge`}>
                    {itemBadge}
                  </div>
                ))}
              </span>
              <div className={classes.productDetailAmountCls}>
                <span>
                  $ <strong>{product.price}</strong>
                </span>
              </div>
              <div className={classes.quantityBtnDetail}>
                <button
                  className={classes.btnsProductsIcon}
                  onClick={handleDecreaseQuantitys}
                >
                  <FiMinus className={classes.cartPlusIcons} />
                </button>
                <span>{quantity}</span>
                <button
                  className={classes.btnsProductsIcon}
                  onClick={handleIncreaseQuantitys}
                >
                  <FaPlus className={classes.cartPlusIcons} />
                </button>
              </div>
              <div className={classes.detailPageBtn}>
                <button className={classes.addToCartBtn}>
                  <Link to="/add-cart">Add to Cart</Link>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductDetail;
