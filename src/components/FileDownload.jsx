import React from 'react'
import classNames from 'classnames'

const classes = [
    'bg-yellow-50',
    'border-2',
    'my-5',
    'w-full'
]

const FileDownload = () => {
    return <div className={classNames(classes)}>
        <h2>File download header</h2>
        <button>File download button</button>
    </div>
}
export default FileDownload
