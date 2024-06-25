import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { cars } from '../data/data'; // Assuming data is imported from data.js

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      Feature: e.target.Feature.value,
      Type: e.target.Type.value,
      Budget: e.target.Budget.value,
    };

    // Find the car that matches the form inputs
    const foundCar = cars.find(car =>
      car.Feature === body.Feature &&
      car.Type === body.Type &&
      car.Budget === body.Budget
    );

    if (foundCar) {
      // Navigate to result page with parameters
      navigate(`/result/${foundCar.Make}/${foundCar.Model}`);
    } else {
      // Handle case where no matching car is found
      alert("No matching car found for the selected criteria");
    }
  };

  return (
    <div className="pagebackground">
      <form onSubmit={handleSubmit}>
        
        {/* Feature selection */}
        <div className="type_container"> 
          <select className="select-box" name="Feature" id="Feature" required>
            <option value="" disabled>Select a feature</option>
            <option value="Affordability">Affordability</option>
            <option value="Luxury/Look">Luxury/Look</option>
            <option value="Fuel-Efficient">Fuel-Efficient</option>
            <option value="Electric">Electric</option>            
          </select>
          <div className="icon-container"> 
            <FaChevronDown />
          </div>
        </div>

        {/* Car type selection */}
        <div className="type_container1"> 
          <select className="select-box" name="Type" id="Type" required>
            <option value="" disabled>Select a car type</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="All-Terrain">All-Terrain</option>
            <option value="Sport">Sport</option> 
            <option value="Truck">Truck</option>               
          </select>
          <div className="icon-container1"> 
            <FaChevronDown />
          </div>
        </div>

        {/* Budget selection */}
        <div className="type_container1"> 
          <select className="select-box" name="Budget" id="Budget" required>
            <option value="" disabled>Select your budget</option>
            <option value="$20,001 - $25,000">$20,001 - $25,000</option>
            <option value="$25,001 - $30,000">$25,001 - $30,000</option>
            <option value="$30,001 - $49,999">$30,001 - $49,999</option> 
            <option value="$50,000+">$50,000+</option>                
          </select>
          <div className="icon-container1"> 
            <FaChevronDown />
          </div>
        </div>

        {/* Submit button */}
        <div>
          <button type="submit" className="formSubmit">
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default Form