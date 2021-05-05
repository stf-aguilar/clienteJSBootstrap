import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './sections/Home';
import Operation from './sections/Operation';
import Login from './sections/Login';

export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/operation" component={Operation} />
                <Route path="/login" component={Login} />
            </section>
        )
    }
}

export default Section
