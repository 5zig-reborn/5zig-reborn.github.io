const latestUrl = "https://api.github.com/repos/5zig-reborn/deployments/contents"
const stableUrl = "https://api.github.com/repos/5zig-reborn/The-5zig-Mod/releases"
const options = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    headers: {
        'Content-Type': 'application/json'
    }
}
const sortVersion = (a, b) => {
    const capsA = /5zig-Reborn-(\d+)\.(\d+)\.(\d+)-.*/g.exec(a.name)
    const capsB = /5zig-Reborn-(\d+)\.(\d+)\.(\d+)-.*/g.exec(b.name)
    // Compare major.minor.patch
    return parseInt(capsA[1]) - parseInt(capsB[1]) || parseInt(capsA[2]) - parseInt(capsB[2]) || parseInt(capsA[3]) - parseInt(capsB[3])
}

fetch(latestUrl, options).then(res => {
    return res.json()
}).then(json => {
    json.sort(sortVersion)
    json.forEach(asset => {
        let name = asset.name
        let dl = asset.download_url

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

        document.getElementById("downloads").appendChild(p)
    })
})

fetch(stableUrl, options).then(res => {
    return res.json()
}).then(json => {
    let latestRelease = json[0]

    document.getElementById("stable-changelog").innerHTML = latestRelease.body
    document.getElementById("stable-name").innerHTML = latestRelease.name
    latestRelease.assets.sort(sortVersion)
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

        document.getElementById("stable-downloads").appendChild(p)
    })
})