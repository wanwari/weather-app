import React, { useEffect, useState } from "react";
import extractData from '../../Networking/ProcessData';
import SearchResults from '../SearchResults/SearchResults'
import { getGeoWeather, getLocationWeather } from '../../Networking/GetData';
import { Form, Row, Col, Button } from "react-bootstrap";

const Search = () => {

    const [searchInput, setSeachInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    let searchInputText = React.useRef(); 

    const inputChanged = event => {
        if (event.key === 'Enter')
            setSeachInput(event.target.value);
        else if (event === 'Clicked')
            setSeachInput(searchInputText.current.value);
    }

    useEffect(() => {
        if (searchInput === '') {
            navigator.geolocation.getCurrentPosition((pos) => {
                getGeoWeather(pos.coords.latitude, pos.coords.longitude).then((data) => {
                    setSearchResults(extractData(data, "current"));
                });
            });
        } else if (searchInput !== '') {
            getLocationWeather(searchInput).then((data) => {
                setSearchResults(extractData(data, "item"));
            });
        }
    }, [searchInput]);

    return(
        <div>
            <Row>
                <Col sm={{span: 8, offset: 2}} xl={{span: 4, offset: 4}}>
                    <Form.Group>
                        <Form.Row>
                            <Form.Control 
                                ref={searchInputText}
                                onKeyPress={inputChanged}
                                size="lg" 
                                type="text" 
                                placeholder="Enter City" 
                                style={{width: '80%'}}
                            />

                            <Button style={{width: '20%'}} onClick={() => inputChanged('Clicked')} variant="secondary">Search</Button>

                        </Form.Row>
                    </Form.Group>
                </Col>
            </Row>

            {searchResults.length > 0 ? <SearchResults data={searchResults} /> : null}
        </div>
    );
}

export default Search;