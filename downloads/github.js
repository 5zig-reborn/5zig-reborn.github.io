const url = "https://api.github.com/repos/5zig-reborn/The-5zig-Mod/releases"
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
        'Content-Type': 'application/json'
    }
}

fetch(url, options).then(res => {
    return res.json()
}).then(json => {
    let latestRelease = json[0]

    document.getElementById("changelog").innerHTML = latestRelease.body
    document.getElementById("name").innerHTML = latestRelease.name
    latestRelease.assets.forEach(asset => {
        let name = asset.name
        let dl = asset.browser_download_url
        let count = asset.download_count.toLocaleString()

        let p = document.createElement("h5")
        let normalUrl = document.createElement("a")
        normalUrl.innerHTML = name
        normalUrl.href = "https://adfoc.us/serve/sitelinks?id=490788&&url=" + dl

        let mirror = document.createElement("a")
        mirror.innerHTML = "<small>[Mirror]</small>"
        mirror.href = dl

        p.appendChild(normalUrl)
        p.innerHTML += " "
        p.appendChild(mirror)

        p.innerHTML += ` (${count})`

        document.getElementById("downloads").appendChild(p)
    })
})