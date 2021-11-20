import Online from '../../components/chatOnline/Online';
import {useContext,useEffect,useState} from 'react';
import {AuthContext} from '../../context/AuthContext';
//import ConexionUser from '../../pages/messenger/ConexionUser';
import {SocketContext} from '../../context/socket';


export default function CheckOnline(){

    const [onlineUsers,setOnlineUsers] = useState([]);
     const {user} = useContext(AuthContext);

     //const socket =  ConexionUser();
     const socket = useContext(SocketContext);

useEffect(() => {
    socket.emit("addUser",user._id);
    socket.on("getUsers",users=>{
        setOnlineUsers(user.followings.filter((f)=>users.some((u)=>u.userId === f )))
    });
    
},
[socket, user]);

  //------------------------------------------
  return (
  <Online 
                    onlineUsers={onlineUsers} 
                    currentId={user._id} 
                    />
  );

}