const app = "I don't do much.";

const token = 'e11f44676d72918d7515cf553ccb1056514522cb'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
