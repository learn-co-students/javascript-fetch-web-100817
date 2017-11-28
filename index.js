const app = "I don't do much.";


  const token = '9b32adc9ac4548e47e5d1aa03c79fa1528ca2852'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
