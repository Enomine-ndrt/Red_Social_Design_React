import "./sidebar.css";
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} 
from '@mui/icons-material';
import {Link} from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriends/CloseFriend";
import {useContext} from 'react';
import {AuthContext} from'../../context/AuthContext'; 

export default function Sidebar() {
      const {user} = useContext(AuthContext);
    return (
        <div className="sidebar">
           <div className="sidebarWrapper">
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                  </li>
                  <li className="sidebarListItem">
                        <Link to="/messenger"  style={{ textDecoration: "none" ,color: "#000" }}>
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                        </Link>
                  </li>
                  <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                  </li>
                  <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                  </li>
                  <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                  </li>
                  <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                  </li>
                  <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                  </li>
                  <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                  </li>
                  <li className="sidebarListItem">
                        <Link to={`/config/${user.username}`} style={{ textDecoration: "none",color: "#000" }}>
                        <SettingsIcon className="sidebarIcon" />
                        <span className="sidebarListItemText">Settings account</span>
                        </Link>
                  </li>
              </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map(u=>(
                        <CloseFriend key={u.id} user={u}/>
                    ))}
                </ul>
           </div>
        </div>
    )
}
