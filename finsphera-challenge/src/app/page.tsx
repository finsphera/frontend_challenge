"use client";

import React, { useState } from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";
import RepoList from "./components/RepoList";

const queryClient = new QueryClient();

const Home: React.FC = () => {
	const [username, setUsername] = useState("edieAprovita");

	return (
		<QueryClientProvider client={queryClient}>
			<Head>
				<title>GitHub Clone Page</title>
				<meta name="description" content="A page showing GitHub repositories" />
			</Head>
			<div style={{ backgroundColor: "#0d1117", minHeight: "100vh" }}>
				<Navbar />
				<div className="flex">
					<Sidebar />
					<main className="flex-1 p-4">
						<h1 className="text-2xl font-bold mb-4">GitHub Repositories</h1>
						<input
							type="text"
							value={username}
							onChange={e => setUsername(e.target.value)}
							placeholder="Enter GitHub username"
							className="mb-4 p-2 border border-gray-300 rounded w-full max-w-xs"
						/>
						<RepoList username={username} />
					</main>
				</div>
			</div>
		</QueryClientProvider>
	);
};

export default Home;
