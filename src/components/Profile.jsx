import React from "react";

const Profile = (prop) => {
	console.log(prop);
	return (
		<div className="profile">
			<div className="info">
				<h1>{prop.name}</h1>
				<img src={prop.image} alt="profile-image" />
			</div>
		</div>
	);
};

export default Profile;
