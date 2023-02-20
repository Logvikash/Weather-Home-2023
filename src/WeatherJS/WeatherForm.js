import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const WeatherForm = ({ onSubmit }) => {       // send city and state values to WeatherNavbar.js on line number 40 
  const [city, setCity] = useState("Ranchi");
  const [state, setState] = useState("Jharkhand");

  const handleSubmit = (event) => {      // city and state passing stage 1 ex: ranchi and Jharkhand
    event.preventDefault();
    onSubmit(city, state);
  };

  return (
    // Form Start
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Enter City Name"
        className="input-field"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <span className="spacer" />
      <Form.Control
        type="text"
        placeholder="Enter State Name"
        className="input-field"
        value={state}
        onChange={(event) => setState(event.target.value)}
      />
      <span className="spacer" />
      <Button variant="outline-light" type="submit">
        <BiSearch size={20} /> {/* Bisearch icon */}
      </Button>
    </Form>
    //Form End
  );
};

export default WeatherForm;
