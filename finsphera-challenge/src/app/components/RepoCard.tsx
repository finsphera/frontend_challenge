import React from "react";
import Image from "next/image";

import { StarsIcon, ForksIcon } from "./Icons";

interface RepoCardProps {
	name: string;
	description: string;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
}

const RepoCard: React.FC<RepoCardProps> = ({
	name,
	description,
	html_url,
	stargazers_count,
	forks_count,
}) => {
	return (
		<div className="repo-card p-4 rounded-md shadow-md">
			<h3 className="text-lg font-semibold mb-2">
				<a
					href={html_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 hover:underline">
					{name}
				</a>
			</h3>
			<p className="text-gray-600 mb-4">{description}</p>
			<div className="flex items-center text-gray-600 text-sm space-x-4">
				<span className="flex items-center">
					<StarsIcon />
					{stargazers_count}
				</span>
				<span className="flex items-center">
					<ForksIcon />
					{forks_count}
				</span>
			</div>
		</div>
	);
};

export default RepoCard;
