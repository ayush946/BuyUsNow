import React from "react";
import {InputGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBars, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'

import "./bar.css";

function Bar() {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth <= 768;
            setIsMobile(ismobile);
        }, false);
    }, []);

    return (
        <div className="bar-container">
            <div className="part-1">BookUsNow</div>
            <div className="part-2">
                { isMobile ? <></>:( <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn btn-dark btn-sm custom-dropdown">
                    <FontAwesomeIcon icon={faBars} /> Category
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>)}
                
                {isMobile ? (
                    <div>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                ) : (
                    <div>
                        <Form className="d-flex">
                            <InputGroup style={{width:'20rem'}}>
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                className="me-2"
                                />
                                <Button variant="" type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </InputGroup>
                        </Form>
                    </div>
                )}
                <div>
                    {isMobile ? <FontAwesomeIcon icon={faHeart} /> : 'Favorite'}
                </div>
                <div>
                    {isMobile ? <FontAwesomeIcon icon={faUser} /> : <Button variant='btn btn-outline-secondary'> Sign In</Button>}
                </div>
            </div>
        </div>
    );
}

export default Bar;
