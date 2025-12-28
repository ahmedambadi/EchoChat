import { useEffect } from "react";
import  socket  from "./socket";
import { SocketContext } from "./socketcontext";

type Props = {
  children: React.ReactNode;
};

export function SocketProvider({ children }: Props) {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}