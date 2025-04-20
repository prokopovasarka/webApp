import { Link } from 'react-router-dom';
import { useState } from 'react';
import './MainPage.css'
import SearchBar from './SearchBar'

const MainPage = () => {
  const [dataList, setDataList] = useState([]);

  const handleData = (foundData) => {
    setDataList(foundData);
  }

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
      <SearchBar fetchedData={handleData}/>

      <div>
        {dataList.length === 0 ? ( <div className="dataList"><p>No results</p></div> ) : (
          dataList.map((entity) => (
            <div key={entity.id} className="dataList">
              <h3>{entity.name}</h3>
              <p>{entity.description}</p>
              <Link to={`/detail/${entity.id}`}>
                <button className="detailButton">Detail</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MainPage
