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

  const groupedData = groupBySport(dataList);

  const findImgPath = (entity) => {
    const imgPath = entity.images.find(obj => obj.variantTypeId === 15);

    if(imgPath) return `https://www.livesport.cz/res/image/data/${imgPath.path}`;

    return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s`;
  }
  
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
                    <img
                      src={findImgPath(entity)}
                      alt={entity.name}
                      className="icon"
                    />
                    <h3>{entity.name}</h3>
                    <Link to={`/detail/${entity.id}`} state={{entity}}>
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
