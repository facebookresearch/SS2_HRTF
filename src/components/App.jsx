import React from 'react'
import classNames from 'classnames'

import Header from 'Header'
import Content from 'Content'
import Footer from 'Footer'

const classes = [
    'flex',
    'flex-col',
    'justify-between',
    'items-stretch',
    'w-screen',
    'h-screen'
]

class App extends React.Component {
    render() {
        return <div className={classNames(classes)}>
            <Header />
            <Content />
            <Footer />
        </div>
    }
}

export default App
