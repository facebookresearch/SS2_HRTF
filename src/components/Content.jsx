import React from 'react'
import classNames from 'classnames'

import Introduction from 'Introduction'
import FileDownloads from 'FileDownloads'

const outerClasses = [
    'bg-green-300',    
    'overflow-y-scroll',
    'flex-grow',
    'flex',
    'flex-col',
    'items-center'
]

const innerClasses = [
    'bg-gray-50',
    'px-36'
]

const Content = () => {
    return <div className={classNames(outerClasses)}>
        <div className={classNames(innerClasses)}>
            <Introduction />
            <FileDownloads />
        </div>
    </div>
}

export default Content;