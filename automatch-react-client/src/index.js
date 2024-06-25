import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// const  select_button = document.querySelector(".type_button"),
//     items = document.querySelectorAll(".item");

// select_button.addEventListener("click", () => {
//     select_button.classList.toggle("open");

// });

// items.forEach(item => {
//     item.addEventListener("click", () => {
//         item.classList.toggle("checked")

//         console.log(checked)

//         let checked = document.querySelectorAll(".checked"),
//             type_text = document.querySelector(".type_text");


//             console.log(checked, type_text)

            
//             if(checked && checked.length>0) {
//                 type_text.innerText = `${checked.length} Selected`
//             }
//             else {
//                 type_text.innerText =("Language Selected")
//             }

//     })

// });

// let scrollpage = window.onscroll = function() {
//   // Get the current scroll position
//   let scrollPosition = window.scrollY || document.documentElement.scrollTop;

//   // Define the position at which to trigger the redirect
//   let scrollThreshold = 1; // Adjust this value as needed

//   // Check if the scroll position exceeds the threshold
//   if (scrollPosition > scrollThreshold) {
//       // Redirect to the new website
//       window.location.href = "./form.html";
//   }
// };


// setTimeout(scrollpage, 1)
