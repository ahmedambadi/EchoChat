import socket from "../socket";
import { useState } from "react"
import MsgDash from "../components/msgDash"
import { useLocation } from "react-router-dom";

export default function Chatui() {
    const { state } = useLocation();
    const [inputVal, setInputVal] = useState("");
    
    function handleip(e: React.ChangeEvent<HTMLInputElement>){
        setInputVal(e.target.value);
    }
    function sendM(e: React.KeyboardEvent<HTMLInputElement>){
       if (e.key == 'Enter')
        socket.emit("sndMsg", {message: inputVal , room: state.room})
    }

    function sendMB(){
        socket.emit("sndMsg", {message: inputVal , room: state.room})
    }
     
    return(
         <>

            <div className="flex flex-col">
               <div className="flex flex-col">
                      <MsgDash/>              
               </div>
               <div className="fixed bottom-0 left-0 w-full bg-black backdrop-blur p-4 flex justify-center">
                <input 
                   className="border-2 border-purple-700 outline-none focus:border-purple-500 w-[90vw] h-[5vh] rounded-4xl pl-4"
                   type="text"
                   onChange={handleip}
                   onKeyDown={sendM}
              
                />

                <button className="border-2 px-4 ml-5 rounded-4xl hover:border-purple-500"
                onClick={sendMB}
                >Send</button>
               </div>
            </div>
             
         </>
    )
}

