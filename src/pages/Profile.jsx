import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Profile.css";
import List from "../components/List";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { GrChat } from "react-icons/gr";
import TableRow from "../components/TableRow";

export default function Profile() {
	const location = useLocation();
	const wholeData = location.state;
	const data = wholeData.singleObj;
	const dataList = wholeData.wholeOjb;
	const iconstyle = { color: "white" };
	const [togglestate, setToggleState] = useState(1);
	const [heading, setHeading] = useState("Profile");
	const [show, setshow] = useState(false);
	const [chatshow, setChatShow] = useState(false);
	const [chat, setChat] = useState(false);

	const toggletab = (index) => {
		if (index === 1) {
			setHeading("Profile");
		} else if (index === 2) {
			setHeading("Posts");
		} else if (index === 3) {
			setHeading("Gallery");
		} else {
			setHeading("ToDo");
		}
		setToggleState(index);
	};

	let url = `https://maps.google.com/maps?q=${data.address.geo.lat},${data.address.geo.lng}&hl=es;&output=embed&zoom=9`;

	let location_ = {
		address: `${data.address.street},${data.address.suite},${data.address.city},${data.address.zipcode}`,
		lat: data.address.geo.lat,
		lng: data.address.geo.lng,
	};

	const tabs = ["Profile","Post","Gallery","ToDo"]

	return (
		<div
			className="container"
			onClick={() => {
				if (show === true) {
					setshow(false);
				}
				if (chatshow === true) {
					setChatShow(false);
				}
			}}
		>
			<div className="tabs">
				{tabs.map((tab,i) => {
					return (
						<div
							className={togglestate === i+1 ? "active" : ""}
							onClick={() => toggletab(i+1)}
							key={i}
						>
							{tab}
						</div>
					)
				})}
			</div>
			<div className="tab-content">
				<header className="border-slate-400 h-16">
					<div className="flex justify-between p-4">
						<div className="font-semibold text-xl text-slate-600">
							{heading}
						</div>
						<div>
							<div
								className="flex justify-end hover:cursor-pointer"
								onClick={() => setshow(!show)}
							>
								<img
									className="w-8 h-8 rounded-full"
									src={data.profilepicture}
								/>
								<div className="whitespace-normal text-slate-500 text-lg ms-3 align-middle">
									<p>{data.name}</p>
								</div>
							</div>
							<div
								className={
									show === true
										? "w-80 bg-white mt-3 rounded-xl shadow-2xl border-t absolute right-10 flex items-center flex-col"
										: "display"
								}
							>
								<div className="mt-12 mb-3">
									<img
										className="w-24 rounded-full items-center"
										src={data.profilepicture}
									/>
								</div>
								<div className="text-xl">{data.name}</div>
								<div className="text-slate-400 text-md">{data.email}</div>
								<div className="mb-5 w-full">
									<List data={dataList} />
								</div>
								<div className="mb-5 text-white font-medium overflowX">
									<Link
										className="bg-red-600 rounded-full py-2 mb-5 px-6"
										to="/"
									>
										Sign-out
									</Link>
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</header>

				<div className={togglestate === 1 ? "active" : ""}>
					<div className="flex">
						<div className="w-2/3 items-center">
							<img
								className="w-48 rounded-full m-auto mt-10 mb-4"
								src={data.profilepicture}
								alt={data.name}
							/>
							<div className="text-center text-2xl font-medium text-slate-600 mb-5">
								{data.name}
							</div>
							<div className="grid-table">
								<table className="m-auto">
									<tbody className="space-y-10">
										<TableRow type="Username" value={data.username}/>
										<TableRow type="e-mail" value={data.email}/>
										<TableRow type="phone" value={data.phone}/>
										<TableRow type="Website" value={data.website}/>
										<tr className="text-center border-t">
											<td colSpan={3} className=" text-slate-400 text-xl">
												Company
											</td>
										</tr>
										<TableRow type="Name" value={data.company.name}/>
										<TableRow type="catchphrase" value={data.company.catchPhrase}/>
										<TableRow type="bs" value={data.company.bs}/>
									</tbody>
								</table>
							</div>
						</div>
						<div className="border-s border-slate-400 w-full mt-10 ps-10">
							<table>
								<tbody>
									<tr>
										<th className="text-slate-400 text-2xl font-normal mb-5">
											Address :
										</th>
									</tr>
									<TableRow type="Street" value={data.address.street}/>
									<TableRow type="Suite" value={data.address.suite}/>
									<TableRow type="City" value={data.address.city}/>
									<TableRow type="Zipcode" value={data.address.zipcode}/>
								</tbody>
							</table>
							<div className="w-full mt-5">
								<iframe className="w-full h-72 rounded-3xl" src={url}></iframe>
								<div className="flex justify-end">
									<span className="text-slate-400 me-1">Lat:</span>
									{location_.lat}
									<span className="text-slate-400 ms-3 me-1">Long:</span>
									{location_.lng}
								</div>
							</div>
							<div className="bottom-0 flex justify-end">
								<div className="rounded-t-xl fixed bottom-0 bg-white w-60  border2">
									<div
										onClick={() => {
											setChatShow(!chatshow);
										}}
										className="border1 w-full sticky top-0 text-white bg-blue-600 p-5 flex items-center justify-between"
									>
										<div className="flex items-center text-white">
											<GrChat style={iconstyle} />
											<span className="ms-2">Chats</span>
										</div>
										<div>
											{chatshow === true ? <FaAngleDown /> : <FaAngleUp />}
										</div>
									</div>
									<div
										className={
											chatshow === true
												? "block overflow-y-scroll scrollbar max-h-80"
												: "hidden"
										}
									>
										{dataList.map((ele,i) => {
											return (
												<div
													className="flex flex-row px-5"
													onClick={() => {
														setChat(true);
													}}
													key={i}
												>
													<img
														className="w-8 rounded-full me-2"
														src={ele.profilepicture}
														alt={ele.name}
													/>
													<div>{ele.name}</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={togglestate === 2 ? "cstabs active" : ""}>
					comming soon
				</div>

				<div className={togglestate === 3 ? "active cstabs" : ""}>
					comming soon
				</div>

				<div className={togglestate === 4 ? "active cstabs" : ""}>
					comming soon
				</div>
			</div>
		</div>
	);
}
