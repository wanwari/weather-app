import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from '../Card/Card';
import Page from './Page';

const CardList = props => {

    const numOfPages = Math.ceil(props.data.length/3);
    const [currentPage, setCurrentPage] = useState(1);
    const [citiesToShow, setCitiesToShow] = useState([]);

    const pageClicked = val => {
        setCurrentPage(val);
    }

    useEffect(() => {
        console.log(currentPage);
        let max = (currentPage * 3)-1;
        let min = max - 2;
        console.log(min, max)
        let tmpCities = [];
        for (let i = min; i <=max; i++) {
            if (props.data[i]) {
                tmpCities.push(props.data[i]);
            }
        }
        setCitiesToShow(tmpCities);
    },[props.data, currentPage]);

    return(
        <div>
            <Row>
                <Col sm={{span: 2, offset: 4}} style={{marginTop: '25px'}}>
                    <div style={{float: 'none', margin: '0 auto'}}>
                            <Page numOfPages={numOfPages} activePage={currentPage} pageClicked={pageClicked}/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{span: 8, offset: 2}} xl={{span: 4, offset: 4}} style={{marginBottom: '25px'}}>
                    {citiesToShow.map((currentCity) => (currentCity ? <Card key={currentCity.id} city={currentCity} /> : null))}
                </Col>

            </Row>
        </div>
    );
}

export default CardList;