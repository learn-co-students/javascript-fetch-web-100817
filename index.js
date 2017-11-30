const app = "I don't do much.";
const token = '2d4a138dcbdc83b937702669a40eb69d4e8a268c';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
