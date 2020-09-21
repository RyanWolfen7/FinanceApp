import React, { useState } from 'react'
import { MoverContainer, MoverHeader, MoverBody, MoverDiscriptor, MoverDescription } from '../../../styles/Markets'

const MoverModal = props => {
    const { id, description, title, quotes } = props
    const [ bodyHidden, setBodyHidden ] = useState(true)

    const handleOpen = () => {
        setBodyHidden(!bodyHidden)
    }

    console.log(props)

    return(
        <MoverContainer hidden={bodyHidden}>
            <MoverHeader onClick={() => { handleOpen() }}> { title } </MoverHeader>
            <MoverBody hidden={bodyHidden}>
                <MoverDiscriptor> Description: </MoverDiscriptor>
                <MoverDescription> {description} </MoverDescription>
            </MoverBody>
        </MoverContainer>
    )
}

export default MoverModal