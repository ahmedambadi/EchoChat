import socket from "socket.io-client";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import io from "socket.io-client";





const Messenger = () => {
const [message, setMessage] = useState('');

  const handleSubmit = async () =>  {
    socket.emit("message", { id: , content: message});
  }   

    return(
        <div>
            <div id="users">

            </div>
            <div id="msgint">
               <div id="msgbd">

               </div>

                <div id="sender">
                      <TextField
                                id="outlined-basic"
                                label="type here.."
                                variant="outlined"
                                className="w-full"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                              />
                      <Button variant="outlined" className="w-full" 
                           sx={{ mt: 2 }}
                           onClick={handleSubmit}
                           >
                           Send
                         </Button>
                </div>
            </div>    
        </div>


    )


}

export default Messenger;