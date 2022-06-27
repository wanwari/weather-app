import { Alert, Col } from 'react-bootstrap';
import CardList from '../CardList/CardList';

const Visited = props => {

    console.log(props.data);
   
    const alert= (
        <Col sm={{span: 8, offset: 2}} xl={{span: 4, offset: 4}}>
            <div style={{marginTop: '50px'}}>
                <Alert variant='warning'>No History.</Alert>
            </div>
        </Col>
    );
    return(
        <div>
            {props.data.history.length > 0 ? <CardList data={props.data.history} /> : alert}
        </div>
    );
}

export default Visited;