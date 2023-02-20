import React, { useState } from "react";
import { Navbar, Container, Row } from "react-bootstrap";
import { FaCloudSun } from "react-icons/fa";
import WeatherForm from "./WeatherForm";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import WeatherFooter from "./WeatherFooter";
import "../WeatherCSS/WeatherNavbar.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
// to fetch data from form i used city and state
  const handleFormSubmit = (city, state) => {
    const API_KEY = "654b31a0fcf37cf242c09fffc7361160";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setCity(city);
        setState(state);
      });
  };

  return (
    <div className="background">
      {/* Navbar Start */}
      <Navbar bg="dark" expand="md" fixed="top">
        <Container className="containerdesign">
          <Navbar.Brand href="#home" className="brand-custom">
            <FaCloudSun size={30} className="brand-icon" /> {/* sun icon from package */}
            <span className="brand-name">Weather Home</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Row className="ms-auto">
              {/* call from WeatherFrom.js */}
              <WeatherForm onSubmit={handleFormSubmit} />    {/* call the function line no 15 in WeatherNavbar.js */}
              {/* End WeatherFrom.js */}
            </Row>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Navbar End */}
      <div className="container-fluid">
        {weatherData && (         
          <>
            <WeatherData data={weatherData} />     {/* data variable store the  current data  and this data value goes to WeatherData.js */}
            <WeatherForecast city={city} state={state} />  {/* All details of current city and state & city/state goes to WeatherForecast.js */}
          </>
        )}
      </div>
      <WeatherFooter/> {/* call to WeatherFooter.js  */}
    </div>
  );
};

export default App;
