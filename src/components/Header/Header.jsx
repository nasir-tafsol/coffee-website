import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import { MdLocationPin } from "react-icons/md";
import classes from "./header.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Header() {
  let quantity = useSelector((state) => state.items);
  // let collectQuantity = quantity.reduce(
  //   (total, item) => total + (item.quantity || 0),
  //   0
  // );

  return (
    <Container>
      <header className={`${classes.headerCssMain} d-flex flex-wrap py-3`}>
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src={logoImage}
            alt="logoImage"
            className={classes.headerLogoCls}
          />
        </Link>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <button className={classes.headerLeftbtn}>
              <MdLocationPin className={classes.headerRightBtnTwo} />
              <Link to="/">Porto Alegre, RS</Link>
            </button>
          </li>
          <li className="nav-item">
            <button className={classes.headerLeftbtnTwo}>
              <Link to="/add-cart">
                <div className={classes.cartIcon}>
                  <FaShoppingCart className={classes.cartBtns} />
                  <span className={classes.itemCount}>{quantity.length}</span>
                </div>
              </Link>
            </button>
          </li>
        </ul>
      </header>
    </Container>
  );
}
