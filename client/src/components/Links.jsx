import React, {Component} from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
    className : 'collpase navbar-collapse'
})``

const List  = styled.ul.attrs({
    className: 'navbar-nav mr-auto'
})``

const Item = styled.li.attrs({
    className: 'nav-item navbar-collapse'
})`
    color: white;
    padding: 0 10px 10px
`


class Links extends Component{
    render(){
        return(
            <>
                <Link to="/" className = "navbar-brand text-info">
                    Dad Joke Term Counter
                </Link>
            <Collapse>
                <List>

                    <Item>
                        <Link to='/jokes'  className='btn btn-primary'>
                            Get me counts!
                        </Link>
                    </Item>
                    <Item>
                        <div to='/jokes' onClick={() => window.location.reload()}  className='btn btn-primary'>
                            Refresh
                        </div>
                    </Item>
                </List>
            </Collapse>
            </>
        )
    }
}

export default Links