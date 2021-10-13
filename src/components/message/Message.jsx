import "./message.css";

export default function Message({own}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img 
                className="messageImg"
                src={`${PF}/person/noAvatar.png`} 
                alt="" />
                <p className="messageText">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               </p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}
