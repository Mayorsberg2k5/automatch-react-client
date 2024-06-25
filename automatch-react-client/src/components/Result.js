import React from 'react';

const Result = ({ search }) => {
    // Assuming search is an object with properties like carMake, carModel, etc.
    const { carMake, carModel, carFeature, carType, carBudget } = search;

    return (
        <div className="pagebackground">
            <div className="resultspage">
                <div>
                    <h1>Your Match</h1>
                </div>

                <div className="resultsbox">
                    <div className="result">
                        <div>
                            <a href={`https://www.google.com/search?q=${carMake}+${carModel}`}>
                                <img src={`./${carMake.toLowerCase()}.jpg`} alt={carMake} className="Image-size" />
                            </a>

                            <div>
                                <i>
                                    Your match is a {carMake} {carModel} because {carFeature} was important to you and you wanted a {carType} within a budget of {carBudget}.
                                </i>

                                <div className="nextCar">
                                    <a href="https://www.cargurus.com">Click Here to buy your next car</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="deleteSearch">
                    Delete Search
                </button>

                <button className="newSearch">
                    Create New Search
                </button>

                <button className="editSearch">
                    Edit Previous Search
                </button>
            </div>
        </div>
    );
}

export default Result;