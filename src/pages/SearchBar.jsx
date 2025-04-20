import { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  
  const fetchData = () => {
    axios.get(`https://s.livesport.services/api/v2/search?type-ids=${searchInput}`)
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
      <button className="search" onClick={fetchData}>Hledat</button>

      {loading && <div>Načítám...</div>}
      {error && <div>Chyba: {error}</div>}
    </div>
  );
}

export default SearchBar;
