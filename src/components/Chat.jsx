import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {IoMdClose,IoMdSend} from "react-icons/io";
import {WiDirectionDownRight,WiDirectionUpRight} from "react-icons/wi"
import "./Chat.css"

let nextId = 0

export default function Chat({element,removeItem}) {
    const [showindchat, setIndChat] = useState(false)
    const [clicked, setClicked] = useState(false)

    const [chattyped,setChattyped] = useState("");
    const [conversation, setConversation] = useState([])

    let chats = ["hi","hellow","how are you"]
	return (
		<div className=" flex flex-col justify-end h-auto rounded-t-2xl bottom-0  w-60 me-2">
			<div className="4w-full text-white bg-blue-600 p-5 flex items-center justify-between rounded-t-2xl border-x-blue">
				<div className="flex items-center text-white">
					<img className="w-8 h-8 rounded-full" src={element.profilepicture} alt={element.name}/>
					<span className="ms-2">{element.name}</span>
				</div>
				<div className="flex items-center">
					<div className="me-2">
						{showindchat === true ? <FaAngleDown /> : <FaAngleUp />}
					</div>
					<div
                    onClick={() => removeItem(element)}
                    >
						<IoMdClose />
					</div>
				</div>
			</div>
			<div
				className="block w-full overflow-y-scroll scrollbar max-h-80 me-2 border-x-blue"
				
			>
				{conversation.map((ele, i) => {
					return (
						<div key={i} className="flex justify-between pe-2 items-center my-2 hover:cursor-pointer">
							<div className="flex flex-row pe-5 ps-2 items-center">
								<div className="text-xs flex">
									<div className="me-2 items-center"><WiDirectionUpRight/></div>
									<div>{ele.text}</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
            <div className="bottom-0 flex justify-between items-center border border-x-blue pe-2">
                <form>
                    <input className="ps-4 focus:outline-none w-full rounded-md" value={chattyped} onChange={(e)=>setChattyped(e.target.value)} type="text" placeholder="Type here ..."/>
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
		</div>
	);
}
