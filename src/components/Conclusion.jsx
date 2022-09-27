import React from 'react'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'

import ConclusionMd from '../../content/Conclusion.md'

const classes = [
    'bg-yellow-100',    
    'mb-5',    
    'prose',
    '2xl:prose-2xl'
]

const Conclusion = () => {
    return <article className={classNames(classes)}>
        <ReactMarkdown>
            {ConclusionMd}
        </ReactMarkdown>
    </article>
}

export default Conclusion
