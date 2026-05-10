 import RobotProfileImage from '../assets/download.png'
import UserProfileImage from '../assets/doctor.jpg'
import './ChatMessage.css'
 
 
 
 export function ChatMessage({message,sender}){
      // const message=props.message;
      // const sender=props.sender;
        // const{message,sender}=props;  //destructuring


      // if(sender==='robot'){
      //   return (
      //     <div>
      //       <img width='50'  src="download.png" />
      //       {message}
           
      //     </div>
      //   )
      // }

      return (
        <div className={
          sender==='user'
          ? 'chat-message-user' 
          : 'chat-message-robot'
        }>
          {sender==='robot' && 
           (<img src={RobotProfileImage} className="chat-message-profile"
          /> )}
           <div className="chat-message-text">
          {message}
          </div> 
          {sender==='user'&& 
           (<img src={UserProfileImage} className="chat-message-profile"
             />)}
          
        </div>
      )
    }
