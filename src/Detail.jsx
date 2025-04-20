import { useLocation, useNavigate } from 'react-router-dom';
import './Detail.css';

const Detail = () => {
    const {entity} = useLocation().state || {};
    const navigation = useNavigate();

    const findImgPath = () => {
        const imgPath = entity.images.find(obj => obj.variantTypeId === 15);
    
        if(imgPath) return `https://www.livesport.cz/res/image/data/${imgPath.path}`;
    
        return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s`;
    }

    return(
        <div className="detail">
            <div className="detailContent">
                <h1>{entity.name}</h1>
                <img
                    src={findImgPath()}
                    alt={entity.name}
                    className="detailIcon"
                />
                <h3>Země: {entity.defaultCountry.name}</h3>
                <h3>Gender: {entity.gender.name}</h3>
                <button className="goBack" onClick={() => navigation(-1)}>GO BACK</button>
            </div>
        </div>
    );
}

export default Detail