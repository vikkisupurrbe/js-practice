/*

Build a GitHub profile viewer: 

fetch a user by username → 
  display repos, 
  followers, 
  avatar. 

Handle 404 errors gracefully.

*/

import { Octokit } from "octokit";

export function fetchRepos(username) {
  const octokit = new Octokit();
  return octokit.request(`GET /users/${username}/repos`, {
    headers: {
      'X-GitHub-Api-Version': '2026-03-10'
    }
  });
}

// fetchRepos("vikkisupurrbe")
//   .then(response => {
//     const repos = response.data.map((item) => (
//      {
//        name: item.name,
//        repo_url: item.html_url
//      }
//     ));
//     console.log({
//       total_repos: repos.length,
//       repos
//     });
//   })
//   .catch(error => {
//     if (error.status === 404) {
//       console.log("User not found");
//     } else {
//       console.log(`Error: ${error.message}`);
//     }
//   })