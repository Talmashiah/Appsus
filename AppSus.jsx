import BookApp from './Apps/BookApp.jsx'
import EmailApp from './Apps/EmailApp.jsx'
import NoteApp from './Apps/NoteApp.jsx'
import AppsusHome from './pages/appsus/AppsusHome.jsx'
import AppsusNavBar from './cmps/cmpsAppsus/AppsusNavBar.jsx'

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
                        <Route component={EmailApp} path="/emailApp" exact />
                        <Route component={NoteApp} path="/noteApp" exact />
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