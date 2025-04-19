import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import './MainPage.css'

const MainPage = () => {

  const MyButton = () => {
      return(
        <Link to = "/detail/">
          <button className="detailButton" >Detail</button>
        </Link>
      );
  }

  const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const FetchData = () => {
      axios.get('https://s.livesport.services/api/v2/search?type-ids=${searchInput}')
      .then( (response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch( (error) => {
        setError(error.message);
        setLoading(true);
      })
    };

    const HandleChange = (e) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    const HandleSearch = () => {
      console.log("Vyhledávám:", searchInput);
      FetchData();

      if(loading) return <div>Loading...</div>;
      if(error) return <alert>{error}</alert>;
    };

  
    return(
      <div>
        <input type="text" placeholder="Vyhledej" onChange={HandleChange} value={searchInput} />
        <button className="search" onClick={HandleSearch}>Hledat</button>
      </div>
    );
  }
  
  return(
    <div>
      <h1>Výsledky</h1>
      <SearchBar/>
      <div className="Teams">
        <p>Zde bude tabulka</p>
        <MyButton/>
      </div>
    </div>
  );
}

export default MainPage