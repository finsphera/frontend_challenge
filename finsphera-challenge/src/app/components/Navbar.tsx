import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar p-4 flex items-center justify-between">
			<div className="flex items-center space-x-4">
				<div className="text-2xl font-bold">GitHub Clone</div>
				<input
					type="text"
					placeholder="Search"
					className="bg-gray-800 text-white p-2 rounded-md"
				/>
			</div>
			<div className="flex items-center space-x-4">
				<Link href="#">
					<span className="hover:underline cursor-pointer">Pull requests</span>
				</Link>
				<Link href="#">
					<span className="hover:underline cursor-pointer">Issues</span>
				</Link>
				<Link href="#">
					<span className="hover:underline cursor-pointer">Marketplace</span>
				</Link>
				<Link href="#">
					<span className="hover:underline cursor-pointer">Explore</span>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
