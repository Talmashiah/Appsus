import BookApp from './appsus/pages/BookApp.jsx';
import EmailApp from './appsus/pages/EmailApp.jsx'
import NoteApp from './appsus/pages/NoteApp.jsx'
import AppsusHome from './appsus/pages/AppsusHome.jsx'
import AppsusNavBar from './appsus/cmps/AppsusNavBar.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()

class AppSus extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <AppsusNavBar></AppsusNavBar>
                    <Switch>
                        <Route component={AppsusHome} path="/home" exact />
                        <Route component={BookApp} path="/booksApp"/>
                        <Route component={EmailApp} path="/emailApp"/>
                        <Route component={NoteApp} path="/noteApp"/>
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <AppSus/>,
    document.getElementById('root')
)