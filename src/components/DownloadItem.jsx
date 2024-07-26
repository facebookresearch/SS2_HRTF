import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import buildFilesizeStr from '../buildFilesizeStr'
import DownloadFile from './DownloadFile'
import DownloadButton from './DownloadButton'

import { Header4 } from './Heading'

import { fullyQualified } from '../fullyQualified'

const classes = [
    'dark:bg-gray-700',
    'bg-gray-50',
    'shadow',
    'my-5',
    'p-3.5',
    'w-full'
]


function parseItem(item) {
    if (typeof(item) === 'string') {
        return  {name: item, url: fullyQualified(item)}
    }

    return {
        name: item.name,
        url: fullyQualified(item.url)
    }
}



const importAll = (r) => r.keys().map(r)
const zips = importAll(require.context('../../files', false, /\.(zip)$/));
const pdfs = importAll(require.context('../../files', false, /\.(pdf)$/));
const items = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('../../files', true, /.*\.json/))




const FileDownload = ({item, zips, pdfs}) => {
    const [sizeStr, setSizeStr] = useState('')    
    
    const fileDownloads = item.subitems.map((subitem, i) => {
        const nameUrl = parseItem(subitem)        
        const hasMetaFile = zips.find(zip => zip.includes(nameUrl.name)) != undefined        

        return <DownloadFile 
            hasMetaFile={hasMetaFile} 
            key={`${nameUrl.name}${nameUrl.url}`} 
            name={nameUrl.name} 
            url={nameUrl.url} />
    })

    const nameUrl = typeof(item.item) == 'string'
        ? {name: 'Documentation', url: item.item}
        : item.item

    const itemUrl = pdfs.find(p => p.includes(nameUrl.url))

    useEffect(() => {
        if (itemUrl != undefined) {
            fetch(`${itemUrl}.meta`)
                .then(res => res.json())
                .then(json => setSizeStr(buildFilesizeStr(json.size)))
        }
    }, [])

    return <div className={classNames(classes)}>
        <div className='flex justify-between'>
            <div>
                <Header4>{nameUrl.name}</Header4>
                <div className='prose dark:prose-invert'>{item.documentation}</div>
                <span className='prose dark:prose-invert'>{sizeStr}</span>
            </div>
            <div>
                <DownloadButton url={nameUrl.url} />
            </div>
        </div>
        {fileDownloads}
    </div>
}

export default FileDownload
