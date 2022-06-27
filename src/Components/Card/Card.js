import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { HistoryContext } from '../../Context/History';
import CardStyle from './CardStyle';

const Card = props => {

    const history = useHistory();
    const {visitedCities, setVisitedCities} = useContext(HistoryContext);

    const cardClicked = () => {
        if (!visitedCities.history.includes(props.city))
            setVisitedCities({history: [...visitedCities.history, props.city]});
        
        history.push({
            pathname: '/visited/' + props.city.id,
            state: { city: props.city } 
        });
    }

    return(
        <div onClick={cardClicked}>
            <CardStyle city={props.city}/>
        </div>
    );
}

export default Card;