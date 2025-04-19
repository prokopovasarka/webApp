import { Link } from 'react-router-dom';
import { useState } from 'react';
import './MainPage.css'

const MainPage = () => {
    const MyButton = () => {
        return(
          <Link to = "/detail/">
            <button>Detail</button>
          </Link>
        );
    }

    const SearchBar = () => {
      const [SearchInput, SetSearchInput] = useState("");

      const HandleChange = (e) => {
        e.preventDefault();
        SetSearchInput(e.target.value);
      };

      const HandleSearch = () => {
        console.log("Vyhledávám:", SearchInput); // Zde by byl kód pro vyhledávání (např. filtrování nebo volání API)
      };

      return(
        <div>
          <input type="text" placeholder="Vyhledej team" onChange={HandleChange} value={SearchInput} />
          <button class="search" onClick={HandleSearch}>Hledat</button>
        </div>

      );
    }

    
    return(
      <div>
        <h1>Výsledky</h1>
        <SearchBar/>
        <div class="Teams">
          <p>Zde bude tabulka</p>
          <MyButton/>
        </div>
      </div>
    );
}

export default MainPage