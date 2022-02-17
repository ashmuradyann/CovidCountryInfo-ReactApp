import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesForm from './CountriesForm';
import countriesList from './countriesList.js';
import CountriesInfo from './CountriesInfo';

function App() {

  const [country, setCountry] = useState('');
  const [resultData, setResultData] = useState('');

  useEffect(() => {
          axios.get(`https://corona-api.com/countries/${country.abbr}`)
               .then(results => {
                 console.log(results.data.data)
                 setResultData(results.data.data)
               })
               .catch(err => {
                 console.log(err)
               })
  }, [country.abbr]);

  return (
    <div>
        <CountriesForm data={countriesList} onAdd={(name, bool) => bool 
        ? setCountry({abbr: name, bool: bool}) 
          : setCountry({errMsg: name, bool: bool})} />
        {country.bool ? <CountriesInfo resultData={resultData} /> : country.errMsg}
    </div>
  )
}

export default App;