import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import LayoutNucleo from "../src/components/nucleodev/Layout";
import LayoutWowkatze from "../src/components/wowkatze/Layout";

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/nucleodev" component={LayoutNucleo} exact/>
                    <Route path="/wowkatze" component={LayoutWowkatze} exact/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;