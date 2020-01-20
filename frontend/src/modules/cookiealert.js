import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'

const cookieAlert = (props) => {
    if (props.show) {
        return(
            <footer>
                <Alert dismissible variant={'warning'} onClose={()=>props.setShow(false)}>This app uses cookies to store data</Alert>
            </footer>
        )
    } else {
        return(
            <>
            </>
        )
    }
}

export default cookieAlert