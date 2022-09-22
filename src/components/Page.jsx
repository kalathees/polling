import React from 'react'
import styled from 'styled-components'
import {useState} from 'react';
const Container=styled.div`
  margin:0 auto;
  width: min(95%,70rem);
  /* border:1px solid red; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height:60vh;

`
const Wrapper = styled.div`
display:flex;
justify-content:center;

`;

const Section = styled.div`
display:flex;
flex-direction:column;
gap:10px;



`;

const Button=styled.button`
border:none;
color: black;
padding: 10px 60px;
border-radius: 5px;
border: 1px solid black;
width:100%;
cursor:pointer;




`

const LoginSuccess=styled.div`

display:flex;
justify-content:center;


`



const Input = styled.input`
  border: 1px solid black;
  border-radius: 3px;
  padding: 2px;
  background-color: transparent;
  /* width: 100%; */
  color: black;
  width:100%;
`;

function Page() {

  const [email,setEmail]=useState("");
  const [error,setError]=useState("");
  const [loginSuccess,setLoginError]=useState("fail");



  const checkMail=(mail)=>{
      return /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(mail)
  }

  const verifyMail=(event)=>{

    if(!checkMail(event.target.value)){
      return setError("Email is inValid")
    }else {
      setError("Good")
    }

    setEmail(event.target.value)

  }

  const submitData=(event)=>{

      event.preventDefault();
    if(email && error==="Good"){
      setLoginError("pass")
      console.log('form submited')
    }
    else{
      setLoginError("fail")
    }



  }


  return (
    <Container>

      <Wrapper>
        {loginSuccess ==="fail" ?  <Section>

            <Input placeholder="Email" onChange={(e)=>verifyMail(e)} />
            {error && error}
            <Button onClick={(e)=>submitData(e)}>Submit Data</Button>


          </Section> : <LoginSuccess>Login Successfull</LoginSuccess>}
      </Wrapper>




    </Container>
  )
}

export default Page