import React, { useState } from 'react'
import { MoverContainer, MoverHeader, MoverBody, MoverContent } from '../../../styles/Markets'

const MoverModal = props => {
    const { id, description, title, quotes } = props
    const [ bodyHidden, setBodyHidden ] = useState(true)

    const handleOpen = () => {
        setBodyHidden(!bodyHidden)
    }

    return(
        <MoverContainer hidden={bodyHidden}>
            <MoverHeader onClick={() => { handleOpen() }}> { title } </MoverHeader>
            <MoverBody hidden={bodyHidden}>
                <h1>a</h1>
            </MoverBody>
        </MoverContainer>
    )
}

export default MoverModal