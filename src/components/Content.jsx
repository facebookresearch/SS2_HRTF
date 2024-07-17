import React, { useContext, useState } from 'react'
import classNames from 'classnames'

import Introduction from 'Introduction'
import Conclusion from 'Conclusion'
import FileDownloads from 'FileDownloads'



import { ScrollContext } from './App'

const outerClasses = [ 
    'bg-gray-200',
    'dark:bg-gray-700',
    'overflow-y-scroll',
    'flex-grow',
    'flex',
    'flex-col',
    'items-center'
]

const innerClasses = [
    'bg-white',
    'dark:bg-gray-900',
    'pt-10',
    'pb-20',
    'px-2',
    'lg:pt-20',
    'lg:pb-40',    
    'lg:px-28',
    '2xl:px-32',
    'md:px-24',
    'sm:px-16',
    'sm:my-10',
    'shadow-md'
]


const Content = () => {
    const [context, setContext] = useContext(ScrollContext)
    
    const onScroll = event => {
        const scrollTop = event.currentTarget.scrollTop        
        setContext(scrollTop)
    }

    return <div className={classNames(outerClasses)} onScroll={onScroll}>
        <div className={classNames(innerClasses)}>
            <Introduction />
            <FileDownloads />
            <Conclusion />
        </div>
    </div>
}

export default Content
