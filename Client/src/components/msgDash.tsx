import { useEffect, useState } from "react"
import socket from "../socket";


function MessagePiece() {
  const [msg, setMsg] = useState<string[]>([]);

  useEffect(() => {
    const handler = (data: { message: string }) => {
      setMsg(prev => [...prev, data.message]);
    };

    socket.on("msgRec", handler);

    return () => {
      socket.off("msgRec", handler);
    };
  }, []);

  return (<div className="fixed left-2 flex flex-col gap-5 ">
      {msg.map((m, i) => (
        <div key={i} className="bg-purple-900 px-4 text-purple-100 py-1 rounded-2xl max-w-[70vw] wrap-break-words self-start">
          {m}
        </div>
      ))}
    </div>);
}

export default function MessageDash(){
    return(
         <>
            <div className="flex flex-row">
                  <div className="flex flex-col">
                        <MessagePiece/>               
                  </div>
            </div>

         </>
    )
}