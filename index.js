const token = '565995a9417224e3f8c5dcaacf0addc945c240e8'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json())
.then(json => console.log(json));