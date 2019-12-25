import EmailList from '../../emails/pages/EmailList.jsx'
import EmailPage from '../../emails/pages/EmailPage.jsx'


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
                    </Switch>
                </Router>
            </main>
        )
    }
}