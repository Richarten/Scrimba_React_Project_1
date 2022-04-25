import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Info = () => {
	return (
		<div className="Info">
			<img
				className="pic"
				src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxwZXJzb258ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
				alt="woman"
			/>
			<div className="infoText">
				<h1>Christopher Aguilar</h1>
				<h4 className="job">Frontend Developer</h4>
				<p>christopheraguilar.website</p>
			</div>
			<div className="buttons">
				<button className="emailButton">
					<FaEnvelope />
					&nbsp;&nbsp;Email
				</button>
				<button className="linkedInButton">
					<FaLinkedin />
					&nbsp;&nbsp;Linkedin
				</button>
			</div>
		</div>
	);
};

export default Info;
