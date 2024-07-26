export function isFullyQualified(url) {
    const splitByProtocol = url.split('://')

    if (splitByProtocol.length > 1) {
        return true
    }

    const path = splitByProtocol[0].split('/')

    return path.length > 1 && path[0].includes('.')
}

export function fullyQualified(relativeUrl) {
    if (isFullyQualified(relativeUrl)) {
        return relativeUrl
    }

    if (relativeUrl[0] == '/')
        relativeUrl = relativeUrl.substr(1, relativeUrl.length - 1)
    
    return `${location.href}/${relativeUrl}`
}