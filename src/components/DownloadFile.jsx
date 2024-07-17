import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Header3, Header4, Header5 } from './Heading'
import buildFilesizeStr from '../buildFilesizeStr'
import DownloadButton from './DownloadButton'

const classes = [
    'dark:bg-gray-600',
    'bg-gray-100',
    'shadow-sm',
    'my-3.5',
    'p-3.5',
    'w-full',
    'flex',
    'justify-between'
]

const DownloadFile = ({ url, name, hasMetaFile = false }) => {
    const [sizeStr, setSizeStr] = useState('')

    if (hasMetaFile) {
        useEffect(() => {
            fetch(`${url}.meta`)
                .then(res => res.json())
                .then(json => setSizeStr(buildFilesizeStr(json.size)))
        }, [])
    }

    return <div className={classNames(classes)}>
        <div>
            <Header5>{name}</Header5>
            <span className='prose dark:prose-invert'>{sizeStr}</span>
        </div>
        <DownloadButton url={url} />
    </div>
}
export default DownloadFile
