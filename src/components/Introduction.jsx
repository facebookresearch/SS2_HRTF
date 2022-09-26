import React from 'react'
import classNames from 'classnames'

const classes = [
    'bg-yellow-100',    
    'mb-5',    
    'prose',
    'lg:prose-xl'
    // 'max-w-none'
]

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const Introduction = () => {
    return <article className={classNames(classes)}>
        <h1>AES AVAR Conference Database of HRTFs</h1>

        <p>
            {text}
        </p>

        <p>
            {text}
        </p>

    </article>
}

export default Introduction;