import React from 'react'
import CustomizedMarkdown from './CustomizedMarkdown'
import Article from './Article'
import ConclusionMd from '../../content/Conclusion.md'

const Conclusion = () => {
    return <Article>
        <CustomizedMarkdown>
            {ConclusionMd}
        </CustomizedMarkdown>
    </Article>
}

export default Conclusion
