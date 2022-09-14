import React from 'react'
import { useParams } from 'react-router-dom'

function Member() {
    let params = useParams()

    return (
        <>
            <h3>{params.memberName}</h3>
            <p>This is the detail page of {params.memberName}</p>
        </>
    )
}

export default Member