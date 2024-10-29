import React from "react";
import { Col, Container, Row, InputGroup } from "react-bootstrap";
import classes from "./addcart.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from "../Header/Header";
import Form from "react-bootstrap/Form";
import { BiDollar } from "react-icons/bi";
import { FaRegCreditCard } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../../features/product/productSlice";

function AddCart() {
  let products = useSelector((state) => state.items);
  let totalItem = useSelector((state) => state.totalAmount);
  let dispatch = useDispatch();
  let handleItemRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col md={6} lg={6}>
            <div>
              <h2>Complete seu pedido</h2>
              <div className={classes.addCartFirstBtn}>
                <div className={classes.innerDivAddCart}>
                  <FaMapMarkerAlt className={classes.firstDivFirstIcon} />
                  <div className={classes.cartFirstHeading}>
                    <h2>Endereço de Entrega</h2>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
                </div>
                <Form>
                  <Row>
                    <Col sm={10} className="mb-2">
                      <Form.Control type="text" placeholder="90250-440" />
                    </Col>

                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Rua João Daniel Martinelli"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                      <Form.Control type="text" placeholder="102" />
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Complemento" />
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col>
                      <Form.Control placeholder="Farrapos" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Porto Alegre" />
                    </Col>
                  </Row>
                </Form>
              </div>
              <div className={classes.addCartSecondDownBtn}>
                <div className={classes.innerDivAddCart}>
                  <BiDollar className={classes.secondDivFirstIcon} />
                  <div className={classes.cartFirstHeading}>
                    <h2>Pagamento</h2>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </div>
                </div>
                <Form>
                  <Row className="align-items-center">
                    <Col className="col-4 px-1">
                      <Form.Label
                        htmlFor="inlineFormInputGroupone"
                        visuallyHidden
                      >
                        Cartão de crédito
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>
                          <FaRegCreditCard
                            className={classes.secondDivFirstIcon}
                          />
                        </InputGroup.Text>
                        <Form.Control
                          id="inlineFormInputGroupone"
                          placeholder="Cartão de crédito"
                        />
                      </InputGroup>
                    </Col>
                    <Col className="col-4 px-1">
                      <Form.Label
                        htmlFor="inlineFormInputGrouptwo"
                        visuallyHidden
                      >
                        cartão de débito
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>
                          <BsBank className={classes.secondDivFirstIcon} />
                        </InputGroup.Text>
                        <Form.Control
                          id="inlineFormInputGrouptwo"
                          placeholder="cartão de débito"
                        />
                      </InputGroup>
                    </Col>
                    <Col className="col-4 px-1">
                      <Form.Label
                        htmlFor="inlineFormInputGroupthree"
                        visuallyHidden
                      >
                        dinheiro
                      </Form.Label>
                      <InputGroup className="mb-2">
                        <InputGroup.Text>
                          <FaRegMoneyBillAlt
                            className={classes.secondDivFirstIcon}
                          />
                        </InputGroup.Text>
                        <Form.Control
                          id="inlineFormInputGroupthree"
                          placeholder="dinheiro"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
          <Col md={6} lg={6}>
            <div>
              <h2>Cafés selecionados</h2>
              <div className={classes.secondDivBox}>
                {products.length === 0 ? (
                  <h1 className={classes.cartHeadings}>
                    No Product Item in Cart
                  </h1>
                ) : (
                  products.map((items) => (
                    <Container key={items.id} className={classes.productOneBox}>
                      <Row className={classes.productItemRow}>
                        <Col lg={3}>
                          <img
                            src={items.image}
                            alt={items.title}
                            className={classes.productImageItem}
                          />
                        </Col>
                        <Col lg={7}>
                          <div className={classes.productInnerDiv}>
                            <h2>{items.title}</h2>
                            <div className={classes.quantityBtn}>
                              <button
                                className={classes.btnsProductsIcon}
                                onClick={() => {
                                  if (items.quantity > 1) {
                                    dispatch(
                                      updateQuantity({
                                        id: items.id,
                                        quantity: items.quantity - 1,
                                      })
                                    );
                                  }
                                }}
                              >
                                <FiMinus />
                              </button>
                              <span>{items.quantity}</span>
                              <button
                                className={classes.btnsProductsIcon}
                                onClick={() => {
                                  dispatch(
                                    updateQuantity({
                                      id: items.id,
                                      quantity: items.quantity + 1,
                                    })
                                  );
                                }}
                              >
                                <FaPlus />
                              </button>
                              <button
                                className={classes.removeFromCartBtn}
                                onClick={() =>
                                  handleItemRemoveFromCart(items.id)
                                }
                              >
                                <MdDelete
                                  className={classes.removeItemCartBtn}
                                />{" "}
                                Remove
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={2}>
                          <div className={classes.priceTag}>
                            <p>
                              <strong>
                                {(items.price * items.quantity).toFixed(2)}
                              </strong>
                            </p>
                            {/* <p className="mb-0">{items.price.toFixed(2)}</p>
                            <p><strong>Total Price: {(items.price * items.quantity).toFixed(2)}</strong></p> */}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  ))
                )}
                {/* List Products */}
                <div>
                  <table className={classes.tableDiv}>
                    <tbody>
                      <tr>
                        <td>Total de itens</td>
                        {/* item Price */}
                        <td>
                          {products.length > 0
                            ? (totalItem - 5).toFixed(2)
                            : "0.00"}
                        </td>
                      </tr>
                      <tr>
                        <td>Entrega</td>
                        <td>$5.00</td>
                      </tr>
                      <tr>
                        <td className={classes.totalItem}>Total</td>
                        <td className={classes.totalItem}>
                          {totalItem.toFixed(2)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className={classes.confirmOrderBtn}>
                  confirmar pedido
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddCart;
