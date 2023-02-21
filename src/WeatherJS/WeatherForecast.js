import React, { useState, useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "../WeatherCSS/WeatherForecast.css";

const WeatherForecast = ({ city, state }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const API_KEY = "654b31a0fcf37cf242c09fffc7361160";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},US&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setForecastData(data.list.filter((item, index) => index % 8 === 0));  // filter the data 
      });
  }, [city, state]);   // condition city and state  

  return (
    <Container>
      <Card className="weather-forecast-card">
        <Card.Header>5-Day Weather Forecast</Card.Header>
        <Card.Body className="cardBodystyle">
          <Row>
            {forecastData.map((forecast, index) => (                       //  using map function to show data in a loop  
              <Col key={index}>
                <div className="weather-forecast-item">
                  <div className="weather-forecast-day">
                    {index === 0                                           // this statement show the today's data   
                      ? "Today"
                      : new Date(forecast.dt * 1000).toLocaleDateString(
                          "en-US",
                          { weekday: "short" }
                        )}
                  </div>
                  <div className="weather-forecast-icon">
                    <img     
                      src={`icons/${forecast.weather[0].icon}.png`}          // image show related to days  
                      alt={forecast.weather[0].description}
                    />
                  </div>
                  <div className="weather-forecast-temp"> 
                    {Math.round(forecast.main.temp)}&deg;C                   {/* temperature shown related to days  */}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WeatherForecast;
