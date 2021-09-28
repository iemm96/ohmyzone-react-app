import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LayoutNucleo from "../src/components/nucleodev/Layout";

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/nucleodev" component={LayoutNucleo} exact/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;