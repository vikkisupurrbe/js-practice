/*

Build a GitHub profile viewer: 

fetch a user by username → 
  display repos, 
  followers, 
  avatar. 

Handle 404 errors gracefully.

*/

import { Octokit, App } from "octokit";

function fetchFollowers(username) {
  const octokit = new Octokit();
  return octokit.request(`GET /users/${username}/followers`, {
    username: `${username}`,
    headers: {
      'X-GitHub-Api-Version': '2026-03-10'
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
      total_number_of_followers: response.data.length,
      followers
    })
  })
  .catch(error => console.log(error))