/*

Build a GitHub profile viewer: 

fetch a user by username → 
  display repos, 
  followers, 
  avatar. 

Handle 404 errors gracefully.

*/

import { Octokit } from "octokit";

export function fetchFollowers(username) {
  const octokit = new Octokit();
  return octokit.request(`GET /users/${username}/followers`, {
    username: `${username}`,
    headers: {
      'X-GitHub-Api-Version': '2026-03-10'
    }
  });
}

// fetchFollowers("vikkisupurrbe")
//   .then(response => {
//     const followers = response.data.map((item) => (
//      {
//        name: item.login,
//        follower_url: item.url
//      }
//     ));
//     console.log({
//       total_followers: response.data.length,
//       followers
//     })
//   })
//   .catch(error => {
//     if (error.status === 404) {
//       console.log("User not found");
//     } else {
//       console.log(`Error: ${error.message}`);
//     }
//   })