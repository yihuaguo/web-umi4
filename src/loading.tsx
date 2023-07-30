import React from 'react'

const LoadingPage: React.FC = () => {

    const style = {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return <div style={style}>
        <h1>Loading</h1>
    </div>
}

export default LoadingPage