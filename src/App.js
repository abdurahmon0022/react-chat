import React, {useState, useEffect}from 'react'
//import {useHistory} from 'react-dom'


function App() {
  const [login, setLogin]= useState('')
  const [password, setPassword]= useState('')



  const auth = (data) => {
    data = {login, password}
    console.log('data', data)
    fetch('http://91.191.236.14:1600/api/auth/login', {
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(data)
    }).then(e => {
      console.log('e', e)
    })
  }

  async function logIn ()
  {
    console.log (login, password)
    let item = {login, password}
    let response = await fetch('http://91.191.236.14:1600/api/auth/login', {
      method: 'POST',
      headers: {
      
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    })
    if (response.status===204) {
      console.log(response);
      console.log('Успех:', JSON.stringify(response));
      return await response.json()      
      
    } else {
        return false
    }
    
  }

  const getProfile = () => {
    fetch('http://91.191.236.14:1600/api/profile', {
      method: 'GET'
    }).then(user => {
      console.log('user', user.json())
    })

  }

  return (
  <div className='wrap'>
    <h1>Log In</h1>
    <form>
      <input type={"text"} placeholder = "login" id="myLogin" onChange={(e) => setLogin (e.target.value)} className='form-control'></input>
      <br />
      <input type={"password"} placeholder = "password" id="myPassword" onChange={(e) => setPassword (e.target.value)} className='form-control'></input>
      <br />
    </form>
    <button onClick={auth}  className='btn'>Submit</button>
    <button onClick={getProfile}  >GetProfile</button>
    
  </div>
  );
}

export default App;
