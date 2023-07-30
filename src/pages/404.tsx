import React from 'react'

const NotFound: React.FC = () => {

    const style = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return <div style={style}>
        <h1>404</h1>
    </div>
}

export default NotFound