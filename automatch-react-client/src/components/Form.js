
import { FaChevronDown } from "react-icons/fa";
import React from 'react'
import { useNavigate } from "react-router-dom";
import  { useEffect }  from 'react'
import  { useState }  from "react"



const Form = () => {
const navigate = useNavigate();
const [search, setSearch] = useState([])


const submitHandler  = (e) => {
  e.preventDefault();
  const body = {
      Feature: e.target.Feature.value,
      Type: e.target.Type.value,
      Budget: e.target.Budget.value,
  }
  // useEffect(() => {
    fetch("http://localhost:8080/api/search/all", {
      method: "POST",
      body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((search) => {setSearch(search.data)})
    .catch((error) => console.log(error));
  // }, []);

  } 
 

//     fetch("http://localhost:8080/api/search/create/new", {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body),
//         })
//         .then((response) => response.json())
//         .then((result) => {console.log("you have successfully created an entry")})
//         .catch((error) => {console.log(error);});

//         console.log(body);
// }



  
    return (
<div className="pagebackground">
  <form onSubmit = {submitHandler}>
    
    <div className="type_container"> 
            <select className="select-box"
            name="Feature" 
            id="Feature" 
            required>
                <option value="" default disabled>Select a feature</option>
                <option value="Affordability">Affordability</option>
                <option value="Luxury/Look">Luxury/Look</option>
                <option value="Fuel-Efficient">Fuel-Efficent</option>
                <option value="Electric">Electric</option>            
            </select>
            <div className ="icon-container"> 
            <FaChevronDown />
            </div>
    </div>

    <div className="type_container1"> 
            <select className="select-box"
            name="Type" 
            id="Type" 
            required>
                <option value="" default disabled> Select a car type</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="All-Terrain">All-Terrain</option>
                <option value="Sport">Sport</option> 
                <option value="Truck">Truck</option>               
            </select>
            <div className ="icon-container1"> 
            <FaChevronDown />
            </div>
    </div>

    <div className="type_container1"> 
            <select className="select-box"
            name="Budget" 
            id="Budget" 
            required>
                <option value="" default disabled> Select your budget</option>
                <option value="$20,001 - $25,000">$20,001 - $25,000</option>
                <option value="$25,001 - $30,000">$25,001 - $30,000</option>
                <option value="$30,001 - $49,999">$30,001 - $49,999</option> 
                <option value="$50,000+">$50,000+</option>                
            </select>
            <div className ="icon-container1"> 
            <FaChevronDown />
            </div>
    </div>

    <div>
      <input 
      type="Submit"
      className="formSubmit">
      </input>
    </div>

  </form>

</div>

    )
  }

  export default Form