import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Main from './Main'
import AllData from './AllData'
import Show from './Show'

const App = () => {
  let [data, setData] = useState({hits: []})
  let [showData, setShowData] = useState({})

  
  useEffect(() => {
    const API_URL = `https://api.github.com/repos/facebook/react/issues?page=1&per_page=100`
    const getData = async () => {
      await axios.get(API_URL)
      .then(response => {
        const rData = response ? response.data : []
        console.log(rData)
        setData(rData)
      })
      .catch(err => console.log(err.message))
    }
    getData()
  }, [])

  const handleUpdate = (newIssue) => {
    setShowData(newIssue)
  }

  return (
    <div className="App">
      <h1>Want to Review some Issues?</h1>
        <Router>
            <Route path='/index' render={() => 
                <AllData  data={data} setIssue={handleUpdate}/>
            } />
            <Route path='/Show' render={() => 
                <Show issue={showData} />  
            } />
        </Router>
    </div>
  );
}

export default App;
