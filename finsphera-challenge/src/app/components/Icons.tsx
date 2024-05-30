import React from "react";

const StarsIcon: React.FC = () => {
	return (
		<svg
			aria-label="stars"
			viewBox="0 0 16 16"
			version="1.1"
			width="16"
			height="16"
			role="img">
			<path d="M8 12.5l-3.09 1.637.588-3.425L2.59 7.9l3.44-.5L8 4.5l1.97 2.9 3.44.5-2.89 2.812.588 3.426z"></path>
		</svg>
	);
};

const ForksIcon: React.FC = () => {
	return (
		<svg
			aria-label="forks"
			viewBox="0 0 16 16"
			version="1.1"
			width="16"
			height="16"
			role="img">
			<path d="M5 3.09V2h6v1.09C10.98 3.19 10 4.22 10 5.5V10.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5.5c0-1.28-.98-2.31-2-2.41zM5 1H4v1H3a1 1 0 0 0-1 1v4.99a1 1 0 0 0 1 1h1v1h1v1h6v-1h1v-1h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1V1H5zm1 11v2H2v1h12v-1h-4v-2H6z"></path>
		</svg>
	);
};

export { StarsIcon, ForksIcon };
