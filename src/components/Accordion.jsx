import React, { useState } from 'react'
import classNames from 'classnames'
import { Header2, Header3, Header4, Header5 } from './Heading'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const itemButtonclass = [
    'relative',
    'flex',
    'items-center',
    'justify-between',
    'w-full',
    'py-4',
    'px-5',
    'border-0',
    'rounded-none',
    'transition',
    'focus:outline-none',
]


export const AccordionItem = ({ children, title, id, onSelect, isSelected }) => {
    const contentClasses = [
        isSelected ? '' : 'max-h-0',        
        'overflow-hidden',
        'transition-all',
        'ease-in-out',
        'duration-500'
    ]

    const iconClasses = [
      isSelected ? 'rotate-90' : 'rotate-0',
      'transition-all',
      'duration-500',
      'h-6 w-6 text-blue-500'
    ]

    const onClick = () => {
      onSelect(isSelected ? -1 : id)
    }

    return <div className="border border-gray-200">
        <Header3 className="mb-0">
            <button className={classNames(itemButtonclass)} type="button" onClick={onClick}>
                {title}
                <ChevronDownIcon className={classNames(iconClasses)} />
            </button>
        </Header3>
        <div id={id} className={classNames(contentClasses)}>
            <div className="py-4 px-5 transition duration-500 ease-in-out">
                {children}
            </div>
        </div>
    </div>
}


export const Accordion = ({ children }) => {
    const [selectedId, setSelectedId] = useState(-1)

    const newChildren = children.map(c => {
        const clone = React.cloneElement(c, {...c.props, onSelect: setSelectedId, isSelected: c.props.id == selectedId})
        return clone 
    })

    return <div>
        {newChildren}
    </div>
}

