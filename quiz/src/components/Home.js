import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledHome = styled.div`
h3{
    color:black;
}

.big{
    display:flex;
    align-items: center;
    flex-direction:column;
}

.quiz {
    border: 1px solid black;
    margin: 5% 0;
}

`

export default function Home() {

    return(
        <StyledHome>
        <div className='big'>
            <h1>Interview Prep Quizzes</h1>
            <div className='container'>
                <Link to='/api' style={{ textDecoration: "none" }}>
                <div className='quiz'>
                    <h3>API</h3>
                </div>
                </Link>

                <Link to='/dbms' style={{ textDecoration: "none" }}>
                <div className='quiz'>
                    <h3>Database Management System</h3>
                </div>
                </Link>

                <Link to='/js' style={{ textDecoration: "none" }}>
                <div className='quiz'>
                    <h3>Javascript</h3>
                </div>
                </Link>

                <Link to='/node' style={{ textDecoration: "none" }}>
                <div className='quiz'>
                    <h3>Node.js</h3>
                </div>
                </Link>

                <Link to='redux' style={{ textDecoration: "none" }}>
                <div className='quiz'>
                    <h3>Redux</h3>
                </div>
                </Link>

                <Link to='/ResAcc' style={{ textDecoration: "none" }}>
                <div className='quiz'>
                    <h3>ResAcc</h3>
                </div>
                </Link>

                <Link to='/spa' style={{ textDecoration: "none" }}>
                <div className='quiz'>
                    <h3>Single Page Applications</h3>
                </div>
                </Link>
            </div>
        </div>
        </StyledHome>
    )
}