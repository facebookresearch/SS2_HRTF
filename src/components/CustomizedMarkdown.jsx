import React from 'react'
import ReactMarkdown from 'react-markdown'

const customComponents = {
    img(img) {        
        return <span className='w-full flex flex-col items-center'>
        <img {...img} />
    </span>
    }
}

const ProseMarkdown = ({children}) => {
    return <ReactMarkdown components={customComponents}>
        {children}
    </ReactMarkdown>
}

export default ProseMarkdown