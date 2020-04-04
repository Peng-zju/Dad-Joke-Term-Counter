import React, {Component} from "react"
import styled from 'styled-components'

import logo from '../logo.svg'
import {Link} from "react-router-dom";

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
    padding: 0 0 7px 8px
`

class Logo extends Component{
    render(){
        return(
                <Wrapper href = "#">
                    <img src={logo} width="50" height="50" alt="joke.svg" />
                </Wrapper>
        )
    }
}

export default Logo