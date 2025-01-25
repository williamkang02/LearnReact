import React, { useState } from 'react';
import { Octokit } from '@octokit/core';
// import ReactSearchBox from "react-search-box";

const octokit = new Octokit({
    auth: 'YOUR_TOKEN',
});

interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    name: string | null;
    public_repos: number;
    followers: number;
    following: number;
    bio: string | null;
    created_at: string;
  }
  
  const GithubForms: React.FC = () => {
    const [username, setUsername] = useState<string>(""); // State for username input
    const [userData, setUserData] = useState<GitHubUser | null>(null); // State for GitHub user data
    const [error, setError] = useState<string | null>(null); // State for error handling
  
    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault(); // Prevent form submission default behaviour
  
      if (!username) {
        alert("Please enter a username!");
        return;
      }
  
      try {
        const response: Octokit.Response<GitHubUser> = await octokit.request("GET /users/{username}", {
          username: username,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });
  
        setUserData(response.data); // Store fetched GitHub user data
        setError(null); // Clear any previous errors
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message); // Use the error's message property
        } else {
          setError("An unknown error occurred.");
        }
        setUserData(null); // Clear previous user data on error
      }
    };
    
  return (
    <>
        <div>
            <h1>Github Search</h1>
            <form>
                <label htmlFor="username">Username:</label> <br />
                <input 
                    type="text"
                    id="username" 
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update state with input value
                />{" "} 
                <br/>
                <button onClick={handleClick}>Search</button>
            </form>
            
            {/* Display User Data*/}
            {userData && (
                <div>
                    <h2>Github User Details</h2>
                    <p><strong>Username: </strong> {userData.login}</p>
                    <p><strong>Name: </strong> {userData.name || "N/A"}</p>
                    <p><strong>Public: </strong> {userData.public_repos}</p>
                    <p><strong>Followers: </strong> {userData.followers}</p>
                    <img
                        src={userData.avatar_url}
                        alt={`${userData.login}'s avatar`}
                        style={{ width: "100px", borderRadius: "50%" }}
                    />
                </ div>
            )}

            {/* Display Error */}
            {error && <p style={{ color: "red"}}>Error</p>}
        </div>     
    </>
  )
}

export default GithubForms;