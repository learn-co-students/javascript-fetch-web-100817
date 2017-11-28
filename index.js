const app = "I don't do much.";

const token = '936446a8f4af22363eb8dd1924f04ade5502ff31'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
