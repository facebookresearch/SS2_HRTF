import * as classNames from 'classnames'
import React from 'react'

const common = [
    'prose',
    'dark:prose-invert'
]

export const Header1 = ({ children }) => <span className={classNames(common)}> <h1>{children}</h1> </span>
export const Header2 = ({ children }) => <span className={classNames(common)}> <h2>{children}</h2> </span>
export const Header3 = ({ children }) => <span className={classNames(common)}> <h3>{children}</h3> </span>
export const Header4 = ({ children }) => <span className={classNames(common)}> <h4>{children}</h4> </span>
export const Header5 = ({ children }) => <span className={classNames(common)}> <h5>{children}</h5> </span>
export const Header6 = ({ children }) => <span className={classNames(common)}> <h6>{children}</h6> </span>