import React from 'react'
import { createRoot } from 'react-dom/client';

import App from 'App.jsx'

import './index.css'

const domNode = document.createElement('div');
const root = createRoot(domNode);
root.render(<App />);
document.body.appendChild(domNode);
