import React from 'react'
import {Route, Switch, Link } from 'react-router-dom'
import Home from './components/Home'
import Api from './Questions/api'
import Dbms from './Questions/dbms'
import Javascript from './Questions/javascript'
import Node from './Questions/node'
import Redux from './Questions/redux'
import ResAcc from './Questions/resAcc'
import Spa from './Questions/spa'

function App() {
    return(
        <div className='app'>
            <nav>
                <p>logo</p>
            </nav>
            <Switch>
                <Route path='/api' component={Api}/>
                <Route path='/dbms' component={Dbms}/>
                <Route path='/js' component={Javascript}/>
                <Route path='/node' component={Node}/>
                <Route path='/redux' component={Redux}/>
                <Route path='/ResAcc' component={ResAcc}/>
                <Route path='/spa' component={Spa}/>
                <Route path='/' component={Home}/>
            </Switch>
        </div>
    )
}

export default App
