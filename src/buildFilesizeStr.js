export default function buildFilesizeStr(byteCount) {
    const suffixes = ['bytes', 'kb', 'mb', 'gb']
    let suffixIdx = 0;

    while (byteCount / 1000 > 1) {
        suffixIdx++
        byteCount /= 1000
    }

    return `${Math.round(byteCount)}${suffixes[suffixIdx]}`
}