import { useState} from 'react'
import {ChaatInput}from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css'

    

   
    

    function App(){
         const [chatMessages,setChatMessages]=useState([{
      message:' hello chatbot',
      sender:'user',
      id:'id1'
    },{
      message:'Hi I am a Bot!',
      sender:'robot',
       id:'id2'
    },{
      message:'can you get me todays date?',
      sender:'user',
       id:'id3'
    },{
      message:'Today is 25 February',
      sender:'robot',
       id:'id4'
    }]);
    // const[chatMessages,setchatMessages]=array;
    // const chatMessages=array[0];
    // const setChatMessages=array[1];
      return(
       <div className="app-container">
           
            <ChatMessages 
            chatMessages={chatMessages}
            />

             <ChatInput
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            />
            
       </div>
      )
    }
export default App
