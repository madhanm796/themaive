import React from 'react'

function BackgroundParticle() {

    const styles = {
        particle: 'sm:w-180 sm:h-180'
    }

    return (
        <div className={`-z-40 bg-blue-400 absolute top-2/4 left-2/4 w-full h-2/4 rounded-full blur-3xl ${styles.particle} `} style={{
            transform: 'translate(-50%, -50%)',
        }}
        ></div>
    )
}

export default BackgroundParticle