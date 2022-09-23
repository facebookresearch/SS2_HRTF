import React from 'react'
import { createRoot } from 'react-dom/client';

const Hello = props => {
    return <div>Hello react</div>
}

const domNode = document.createElement('div');
const root = createRoot(domNode);
root.render(<Hello />);
document.body.appendChild(domNode);
