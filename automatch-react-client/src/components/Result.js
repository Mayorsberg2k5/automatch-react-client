import React from 'react';
import { useNavigate } from 'react-router-dom';



const Result = ({ searchResult, isLoggedIn }) => {
const navigate = useNavigate();

  // Check if searchResult is available
  if (!searchResult) {
    return <div className="resultspage">
    
      <div 
        className="result">Loading..... No matching car found for the selected criteria 
      </div>

        </div>
  }

  const { make, model, Feature, Type, Budget } = searchResult;

  const handleDeleteSearch = () => {
    // Implement delete search functionality here
    console.log('Search deleted');
    navigate("/Form")
  };

  const handleCreateNewSearch = () => {
    // Implement create new search functionality here
    console.log('Create new search');
    navigate("/Form")
  };

  return (
    <div className="pagebackground">
      <div className="resultspage">
        <div>
          <h1>Your Match</h1>
        </div>
        <div className="resultsbox">
          <div className="result">
            <div>
              <a
                href={`https://www.google.com/search?q=${make}+${model}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {`${make} ${model}`}
              </a>
              <div>
                <i>
                  Your match is a {make} {model} because {Feature} was important to you and you wanted a {Type} within a budget of {Budget}
                </i>
                <div className="nextCar">
                  <a href="https://www.cargurus.com" target="_blank" rel="noopener noreferrer">
                    Click Here to buy your next car
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isLoggedIn ? (
          <>
            <button className="deleteSearch" onClick={handleDeleteSearch}>
              Delete Search
            </button>

            <button className="newSearch" onClick={handleCreateNewSearch}>
              Create New Search
            </button>
          </>
        ) : null}

      </div>
    </div>
  );
};

export default Result;