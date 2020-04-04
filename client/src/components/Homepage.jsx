import React, {Component} from "react"
import styled from 'styled-components'

const Up = styled.div.attrs({
})`
  top:0 ;
  height: 50%;
  width: 100%;
  position: fixed;
  background-color: #708090;
  z-index:-1
`

const Down = styled.div.attrs({
})`
  top: 50%;
  height: 50%;
  width: 100%;
  position: fixed;
  background-color: #B0C4DE;
  
`

const Center1 = styled.div.attrs({
})`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: Arial;
  color: white;
`

const Center2 = styled.div.attrs({
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: Arial;
  color: white;
`


class Homepage extends Component{
    render(){
        return(
            <>
            <Up>
                <Center1>
                    <h2>Introduction</h2>
                </Center1>
            </Up>
            <Down>
                <Center2>

                        <h2>Most common terms in jokes from <a href="https://icanhazdadjoke.com/api">icanhazdadjoke</a></h2>

                </Center2>
            </Down>
            </>
        )
    }
}

export  default  Homepage