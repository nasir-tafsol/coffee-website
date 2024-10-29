import React from "react";
import ProductCard from "./ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import listItem from "../../data/productsData";
import classes from "./product.module.css";


function Products() {
  return (
    <>
      <Container>
        <h3 className={classes.productMainHeading}>Nossos cafés</h3>
        <Row className="justify-content-center">
          {listItem.map((items, index) => (
            <Col xs={12} sm={12} lg={4} md={6} xl={3}  key={index} className="p-0">
              <ProductCard item={items} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Products;
