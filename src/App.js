import './App.css';
import {BrowserRouter as Router,Link, Route,Routes } from 'react-router-dom'
import Page from './components/Page'
import Dashboard from './components/Dashboard'
import Data from './components/Data'
import styled from 'styled-components'

const Container=styled.div`
  margin:0 auto;
  width: min(95%,70rem);
  /* border:1px solid red; */
  height:100vh;
`
const Text=styled.div`
  text-align:center;
  margin-bottom:3px;
`
const Navigate=styled.div`
  display:flex;
  justify-content:center;
  gap:10px;
`


const LinkItem = styled.button`
  border-radius: 3px;
  border: 1px solid black;
  padding: 5px 10px;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  color: black;
  margin-bottom:15px;
  text-decoration:dotted;



`;

function App() {
  return (
    <Container >
        <Text>React Polling</Text>


        <Router>
          <Navigate>

            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <LinkItem style={{ paddingLeft: 13 }}>DashBoard</LinkItem>
            </Link>
            <Link to="/data" style={{ textDecoration: 'none' }}>
              <LinkItem style={{ paddingLeft: 13 }}>Data</LinkItem>
            </Link>


          </Navigate>
              <Routes>
                <Route exact path="/" element={<Page/>}/>
                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route path="/data" element={<Data/>}/>
              </Routes>

        </Router>
      </Container>
  );
}

export default App;
