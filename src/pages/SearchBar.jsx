import { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  
  const fetchData = () => {
    axios.get(`https://s.livesport.services/api/v2/search?type-ids=TODO&project-type-id=1&
                project-id=602&lang-id=1&q=${searchInput}&sport-ids=TODO`)
    .then( (response) => {
      setData(response.data);
      setLoading(true);
    })
    .catch( (error) => {
      setError(error.message);
      setLoading(false);
    }, [])
  };

  const HandleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return(
    <div>
      <input type="text" placeholder="Vyhledej" onChange={HandleChange} value={searchInput} />
      <select multiple>
        <option value="1">Soutěže</option>
        <option value="2">Týmy</option>
        <option value="3">Hráči jednotlivci</option>
        <option value="4">Hráči v týmech</option>
      </select>

      <select multiple>
        <option value="1">Fotbal</option>
        <option value="2">Tenis</option>
        <option value="3">Basketbal</option>
        <option value="4">Hokej</option>
        <option value="5">Americký fotbal</option>
        <option value="6">Baseball</option>
        <option value="7">Házená</option>
        <option value="8">Rugby</option>
        <option value="9">Florbal</option>
      </select>
      <button className="search" onClick={fetchData}>Hledat</button>

      {loading && <div>Načítám...</div>}
      {error && alert(error)}
    </div>
  );
}

export default SearchBar;
