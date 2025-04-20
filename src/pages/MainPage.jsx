import { Link } from 'react-router-dom';
import { useState } from 'react';
import './MainPage.css'
import SearchBar from './SearchBar'

const groupBySport = (data) => {
  return data.reduce((result, entity) => {
    const sportId = entity.sport.id;
    const sportName = entity.sport.name;

    if(!result[sportId]) {
      result[sportId] = {
        sportName: sportName,
        entities: [],
      };
    }
    result[sportId].entities.push(entity);
    return result;
  }, {});
};

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

  const groupedData = groupBySport(dataList);
  
  return(
    <div>
      <h1>Výsledky</h1>
      <SearchBar fetchedData={handleData} />

      <div>
        {Object.keys(groupedData).length === 0 ? (
          <div className="dataList"><p>No results</p></div>
        ) : (
          Object.keys(groupedData).map((sportId) => {
            const sport = groupedData[sportId];
            return (
              <div key={sportId}>
                <h2 className="dataTitle">{sport.sportName}</h2>
                {sport.entities.map((entity) => (
                  <div key={entity.id} className="dataList">
                    <h3>{entity.name}</h3>
                    <img
                      src={`https://www.livesport.cz/res/image/data/TODO`}
                      alt={entity.name}
                      className="icon"
                    />
                    <Link to={`/detail/${entity.id}`}>
                      <button className="detailButton">Detail</button>
                    </Link>
                  </div>
                ))}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default MainPage
