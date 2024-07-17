import React from 'react'
import classNames from 'classnames'
import DownloadItem from 'DownloadItem'
import { Accordion, AccordionItem } from './Accordion'

const importAll = (r) => r.keys().map(r)
const zips = importAll(require.context('../../files', false, /\.(zip)$/));
const pdfs = importAll(require.context('../../files', false, /\.(pdf)$/));
const items = (ctx => {
    let keys = ctx.keys();
    let values = keys.map(ctx);
    return keys.reduce((o, k, i) => { o[k] = values[i]; return o; }, {});
})(require.context('../../files', true, /.*\.json/))

const classes = [
    'w-full',
    'mb-7',
]

const FileDownloads = () => {
    const downloadItems = Object.keys(items).map(k => <AccordionItem title={items[k].title} id={k} key={k}>
        <DownloadItem key={k} item={items[k]} zips={zips} pdfs={pdfs} />
    </AccordionItem>)

    return <div className={classNames(classes)}>
        <Accordion>
            {downloadItems}
        </Accordion>
    </div>
}
export default FileDownloads
