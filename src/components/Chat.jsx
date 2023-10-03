import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {IoMdClose,IoMdSend} from "react-icons/io";
import {WiDirectionDownRight,WiDirectionUpRight} from "react-icons/wi"
import "./Chat.css"

let nextId = 0

export default function Chat({element,removeItem}) {
    const [showindchat, setIndChat] = useState(true)
    const [clicked, setClicked] = useState(false)

    const [chattyped,setChattyped] = useState("");
    const [conversation, setConversation] = useState([])

	// function enterPressed(event) {
	// 	var code = event.keyCode || event.which;
	// 	if(code === 13) { //13 is the enter keycode
	// 		const newConvo = {
	// 			id: nextId++,
	// 			text : chattyped
	// 		}
	// 		setConversation([...conversation,newConvo])
	// 		setChattyped('')
	// 		console.log(conversation,"text entered")
	// 	} 
	// }

    let chats = ["hi","hellow","how are you"]
	return (
		<div className=" flex flex-col justify-end h-auto rounded-t-2xl bottom-0  w-60 me-2">
			<div className="4w-full text-white bg-blue-600 p-5 flex items-center justify-between rounded-t-2xl border-x-blue">
				<div className="flex items-center text-white">
					<img className="w-8 h-8 rounded-full" src={element.profilepicture} alt={element.name}/>
					<span className="ms-2 whitespace-nowrap maxwidth overflow-hidden text-ellipsis">{element.name}</span>
				</div>
				<div className="flex items-center">
					<div 
						className="me-2 hover:cursor-pointer"
						onClick={() => setIndChat(!showindchat)}
					>
						{showindchat === true ? <FaAngleDown /> : <FaAngleUp />}
					</div>
					<div
						className="hover:cursor-pointer"
                    	onClick={() => removeItem(element)}
                    >
						<IoMdClose />
					</div>
				</div>
			</div>
			<div
				className={showindchat === true?"bg-white block w-full overflow-y-scroll scrollbar max-h-48 me-2 border-x-blue":"hidden"}
				
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
            <div className={showindchat === true?"bottom-0 flex justify-between items-center border border-x-blue pe-2":"hidden"}>
                <form onkeyp>
                    <input 
					// onChange={this.textChange.bind(this)}
					// value={this.state.name} 
					// onKeyPress={this.enterPressed.bind(this)}
					// onKeyPress={
					// 	(event) => {
					// 		const newConvo = {
					// 			id: nextId++,
					// 			text : chattyped
					// 		}
					// 		setConversation([...conversation,newConvo])
					// 		setChattyped('')
					// 		console.log(conversation,"text entered")
					// 	}
					// }
					 className="ps-4 focus:outline-none w-full rounded-md" value={chattyped} onChange={(e)=>setChattyped(e.target.value)} type="text" placeholder="Type here ..."/>
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
