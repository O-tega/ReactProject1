import Cars from './components/Cars';
import Food from './components/Food';
import Phone from './components/Phone'
import Profile from './components/Profile'
import './App.css';



function App() {
  // <div>
  //   <Food />
  //   <Phone/>
  // </div>
  
  const data = {
    carList: [
      {
        name: 'Rolls Royce',
        model: 'Sweptail'
      },
      {
        name: 'Mercedes Benz',
        model: 'G33',
      },
      {
        name: 'Bentley',
        model: 'Bentayga',
      },
      {
        name: 'BMW',
        model: 'inext',
      },
      {
        name: 'Lamborghini',
        model: 'Urus',
      },
      {
        name: 'Porche',
        model: '911',
      },
    ]
  }

  const foodData = {
    foodList: [
        {
          name: 'rice',
          price: '$45',
        },
        {
          name: 'Beans',
          price: '$95',
        },
        {
          name: 'spagehtti',
          price: '$145',
        },
        {
          name: 'goat meat pepper soup',
          price: '$25,000',
        },
        {
          name: 'jollof rice',
          price: '$30',
        },
        {
          name: 'melon soup',
          price: '$45',
        },
      ]

  }
  const phoneData = {
    phoneList : [
      {
        name: 'Samsung A11',
        quantity: 34,
        price: '$50'
      },
      {
        name: 'Itel p33 pro',
        quantity: 100,
        price: '$25'
      },
      {
        name: 'Iphone 12 S pro',
        quantity: 13,
        price: '$900',
      },

      {
        name: 'Phone 1',
        quantity: 34,
        price: '$400',
      },
      {
        name: 'Phone 2',
        quantity: 100,
        price: '$600',
      },
      {
        name: 'Phone 3',
        quantity: 13,
        price: '$300'
      },
    ]
  }

  return (
  
  <div>
      <Cars list = {data.carList} />
      <Food foodlist = {foodData.foodList}/>
      <Phone phonelist = {phoneData.phoneList}/>


      <div className = "d-flex">
      <Profile firstname ="John" lastname="Doe" age={25} hobbies = {['reading', 'watching movies', 'playing football']} className = "bg-red"/>

      <Profile firstname ="Jane" lastname="Doe" age={29} hobbies = {['Singing', 'reading', 'trying outfits']} className = "bg-blue"/>
      </div>
    </div>
    
  );
}

export default App;
