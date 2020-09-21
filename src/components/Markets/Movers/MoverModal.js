import React, { useState } from 'react'
import { 
    MoverContainer, MoverHeader, MoverBody,
    MoverDiscriptor, MoverDescription, MoverItem
} from '../../../styles/Markets'

const MoverModal = props => {
    const { id, description, title, quotes } = props
    const [ bodyHidden, setBodyHidden ] = useState(true)

    const handleOpen = () => {
        setBodyHidden(!bodyHidden)
    }

    const renderQuotes = () => {
        return quotes.map(( quote, index )=> {
            const { exchange, symbol, } = quote
            console.log(quote)
            return (<>
                <MoverDiscriptor> # {index + 1} </MoverDiscriptor>
                <MoverItem>{ symbol } {exchange} </MoverItem>
                </>)
        })  
    }

    return(
        <MoverContainer hidden={bodyHidden}>
            <MoverHeader onClick={() => { handleOpen() }}> { title } </MoverHeader>
            <MoverBody hidden={bodyHidden}>
                <MoverDiscriptor> Description: </MoverDiscriptor>
                <MoverDescription> {description} </MoverDescription>
                { quotes.length && renderQuotes()}
            </MoverBody>
        </MoverContainer>
    )
}

export default MoverModal