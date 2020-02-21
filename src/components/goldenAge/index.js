import React from 'react';
import Content from '../layouts/Content';
import { useSelector } from 'react-redux'

const GoldenAge = () => {
    const content = useSelector(state => state.content);
    return(
        <div>
            <Content headingHeader={content.heading} whoWeAreContent={content.whoWeAre} descContent={content.description}/>
        </div>
    )
}

export default GoldenAge