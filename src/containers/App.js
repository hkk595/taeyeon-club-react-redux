import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Menu, Input, Image } from 'semantic-ui-react'
import PostList from './PostListContainer'

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Menu borderless fixed="top">
                    <Menu.Item>
                        <Image src='/image/echowall_logo_500px.png' size='mini' />
                    </Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Input icon="search" placeholder="Search" />
                        </Menu.Item>
                        <Menu.Item name="login" />
                    </Menu.Menu>
                </Menu>
                <PostList />
            </div>
        );
    }
}

export default App;
