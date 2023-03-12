import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])
  const [ships, setShips] = useState([])
  const [planetsNextPage, setPlanetsNextPage] = useState(null)
  const [planetsPrevPage, setPlanetsPrevPage] = useState(null)
  const [peopleNextPage, setPeopleNextPage] = useState(null)
  const [peoplePrevPage, setPeoplePrevPage] = useState(null)
  const [shipsNextPage, setShipsNextPage] = useState(null)
  const [shipsPrevPage, setShipsPrevPage] = useState(null)

  async function fetchPlanets(url) {
    const results = await fetch(url)
    const data = await results.json()
    const planetList = data.results
    setPlanets(planetList)
    setPlanetsNextPage(data.next)
    setPlanetsPrevPage(data.previous)
  }

  async function fetchPeople(url) {
    const results = await fetch(url)
    const data = await results.json()
    const peopleList = data.results
    setPeople(peopleList)
    setPeopleNextPage(data.next)
    setPeoplePrevPage(data.previous)
  }

  async function fetchShips(url) {
    const results = await fetch(url)
    const data = await results.json()
    const shipsList = data.results
    setShips(shipsList)
    setShipsNextPage(data.next)
    setShipsPrevPage(data.previous)
  }

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/?page=1')
  }, [])

  useEffect(() => {
    fetchPeople('https://swapi.dev/api/people/?page=2')
  }, [])

  useEffect(() => {
    fetchShips('https://swapi.dev/api/starships?/page=3')
  }, [])

  function handlePrevPlanetsPage() {
    if (planetsPrevPage !== null) {
      fetchPlanets(planetsPrevPage)
    }
  }

  function handleNextPlanetsPage() {
    if (planetsNextPage !== null) {
      fetchPlanets(planetsNextPage)
    }
  }

  function handlePrevPeoplePage() {
    if (peoplePrevPage !== null) {
      fetchPeople(peoplePrevPage)
    }
  }

  function handleNextPeoplePage() {
    if (peopleNextPage !== null) {
      fetchPeople(peopleNextPage)
    }
  }

  function handlePrevShipsPage() {
    if (shipsPrevPage !== null) {
      fetchShips(shipsPrevPage)
    }
  }

  function handleNextShipsPage() {
    if (shipsNextPage !== null) {
      fetchShips(shipsNextPage)
    }
  }

  return (
    
    <div className="App">
      <div className="category">
        <h1 className='corrects'>Planets:</h1>
        <div className="navigation-buttons buttons">
          <button onClick={handlePrevPlanetsPage} disabled={planetsPrevPage === null}>Previous Planets</button>
          <button onClick={handleNextPlanetsPage} disabled={planetsNextPage === null}>Next Planets</button>
        </div>
      </div>
      {planets.length > 0 && (
        <div>
          <p>{planets[0].name}</p>
        </div>
      )}
  
      <div className="category">
        <h1 className='corrects2'>Persons:</h1>
        <div className="navigation-buttons buttons1">
          <button onClick={handlePrevPeoplePage} disabled={peoplePrevPage === null}>Previous People</button>
          <button onClick={handleNextPeoplePage} disabled={peopleNextPage === null}>Next People</button>
        </div>
      </div>
      {people.length > 0 && (
        <div>
          <p>{people[0].name}</p>
        </div>
      )}
  
      <div className="category">
        <h1 className='corrects3'>Ships:</h1>
        <div className="navigation-buttons buttons2 ">
          <button onClick={handlePrevShipsPage} disabled={shipsPrevPage === null}>Previous Ship</button>
          <button onClick={handleNextShipsPage} disabled={shipsNextPage === null}>Next Ship</button>
        </div>
      </div>
      {ships.length > 0 && (
        <div>
          <p>{ships[0].name}</p>
        </div>
      )}
    </div>
    
  );
  
}

export default App
