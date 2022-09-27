import React from 'react'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'

import IntroductionMd from '../../content/Introduction.md'

const classes = [
    'bg-yellow-100',    
    'mb-5',    
    'prose',
    '2xl:prose-2xl'
]

const Introduction = () => {
    return <article className={classNames(classes)}>
        <ReactMarkdown>
            {IntroductionMd}
        </ReactMarkdown>
    </article>
}

export default Introduction
