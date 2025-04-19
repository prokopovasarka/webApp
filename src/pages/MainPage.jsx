import { Link } from 'react-router-dom';
import './MainPage.css'
import SearchBar from './SearchBar'

const MainPage = () => {

  const MyButton = () => {
      return(
        <Link to = "/detail/">
          <button className="detailButton" >Detail</button>
        </Link>
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
