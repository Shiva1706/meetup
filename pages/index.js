import React,{useContext} from "react";
import { Context } from "../context";
import router, { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {
  const{username, secret, setUsername, setSecret}= useContext(Context);

  const router =useRouter();

  function onSubmit(e){
    e.preventDefault()

    if(username.length===0 || secret.length===0) return

    axios.put(
      'https://api.chatengine.io/users/', 
      {username, secret},
      {headers:{"Private-key":'2c5f88e8-23b8-4b30-b2e1-414cdcd9d4d3'}}
    )
    .then(r=> router.push('/chats'))
  }

  return (
  <div className="background">
    <div className="auth-container">

      <form className="auth-form" onSubmit={e=>onSubmit(e)}>
        <div className="auth-title">MeetUp</div>

        <div className="input-container">
          <input placeholder="Email" className="text-input" type="email"
            onChange={e=>setUsername(e.target.value)}
          />

          <input placeholder="Password"  className="text-input" type="password"
            onChange={e=>setSecret(e.target.value)}  
          />
        </div>

        <button type="submit" className="submit-button">Login/Signup</button>
      </form>
    </div>
  </div>
  )
}
