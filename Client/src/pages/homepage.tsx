import socket from "../socket";
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import logo from "/logo.svg"

export default function Homepage(){
    const [inputVal, setInputVal] = useState("");
    
    function handleip(e: React.ChangeEvent<HTMLInputElement>){
        setInputVal(e.target.value);
    }

    
    
const navigate = useNavigate();

const joinR = () => {
  const roomID = inputVal.trim();
  if (!roomID) return;

let ackCalled = false;
  try {
    socket.emit("room-join", { room: roomID }, (res?: { ok?: boolean }) => {
      ackCalled = true;
      console.log("room-join ack:", res);
      if (res?.ok) {
        navigate(`/chatroom`, { state: { room: roomID } });
      } else {

        console.warn("room-join ack missing/false, navigating anyway");
        navigate(`/chatroom`, { state: { room: roomID } });
      }
    });
  } catch (err) {
    console.error("emit error:", err);
    navigate(`/chatroom`, { state: { room: roomID } });
  }


  setTimeout(() => {
    if (!ackCalled) {
      console.warn("no ack received, navigating fallback");
      navigate(`/chatroom`, { state: { room: roomID } });
    }
  }, 1500);
};

    function fire(e: React.KeyboardEvent<HTMLInputElement>){
        if(e.key == 'Enter'){
            joinR()
        }

    }



    
    return(
        <><div className="flex flex-col items-center justify-center">
            <div>
                <img src={logo} alt=""  className="h-auto w-[40vw] mt-[6vh]"/>
           </div>        
           <div>

              <input className="border-3 size-4 border-purple-800 mt-[16vh] w-[50vw] h-10 rounded-4xl pl-5 outline-0 hover:border-purple-600 focus:border-purple-400" 
              type="text"
              onChange={handleip}
              onKeyDown={fire}
              
              />
           </div>
        </div>
            
        </>
    )
}

