import React from 'react'
import Colors from './Colors'
import Header from './Header'

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="home_text">
                <h1>Solid Color</h1>
            </div>
            <Colors/>
        </div>
    )
}

export default Home
