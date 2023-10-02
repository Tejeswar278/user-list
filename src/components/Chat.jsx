import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {IoMdClose,IoMdSend} from "react-icons/io"

let nextId = 0

export default function Chat({element,removeItem}) {
    const [showindchat, setIndChat] = useState(false)
    const [clicked, setClicked] = useState(false)

    const [chattyped,setChattyped] = useState("");
    const [conversation, setConversation] = useState([])

    let chats = ["hi","hellow","how are you"]
	return (
		<div className="rounded-t-2xl bottom-0  bg-white w-60 me-2">
			<div className="w-full sticky top-0 text-white bg-blue-600 p-5 flex items-center justify-between rounded-t-2xl">
				<div className="flex items-center text-white">
					<img className="w-8 h-8 rounded-full" src={element.profilepicture} alt={element.name}/>
					<span className="ms-2">{element.name}</span>
				</div>
				<div className="flex items-center">
					<div className="me-2">
						{showindchat === true ? <FaAngleDown /> : <FaAngleUp />}
					</div>
					<div
                    onClick={removeItem}
                    >
						<IoMdClose />
					</div>
				</div>
			</div>
			<div
				className="block overflow-y-scroll scrollbar max-h-80 me-2"
				
			>
				{conversation.map((ele, i) => {
					return (
						<div key={i} className="flex justify-between pe-2 items-center my-2 hover:cursor-pointer">
							<div className="flex flex-row px-5 items-center">
								<div className="text-xs">{ele.text}</div>
							</div>
						</div>
					);
				})}
			</div>
            <div className="flex items-center border">
                <form>
                    <input className="focus:outline-none w-full rounded-md" value={chattyped} onChange={(e)=>setChattyped(e.target.value)} type="text" placeholder="Type here ..."/>
                </form>
                <IoMdSend onClick={(event) => {
                    const newConvo = {
                        id: nextId++,
                        text : chattyped
                    }
                    setConversation([...conversation,newConvo])
                    setChattyped('')
                    console.log(conversation,"text entered")
                }}/>
            </div>
            {/* <ul>
                {conversation.map((e)=> {
                    return (
                        <li key={e.id}>
                            {conversation.text}
                        </li>
                    )
                })}
            </ul> */}
		</div>
	);
}
