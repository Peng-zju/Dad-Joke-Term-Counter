import React, {Component} from 'react'
import ReactTable from 'react-table'
import styled from "styled-components";
import apis from '../api'

//import 'react-table/react-table.css'
import 'react-table/react-table.css'
//warpper to leave padding for table
const Wrapper = styled.div
    `
    padding: 20px 20% 30px 20%;
`

class JokeTable extends Component {
    //constructor, set initial state (i.e. this component stores and shows movies data)
    constructor(props) {
        super(props);
        //always use this.state = {} to initialize, in other functions, use this.setState
        this.state = {
            jokes: [],
            isLoading: false, //because request data is async, if not successful, tell reacttable by css this info
        }
    }

    //request data from server when component is rendered
    componentDidMount(){

        this.setState({
            isLoading: true,
        })

        //use await to pause until success
        apis.getJokes()
            .then(response => {
                this.setState({
                    jokes: response.data,
                    isLoading: false,
                })

            })
            .catch(err=>{
                console.log(err)
            })

    }

    render() {
        const {jokes, isLoading} = this.state

        //define columns format
        const columns = [
            {
                Header: 'Rank',
                accessor: 'rank',
            },
            {
                Header: 'Term',
                accessor: 'term',
            },
            {
                Header: 'Count',
                accessor: 'count',
            },
        ]

        let showTable = true
        if (!jokes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={jokes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={false}
                        minRows={0}
                        className="-striped -highlight text-center"
                    />
                )}
            </Wrapper>
        )
    }
}
export default JokeTable