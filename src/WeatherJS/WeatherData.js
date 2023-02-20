import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../WeatherCSS/WeatherData.css";

const WeatherData = ({ data }) => {
  const { name, sys, main, weather } = data;
  const date = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  
  return (
    <div className="weather-data-container">
      <Card className="weather-card" style={{width: "350px"}}>
        <Card.Body>
          <Row>
            <Col xs={12} md={6} className="weather-data-left">
              <div className="weather-icon">
                <img
                  alt="weather"
                  className="weather-icon-img"
                  src={`icons/${data.weather[0].icon}.png`}
                />
              </div>
              <div className="weather-temperature">
                {Math.round(main.temp)}°C
              </div>
              <div className="weather-description">
                {weather[0].description}
              </div>
              <div className="weather-humidity">Humidity: {main.humidity}%</div>
              <div className="weather-wind">Wind: {data.wind.speed} km/h</div>
            </Col>
            <Col xs={12} md={6} className="weather-data-right">
              <div className="weather-location">
                {name}, {sys.country}
              </div>
              <div className="weather-time">{date}</div>
              <div className="weather-coordinates">
                Latitude: {data.coord.lat}  Longitude: {data.coord.lon}
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherData;
