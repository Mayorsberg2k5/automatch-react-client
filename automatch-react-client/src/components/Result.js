import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useEffect} from "react";
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

const Result = () => {
    const { make, model } = useParams();
    const googleSearchLink = `https://www.google.com/search?q=${make}+${model}`
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const [savedSearch, setSavedSearch] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('searchResult'));
        setSavedSearch(saved);
      }, []);

    const handleDeleteSearch = () => {
        localStorage.removeItem('searchResult');
        setSavedSearch(null); // Clear saved search state
        alert('Search deleted successfully!');
      };
    
      const handleNewSearch = () => {
        navigate("/Form")
        console.log('Creating new search...');
      };
    
      const handleEditSearch = () => {
        // Handle edit previous search functionality
        console.log('Editing previous search...');
      };

    return (
        <div className="pagebackground">
            <div className ="resultspage"> 
        <div>
            <h1>
                Your Match is a {make} {model}
            </h1>
        </div>


        <div className="resultsbox">
            <div className="result">
                <div> 
                    {/* Link for each car based on make and model that was pulled in*/}
                    <a href={googleSearchLink} target="blank" rel="noopener noreferrer">Click here to search on Google</a> 

                    {/* className="results-details" */}
                    <div >

                        <div className="nextCar">
                            <a href="https://www.cargurus.com">Click Here to buy your next car </a>
                        </div>
                    </div>

                </div>


            </div>

    <div>
      <h2>Your Saved Search</h2>
    </div>

    {savedSearch && (
        <div>
          <p>Make: {savedSearch.make}</p>
          <p>Model: {savedSearch.model}</p>
          <p>Feature: {savedSearch.Feature}</p>
          <p>Type: {savedSearch.Type}</p>
          <p>Budget: {savedSearch.Budget}</p>
        </div>
      )}



        </div>

      {/* Conditional rendering of buttons */}
      {isLoggedIn ? (
        <div>
          <button className="deleteSearch" onClick={handleDeleteSearch}>
            Delete Search
          </button>

          <button className="newSearch" onClick={handleNewSearch}>
            Create New Search
          </button>

          <button className="editSearch" onClick={handleEditSearch}>
            Edit Previous Search
          </button>
        </div>
      ) : (
        <p>Please <Link to="/Profile"> log in</Link> to manage searches</p>
      )}
    </div>
    </div>
    )
  }

  export default Result