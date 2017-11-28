
const token = '4b1418a50669076b17d1726f298dda339d650ab0'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
