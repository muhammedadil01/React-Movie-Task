import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Trending from './Trending';
import { Link, useLocation } from 'react-router-dom';
import Movies from './Movies';

function Headernav() {
  const [searchValue, setSearchValue] = useState('');
  const [moviesData, setMoviesData] = useState([]);
  const [showTrending, setShowTrending] = useState(true);

  const location = useLocation();
  const shouldShowImage = location.pathname === '/';

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    getMovieRequest(searchValue);
    setShowTrending(false);
  };

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?=&s=${searchValue}&apikey=e6f6bc16`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMoviesData(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest();
  }, [searchValue]);
  console.log(moviesData);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="#action1">Hero</Nav.Link>
              <NavDropdown title="Movies Category" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/action">Action</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/drama">Drama</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/animation">Animation</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/sci-fiction">Science Fiction</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/horror">Horror</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchValue}
                onChange={handleChange}
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {
        shouldShowImage && showTrending && <Trending />
      }
      
      {
        moviesData.length > 0 && <Movies movieitems={moviesData} />
      }
    </div>
  );
}

export default Headernav;