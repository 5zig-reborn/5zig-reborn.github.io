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
    return a.mcMajor - b.mcMajor || a.mcMinor - b.mcMinor || a.mcPatch - b.mcPatch
}

const versionTypes = {
    vanilla: {
        icon: `<i class="fas fa-cube"></i>`,
        btn: ".btn--info",
        mirror: ".btn--inverse",
        name: "Vanilla"
    },
    vanillaforge: {
        icon: `<i class="fas fa-cube"></i>/<i class="fas fa-weight-hanging"></i>`,
        btn: ".btn--primary",
        mirror: ".btn--inverse",
        name: "Vanilla/Forge"
    },
    fabric: {
        icon: `<i class="fas fa-scroll"></i>`,
        btn: ".btn--warning",
        mirror: ".btn--inverse",
        name: "Fabric"
    }
}

fetch(latestUrl, options).then(res => {
    return res.json()
}).then(json => {
    json.map(parseVersion).sort(sortVersion).forEach(version => {
        const type = versionTypes[version.platform]
        const asset = version.asset
        const dl = asset.download_url
        const name = `5zig Reborn ${version.version} (<b>${!!type ? type.name : version.platform} ${version.mcMajor}.${version.mcMinor}.${version.mcPatch}</b>)`

        const p = document.createElement("h5")
        const normalUrl = document.createElement("a")
        normalUrl.innerHTML = `${!!type ? type.icon : ""} ${name}`
        normalUrl.className = `${!!type ? type.btn : ""}`
        normalUrl.href = "https://adfoc.us/serve/sitelinks?id=490788&&url=" + dl

        const mirror = document.createElement("a")
        mirror.className = `${!!type ? type.mirror : ""}`
        mirror.innerHTML = "Mirror"
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
    const latestRelease = json[0]
    document.getElementById("stable-changelog").innerHTML = latestRelease.body
    document.getElementById("stable-name").innerHTML = latestRelease.name
    latestRelease.assets.map(parseVersion).sort(sortVersion).forEach(version => {
        const asset = version.asset
        const type = versionTypes[version.platform]
        const dl = asset.browser_download_url
        const count = asset.download_count.toLocaleString()
        const name = `5zig Reborn ${version.version} (<b>${!!type ? type.name : version.platform} ${version.mcMajor}.${version.mcMinor}.${version.mcPatch}</b>)`

        const p = document.createElement("h5")
        const normalUrl = document.createElement("a")
        normalUrl.innerHTML = `${!!type ? type.icon : ""} ${name}`
        normalUrl.className = `btn ${!!type ? type.btn : ""}`
        normalUrl.href = "https://adfoc.us/serve/sitelinks?id=490788&&url=" + dl

        const mirror = document.createElement("a")
        mirror.className = `${!!type ? type.mirror : ""}`
        mirror.innerHTML = "Mirror"
        mirror.href = dl

        p.appendChild(normalUrl)
        p.innerHTML += " "
        p.appendChild(mirror)
        p.innerHTML += ` (${count})`

        document.getElementById("stable-downloads").appendChild(p)
    })
})

function parseVersion(asset) {
    let caps = /5zig-Reborn-(\d+)\.(\d+)\.(\d+)-([^-]+)(?:-(.+))?\.jar/g.exec(asset.name)
    let mcMajor = parseInt(caps[1])
    let mcMinor = parseInt(caps[2])
    let mcPatch = parseInt(caps[3])
    let version = caps[4]
    let platform = caps[5]
    if (!platform) platform = mcMajor == 1 && mcMinor < 13 ? "vanillaforge" : "vanilla"
    return {
        mcMajor: mcMajor,
        mcMinor: mcMinor,
        mcPatch: mcPatch,
        version: version,
        platform: platform.toLowerCase(9),
        asset: asset
    }
}