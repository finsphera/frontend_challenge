import axios from "axios";

export interface Repo {
	id: number;
	name: string;
	description: string;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
}

const api = axios.create({
	baseURL: "https://api.github.com",
});

export const getRepos = async (username: string) => {
	const response = await fetch(`https://api.github.com/users/${username}/repos`);
	if (!response.ok) {
		throw new Error("Failed to fetch repositories");
	}
	return response.json();
};

export default api;
