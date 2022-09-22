import React from 'react'
import styled from 'styled-components'
import {useState,useEffect} from 'react';



const Container=styled.div`
  margin:0 auto;
  width: min(95%,70rem);
  /* border:1px solid red; */
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  height:60vh;
  overflow:auto;

`
const Button = styled.button`

background-color: transparent;
border:1px solid black;
color:blue;
border-radius: 5px;
padding: 2px 8px;
cursor: pointer;
position:absolute;
left:50;
right:50;

`
const Datasection=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
border:1px solid grey;




`


const TopSection=styled.div`
display:flex;
justify-content:center;
gap:10px;



`
const Head=styled.h1`

font-size: 32px;
text-align:center;

`


const Text=styled.h1`

font-size: 24px;


`

function Data() {
  const [postData,setPostData]=useState([]);
  const [polling,setPolling]=useState(0)
  const [pollStop,setPollStop]=useState(false)
  console.log(polling)
  console.log(pollStop)


    useEffect(() => {
        fetchData()

        const pollData=setInterval(fetchData,10000);

      return () => {
        console.log('clean up')
        clearTimeout(pollData)
        setPolling(0)
        setPollStop((prev)=>!prev)
      }
  }, [])



  const fetchData=async()=>{
        setPolling(prev=>prev+1)
        const res=await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await res.json();
        setPostData(data)
        console.log(data)
  }

  const polledData=postData.map((userDetail)=>{
    let {title,id}=userDetail;
    return(
      <>
        <Datasection>
            <Text>{id}</Text>
            <Text>{title}</Text>
        </Datasection>
      </>

    )
})
  return (
    <Container>
      <TopSection>
        <Head>Polling Rate:{polling}</Head>
        <Button onClick={()=>setPollStop(!pollStop)}>Stop Polling</Button>
      </TopSection>

        {pollStop && polledData}

    </Container>
  )
}

export default Data