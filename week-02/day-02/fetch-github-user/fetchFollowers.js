/*

Build a GitHub profile viewer: 

fetch a user by username → 
  display repos, 
  followers, 
  avatar. 

Handle 404 errors gracefully.

*/

import { Octokit } from "octokit";

function fetchFollowers(username) {
  const octokit = new Octokit();
  return octokit.request(`GET /users/${username}/followers`, {
    username: `${username}`,
    headers: {
      'X-GitHub-Api-Version': '2026-03-10'
    }
  })
  .catch((response) => {
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
  })
}

fetchFollowers("vikkisupurrbe")
  .then(response => {
    const followers = response.data.map((item) =>
      ({
        name: item.login,
        url: item.url
      })
    )
    console.log({
      total_followers: response.data.length,
      followers
    })
  })
  .catch(error => console.log(error))