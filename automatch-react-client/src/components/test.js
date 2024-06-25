import React, { useState } from 'react';
import data from '../data/data'; // Adjust the import path according to your project structure

const Test = () => {
    const [selectedOptions, setSelectedOptions] = useState({
      Feature: '',
      Type: '',
      Budget: ''
    });
    const [result, setResult] = useState(null);
    const [noResult, setNoResult] = useState(false);
  
    const handleSelectChange = (category) => (event) => {
      const value = event.target.value;
      setSelectedOptions((prevOptions) => {
        const newOptions = {
          ...prevOptions,
          [category]: value
        };
        generateResult(newOptions); // Call generateResult with updated options
        return newOptions;
      });
    };
  
    const generateResult = (options) => {
      // Check if all options are selected
      if (!options.Feature || !options.Type || !options.Budget) {
        setResult(null);
        setNoResult(false);
        return;
      }
  
      const filteredResult = data.find(
        item =>
          item.Feature === options.Feature &&
          item.Type === options.Type &&
          item.Budget === options.Budget
      );
  
      if (filteredResult) {
        setResult(filteredResult);
        setNoResult(false);
      } else {
        setResult(null);
        setNoResult(true);
      }
    };
  
    const getUniqueOptions = (key) => {
      return [...new Set(data.map(item => item[key]))];
    };
  
    return (
      <div>
        <select value={selectedOptions.Feature} onChange={handleSelectChange('Feature')}>
          <option value="">Select Feature</option>
          {getUniqueOptions('Feature').map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        <select value={selectedOptions.Type} onChange={handleSelectChange('Type')}>
          <option value="">Select Type</option>
          {getUniqueOptions('Type').map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        <select value={selectedOptions.Budget} onChange={handleSelectChange('Budget')}>
          <option value="">Select Budget</option>
          {getUniqueOptions('Budget').map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
  
        {noResult && (
          <div>
            <h3>No result available</h3>
          </div>
        )}
  
        {result && (
          <div>
            <h3>Result:</h3>
            <p>Make: {result.Make}</p>
            <p>Model: {result.Model}</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Test;