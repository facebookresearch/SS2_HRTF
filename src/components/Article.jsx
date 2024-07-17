import React from 'react'
import classNames from 'classnames'


const classes = [   
    'mb-7',
    'prose',
    'lg:prose-lg',
    'xl:prose-xl',
    '2xl:prose-xl',
    'dark:prose-invert',    
    'sm:prose-sm'
]


const Article = ({children}) => <article className={classNames(classes)}>
    {children}
</article>

export default Article