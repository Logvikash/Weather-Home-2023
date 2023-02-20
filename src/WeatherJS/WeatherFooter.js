import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Container } from "react-bootstrap";
import "../WeatherCSS/WeatherFooter.css";

const WeatherFooter = () => {
  return (
    <div className="container ">
      <footer className="backgrounddesign  text-center text-white fixed-bottom">
        <Container className="p-2 pb-0">
          <section className="mb-4">
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} href="#!">      {/* facebook icon */}
              <FaFacebookF />
            </a>
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!">      {/* twitter icon */}
              <FaTwitter />
            </a>
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!">       {/* Google icon */}
              <FaGoogle />
            </a>
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!">       {/* Instagram icon */}
              <FaInstagram />
            </a>
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="#!">      {/* LinkedinIn icon */}
              <FaLinkedinIn />
            </a>
            <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="#!">      {/* facebook icon */}
              <FaGithub />
            </a>
          </section>
        </Container>
      </footer>
    </div>
  );
};

export default WeatherFooter;
