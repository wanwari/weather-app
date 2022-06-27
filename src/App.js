import React, { useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import { HistoryContext } from './Context/History';
import Search from './Components/Search/Search';
import DetailedCity from './Components/DetailedCity/DetailedCity';
import Visited from './Components/Visited/Visited';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap'

const App = () => {

    const [visitedCities, setVisitedCities] = useState({history: []});
    const url1 = visitedCities.history[0] ? '/visited/' + visitedCities.history[0].id : null;
    const link1 = (visitedCities.history[0] ? <Link to={{pathname: url1, state: {city: visitedCities.history[0]}}}>{visitedCities.history[0].cityName}, {visitedCities.history[0].countryCode}</Link> : null)
    const url2 = visitedCities.history[1] ? '/visited/' + visitedCities.history[1].id : null;
    const link2 = (visitedCities.history[1] ? <Link to={{pathname: url2, state: {city: visitedCities.history[1]}}}>{visitedCities.history[1].cityName}, {visitedCities.history[1].countryCode}</Link> : null)
    const url3 = visitedCities.history[2] ? '/visited/' + visitedCities.history[2].id : null;
    const link3 = (visitedCities.history[2] ? <Link to={{pathname: url3, state: {city: visitedCities.history[2]}}}>{visitedCities.history[2].cityName}, {visitedCities.history[2].countryCode}</Link> : null)
    const white = {color: 'white'};
    const test = '&rsquo;/posts&rsquo;&nbsp;&nbsp';
    return(
        <Container fluid >
            <BrowserRouter>
                <Row>
                    <Col style={{padding: '0'}}>
                    <Navbar bg="dark" variant="dark" expand="md" style={{marginBottom: '25px'}}>
                        <Navbar.Brand><Link to='/' style={white}>Wiesa Anwari - Assignment 2</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="" id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link> <Link to='/' style={white}>Search</Link> </Nav.Link>
                            <NavDropdown title="History" id="basic-nav-dropdown">
                            {link1 ? (
                                <div>
                                <NavDropdown.Item>{link1}</NavDropdown.Item>
                                <NavDropdown.Item>{link2}</NavDropdown.Item>
                                <NavDropdown.Item>{link3}</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Nav.Link> <Link to='/visited'>View All</Link> </Nav.Link></NavDropdown.Item>
                                </div>
                            ) : <span style={{paddingLeft: '10px'}}>No History</span>}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                    </Col>
                </Row>
                
                <HistoryContext.Provider value={{visitedCities, setVisitedCities}}>
                    <Switch>
                        <Route exact path='/' render={() => <Search />} />
                        <Route exact path={test} render={() => <Search />} />
                        <Route exact path='/visited' render={() => <Visited data={visitedCities} />}/>
                        <Route path='/visited/:id' component={() => <DetailedCity />}/>
                        <Route render={() => (<h1>Error 404! Page Not Found!</h1>)} />
                    </Switch> 
                </HistoryContext.Provider>
            </BrowserRouter>
        </Container>
    );
}

export default App;