import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import React from 'react';
import axios from 'axios';

function App() {
  const listOfDatas = [];
  const [errormessage, setErrorMessage] =useState(null);


  const postData = async function(e){

    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const published = document.getElementById('published').value;

    await axios.post('/tutorials', {title, description, published}).then(data =>{
      // console.log(data)
      // data.data.forEach(({title, description}, key)=>{
      //   listOfDatas.push(<li key={key+1}> {title} </li>)
      // })
      console.log(data);

      
        listOfDatas.push(<li key={1}> {data.data.title} </li>)
    

      // setErrorMessage(data.data);
    }).catch(err => console.log(err));
  }
  
  const getData = async function(){

    await axios.get('api/tutorials').then(data =>{
      console.log(data.data)

      data.data.forEach(({title, description}, key)=>{
        listOfDatas.push(<li key={key+1}> {title} </li>)
      });

      setErrorMessage(data.data)

    }).catch(err => console.log(err));
  }
  
  if(errormessage)
    errormessage.forEach(({title, description}, key)=>{
      listOfDatas.push(<li key={key+1}> {title} </li>)
    });

  

  return (
    <div className="App">

      <form action="/newdata" onSubmit={postData}>
        <label htmlform="fname">Title:</label><br/>
        <input type="text" id="title" name="title" /><br/>
        <label htmlform="lname">Description:</label><br/>
        <input type="text" id="description" name="description"/><br/>
        <label htmlform="lname">published:</label><br/>
        <input type="text" id="published" name="published"/><br/>
        <input type="submit" value="Submit"/>
      </form> 

      <p>If you click the "Submit" button, the htmlFormm-data will be sent to a page called "/tutorials".</p>


      <button onClick={getData}>Fetch</button>
      <ul>
        {listOfDatas}
      </ul>
      
    </div>
  );
}

export default App;