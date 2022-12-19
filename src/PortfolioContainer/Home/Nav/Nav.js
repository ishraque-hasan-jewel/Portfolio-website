//import { Link } from "react-router-dom";
//import logo from "../../assets/Home/logo-bg.png";
import classes from "../../../styles/Nav.module.css";
// import Account from "./Account";


export default function Nav() {
  return (
    <div>
                <nav className={classes.nav}>
                        <ul>
                            <li>
                            <a  href="/" className={classes.brand}>
                                <img src={require ("../../../assets/Home/jewel2.PNG")} alt="not a internet connection" />
                                <h3>Portfolio Website</h3>
                            </a>
                            </li>
                        </ul>
                        <ul>
                        {/* <Account /> */}
                        <a href="#About">About</a>
                        <a href="#Resume">Resume</a>
                        <a href="#Testimonial">Testimonial</a>
                        <a href="#Contact">Contact</a>
                        </ul>
                        </nav>
                </div>
  );
}
