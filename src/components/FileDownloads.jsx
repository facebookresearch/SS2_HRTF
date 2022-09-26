import React from 'react'
import classNames from 'classnames'
import FileDownload from 'FileDownload'

const classes = [
    'w-full',
    'prose',
    'lg:prose-xl'
]

const FileDownloads = () => {
    return <div className={classNames(classes)}>
        <FileDownload />
        <FileDownload />
        <FileDownload />
    </div>
}
export default FileDownloads;