import { useState } from 'react';
import axios from 'axios';
import SelectBar from './SelectBar';

const typeIDs = [
  { value: '1', label: 'soutěže' },
  { value: '2', label: 'týmy' },
  { value: '3', label: 'hráči jednotlivci' },
  { value: '4', label: 'hráči v týmech' }
];

const sportIDs = [
  { value: '1', label: 'Fotbal' },
  { value: '2', label: 'Tenis' },
  { value: '3', label: 'Basketbal' },
  { value: '4', label: 'Hokej' },
  { value: '5', label: 'Americký fotbal' },
  { value: '6', label: 'Baseball' },
  { value: '7', label: 'Házená' },
  { value: '8', label: 'Rugby' }
];

// handles whole search bar
const SearchBar = ({fetchedData}) => {
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);

  const [selectedTypeIDs, setSelectedTypeIDs] = useState([]);  // getting values from selectBoxes
  const [selectedSportIDs, setSelectedSportIDs] = useState([]);
  
  const fetchData = () => {
    const typeIDsItems = selectedTypeIDs.map(option => option.value).join(',');
    const sportIDsItems = selectedSportIDs.map(option => option.value).join(',');

    setLoading(true);

    axios.get(`https://s.livesport.services/api/v2/search?type-ids=${typeIDsItems}&project-type-id=1&project-id=602&lang-id=1&q=${searchInput}&sport-ids=${sportIDsItems}`)
    .then( (response) => {
      setData(response.data);
      setLoading(false);
      fetchedData(data);
    })
    .catch( (error) => {
      setLoading(false);
      alert(error.message);
    })
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleTypeIDChange = (items) => {
    setSelectedTypeIDs(items || []);
  }

  const handleSportIDChange = (items) => {
    setSelectedSportIDs(items || []);
  }

  return(
    <div>
      <input type="text" placeholder="Vyhledej" onChange={handleChange} value={searchInput} />
      <button id="search" onClick={fetchData}>Hledat</button>

      <div className="filter">
      <SelectBar options={typeIDs} onChange={handleTypeIDChange}/>
      <SelectBar options={sportIDs} onChange={handleSportIDChange}/>
      </div>

      {loading && <div>Načítám...</div>}
    </div>
  );
}

export default SearchBar;
