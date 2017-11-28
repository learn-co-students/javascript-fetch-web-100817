const token = '1c1abaafccfe96d3d885a2736b84790dd8b6484b'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
