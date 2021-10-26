const linksSocialMedia = {
  github: 'esitibaldi',
  youtube: 'UCLAErRyNXU8NJDyS3gchwig',
  instagram: 'eduardo.sitibaldi',
  facebook: '100006047268927',
  twitter: 'esitibaldi1'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      userLink.href = data.html_url
      foto.src = data.avatar_url
      login.textContent = data.login
    })
}

getGithubProfileInfos()
