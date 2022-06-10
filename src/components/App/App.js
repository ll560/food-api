import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Random from '../Random/Random';
import FoodInfo from '../FoodInfo/FoodInfo';


// Random receipts, 
// id, title, readyInMinutes, servings, sourceUrl, openLicense, image, imageType, summary

function App() {
  const [random, setRandom] = useState({})
  const [search, setSearch] = useState('')
  const [resultFood, setResultFood] = useState([])

  const handleOnClick = async () => {
    const baseUrl = 'https://api.spoonacular.com/recipes/random'
    const apiKey = '?apiKey=' + process.env.REACT_APP_API_KEY
    const random = await axios.get(baseUrl + apiKey)
    console.log(random.data.recipes[0])
    setRandom(random.data.recipes[0])
  }

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const baseUrl = 'https://api.spoonacular.com/food/menuItems/search'
    const apiKey = '?apiKey=' + process.env.REACT_APP_API_KEY
    const query = '&query=' + search
    const resultF = await axios.get(baseUrl + apiKey + query)
    setResultFood(resultF.data.menuItems)
  }

  return(
    <div>
      
      <div className='form'>
        <div className='text-primary'>
      <button type='submit' onClick={handleOnClick}>Generate Random Recipe</button>
        </div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='search' value={search} onChange={handleChange}></input>
        <button type='submit'>Check Menu Item</button>
      </form>

      </div>
      <Random random={random}/>
      <div className='container'>
      {resultFood.map(item => <FoodInfo item={item} />)}
      </div>
    </div>
  )
}

export default App;
