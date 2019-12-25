const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

export default class EmailApp extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <Switch>
                        <Route component={EmailList} path="/emailApp" exact />
                        <Route component={EmailPage} path="/emailApp/email/:id" exact />
                        <Route component={notFoundPage} path="/emailApp" />
                    </Switch>
                </Router>
            </main>
        )
    }
}