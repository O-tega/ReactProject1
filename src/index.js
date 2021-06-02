import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const carList = [
//   {
//     name: 'Rolls Royce',
//     model: 'Sweptail'
//   },
//   {
//     name: 'Mercedes Benz',
//     model: 'G33',
//   },
//   {
//     name: 'Bentley',
//     model: 'Bentayga',
//   },
//   {
//     name:'BMW',
//     model: 'inext',
//   },
//   {
//     name:'Lamborghini',
//     model: 'Urus',
//   },
//   {
//     name:'Porche',
//     model: '911',
//   },
// ];

// function Cars() {
//   let cars = carList.map((element) =>{
//     return <li>name: {element.name}</li>;
//   });
//   return(
//     <div id >
//       <h1>My cars {'My name is Tega'}</h1>
//       <ol>{cars}</ol>
//     </div>
//   );
// }

// reactDom.render(<Cars/>, document.getElementById('cars'));