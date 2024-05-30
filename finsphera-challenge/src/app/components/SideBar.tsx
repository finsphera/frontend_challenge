import Link from "next/link";
import React from "react";

const Sidebar: React.FC = () => {
	return (
		<aside className="sidebar w-64 p-4">
			<div className="mb-4">
				<h2 className="font-semibold text-lg">Repositories</h2>
				<ul className="mt-2 space-y-2">
					<li>
						<Link href="#">
							<span className="hover:underline cursor-pointer">All</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							<span className="hover:underline cursor-pointer">Public</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							<span className="hover:underline cursor-pointer">Sources</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							<span className="hover:underline cursor-pointer">Forks</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							<span className="hover:underline cursor-pointer">Archived</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							<span className="hover:underline cursor-pointer">Mirrors</span>
						</Link>
					</li>
					<li>
						<Link href="#">
							<span className="hover:underline cursor-pointer">Templates</span>
						</Link>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
