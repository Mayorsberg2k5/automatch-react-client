import { FaChevronDown } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { cars } from "../data/data"; // Assuming data is imported from data.js
import { useNavigate } from 'react-router-dom';

const Form = ({ onSearch, isLoggedIn  }) => {
  const navigate = useNavigate();
  const [previousSearches, setPreviousSearches] = useState([]);
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  useEffect(() => {
    // Load previous searches from local storage
    const storedSearches = JSON.parse(localStorage.getItem('previousSearches')) || [];
    setPreviousSearches(storedSearches);
  }, []);

  const submitHandler = (e) => {
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
      const searchResult = { make: foundCar.Make, model: foundCar.Model, ...body };

      // Save the search result to local storage
      const updatedSearches = [...previousSearches, searchResult];
      localStorage.setItem('previousSearches', JSON.stringify(updatedSearches));
      setPreviousSearches(updatedSearches);

      onSearch(searchResult);
    } else {
      navigate("/Result")
      // Handle case where no matching car is found
      console.log("No matching car found for the selected criteria");
    }
  };

  const handlePreviousSearchClick = (search) => {
    // Set the make and model from the selected search
    setMake(search.make);
    setModel(search.model);

    // Remove the selected search from local storage
    const updatedPreviousSearches = previousSearches.filter(item => item !== search);
    localStorage.setItem('previousSearches', JSON.stringify(updatedPreviousSearches));
    window.location.reload(); 
  };

  return (
    <div className="pagebackground">
      <form onSubmit={submitHandler}>
        {/* Previous Searches */}
        <div>

        {isLoggedIn ? (
          <>
          <h2>Previous Searches</h2>
          <ul>
            {previousSearches.map((search, index) => (
              <li key={index}>
                <button type="button" onClick={() => handlePreviousSearchClick(search)}>
                  {search.make} {search.model}
                </button>
              </li>
            ))}
          </ul>
          </>
        ) : null}

        </div>

        {/* Search Form */}
        <div className="type_container">
          <select className="select-box" name="Feature" id="Feature" required>
            <option defaultValue>Select a feature</option>
            <option value="Affordability">Affordability</option>
            <option value="Luxury/Look">Luxury/Look</option>
            <option value="Fuel-Efficient">Fuel-Efficient</option>
            <option value="Electric">Electric</option>
          </select>
          <div className="icon-container">
            <FaChevronDown />
          </div>
        </div>

        <div className="type_container1">
          <select className="select-box" name="Type" id="Type" required>
            <option defaultValue>Select a car type</option>
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

        <div className="type_container1">
          <select className="select-box" name="Budget" id="Budget" required>
            <option defaultValue>Select your budget</option>
            <option value="$20,001 - $25,000">$20,001 - $25,000</option>
            <option value="$25,001 - $30,000">$25,001 - $30,000</option>
            <option value="$30,001 - $49,999">$30,001 - $49,999</option>
            <option value="$50,000+">$50,000+</option>
          </select>
          <div className="icon-container1">
            <FaChevronDown />
          </div>
        </div>

        <div>
          <button type="submit" className="formSubmit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
