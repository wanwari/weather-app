import Map from "../Map/Map"
import CardList from "../CardList/CardList"

const SearchResults = props => {
    return(
        <div>
            <Map data={props.data} zoom={4}/>
            <CardList data={props.data} />
        </div>
    );
}

export default SearchResults;