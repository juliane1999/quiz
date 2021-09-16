import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHome = styled.div`
.quiz {
border: 1px solid black
}
`

export default function Home() {

    return(
        <StyledHome>
        <div>
            <h1>Interview Prep Quizes</h1>
            <div className='quiz container'>
                <Link to='/api'>
                <div className='quiz'>
                    <h3>API</h3>
                </div>
                </Link>

                <Link to='/dbms'>
                <div className='quiz'>
                    <h3>Database Management System</h3>
                </div>
                </Link>

                <Link to='/js'>
                <div className='quiz'>
                    <h3>Javascript</h3>
                </div>
                </Link>

                <Link to='/node'>
                <div className='quiz'>
                    <h3>Node.js</h3>
                </div>
                </Link>

                <Link to='redux'>
                <div className='quiz'>
                    <h3>Redux</h3>
                </div>
                </Link>

                <Link to='/ResAcc'>
                <div className='quiz'>
                    <h3>ResAcc</h3>
                </div>
                </Link>

                <Link to='/spa'>
                <div className='quiz'>
                    <h3>Single Page Applications</h3>
                </div>
                </Link>
            </div>
        </div>
        </StyledHome>
    )
}