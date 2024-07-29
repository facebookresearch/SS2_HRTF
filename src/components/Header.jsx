import React, {useContext, useEffect, useState} from 'react'
import classNames from 'classnames'
import LogoUrl from '../../images/RLR_Logo.png'


import { ScrollContext } from './App'
import trackDirty from '../trackDirty'

const FullHeight = 'h-72 py-4'
const SmallHeight = 'h-16 py-2'

const classes = [
    'bg-black',
    'w-screen',
    'shadow',
    'shadow-gray-800',
    'flex',
    'flex-col',
    'items-center',
    'z-40',
    'transition-all',
    'duration-500'
]

const HideDragThreshold = 16

classes.push(FullHeight) // height class should be last so we can pop()

const Header = () => {
    const [context, setContext] = useContext(ScrollContext)
    const [touchStart, setTouchStart] = useState(null)
    const contextChanged = trackDirty(context)

    if (context > 50 && contextChanged) {
        classes.pop()
        classes.push(SmallHeight)
    } else if (context == 0 && contextChanged) {
        classes.pop()
        classes.push(FullHeight)
    }

    const onWheel = event => {
        setContext(Math.max(0, context + event.deltaY))
    }

    const onTouchStart = event => { 
        setTouchStart(event.changedTouches[0].clientY)
    }

    const onTouchEnd = event => {
        if (touchStart === null) return

        const end = event.changedTouches[0].clientY
        const delta = end - touchStart
        if (-1 * delta > HideDragThreshold) {
            classes.pop()
            classes.push(SmallHeight)
            setTouchStart(null)
        }
    }

    const onTouchCancel = event => {
        setTouchStart(null)
    }

    return <header className={classNames(classes)} 
            onWheel={onWheel}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchCancel}>
        <img src={LogoUrl} className='max-h-full w-auto' alt='...'/>

    </header>
}

export default Header
