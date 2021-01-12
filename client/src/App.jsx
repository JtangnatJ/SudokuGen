import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%
    position: fixed;
    overflow: hidden; 
`;

const Grid = styled.div`
    width: 40%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    border-color: black;
    border-width: 1px;
    border-style: solid;
`;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <Page>
                <Grid />
            </Page>
        )
    }
}

export default App;
