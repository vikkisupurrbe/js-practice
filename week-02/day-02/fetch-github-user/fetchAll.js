import { fetchUser } from "./fetchGithubUser.js";
import { fetchRepos } from "./fetchRepos.js";
import { fetchFollowers } from "./fetchFollowers.js";

function fetchAll(username) {
  return Promise.all([
    fetchUser(username),
    fetchRepos(username),
    fetchFollowers(username)
  ]);
}

fetchAll("vikkisupurrbe")
  .then(([user, repos, followers]) => {
    const detailedRepos = repos.data.map((item) => (
      {
        name: item.name,
        repo_url: item.html_url
      }
    ));

    const detailedFollowers = followers.data.map((item) => (
      {
        name: item.login,
        follower_url: item.url
      }
    ));
    console.log(
      {
        username: user.data.login,
        avatar: user.data.avatar_url,
        total_repos: repos.data.length,
        repo_urls: detailedRepos,
        total_followers: followers.data.length,
        followers: detailedFollowers
      }
    );
  })
  .catch(error => {
    if (error.status === 404) {
      console.log("User not found — please check the username");
    } else {
      console.log(`Error: ${error.message}`)
    }
  })