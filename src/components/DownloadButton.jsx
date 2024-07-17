import React from 'react'
import classNames from 'classnames'

const buttonClasses = [
    'bg-gray-300',
    'hover:bg-gray-400',
    'text-gray-800',
    'font-bold',
    'py-2',
    'px-4',
    'rounded',
    'inline-flex',
    'items-center',
]

const svgClasses = [
    'fill-current',
    'w-4',
    'h-4',
    'mr-2',
]

const DownloadButton = ({ url }) => {
    return <a href={url}>
        <button className={classNames(buttonClasses)}>
            <svg className={classNames(svgClasses)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Download</span>
        </button>
    </a>
}

export default DownloadButton