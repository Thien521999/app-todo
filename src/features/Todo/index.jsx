import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TodoList from './components/TodoList';

TodoFeatures.propTypes = {
    
};

function TodoFeatures(props) {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={match.path} component={TodoList} exact  />
            </Switch>
        </div>
    );
}

export default TodoFeatures;