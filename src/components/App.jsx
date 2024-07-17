import React, {useState} from 'react'
import classNames from 'classnames'

import Header from 'Header'
const Content = React.lazy(() => import('./Content'));
import Footer from 'Footer'

const classes = [
    
    'flex',
    'flex-col',
    'justify-between',
    'items-stretch',
    'w-screen',
    'h-screen'
]

export const ScrollContext = React.createContext([0, () => {}])


const App = () => {
    const [context, setContext] = useState(0)

    return <div className={classNames(classes)}>
        <ScrollContext.Provider value={[context, setContext]} >
            <Header />
            <Content />
            <Footer />
        </ScrollContext.Provider>
    </div>
}

export default App
