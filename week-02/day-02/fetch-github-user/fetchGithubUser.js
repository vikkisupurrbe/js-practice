/*

Build a GitHub profile viewer: 

fetch a user by username → 
  display repos, 
  followers, 
  avatar. 

Handle 404 errors gracefully.

*/

import { Octokit } from "octokit";

export function fetchUser(username) {
  const octokit = new Octokit();
  return octokit.request(`GET /users/${username}`, {
    username: `${username}`,
    headers: {
      'X-GitHub-Api-Version': '2026-03-10'
    }
  });
  // .catch is for handling errors, not detecting them
}

// fetchUser("vikkisupurrbe")
//   .then(response => {
//     const { login, name, avatar_url } = response.data;
//     console.log({
//       username: login,
//       name: name,
//       avatar: avatar_url
//     });
//   })
//   .catch(error => {
//     if (error.status === 404) {
//       console.log("User not found");
//     } else {
//       console.log(`Error: ${error.message}`);
//     }
//   })