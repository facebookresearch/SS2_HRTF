import React from 'react'
import CustomizedMarkdown from './CustomizedMarkdown'
import Article from './Article'
import IntroductionMd from '../../content/Introduction.md'


const Introduction = () => {
    return <Article>
        <CustomizedMarkdown>
            {IntroductionMd}
        </CustomizedMarkdown>
    </Article>
}

export default Introduction
