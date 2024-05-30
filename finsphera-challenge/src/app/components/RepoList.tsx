import React from "react";
import { useQuery } from "react-query";
import { getRepos, Repo } from "../services/api";
import RepoCard from "./RepoCard";

interface RepoListProps {
	username: string;
}

const RepoList: React.FC<RepoListProps> = ({ username }) => {
	const { data, error, isLoading } = useQuery(["repos", username], () =>
		getRepos(username)
	);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error loading repositories</div>;

	return (
		<div className="repo-list">
			{data?.map((repo: Repo) => (
				<RepoCard
					key={repo.id}
					name={repo.name}
					description={repo.description}
					html_url={repo.html_url}
					stargazers_count={repo.stargazers_count}
					forks_count={repo.forks_count}
				/>
			))}
		</div>
	);
};

export default RepoList;
