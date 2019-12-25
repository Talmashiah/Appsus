const { NavLink } = ReactRouterDOM
export default function AppsusNavBar() {
    return <nav>
        <ul className="appsus-nav-bar">
            <li><NavLink style={{ textDecoration: 'none' , color:'black' }} activeClassName="main-logo" to='/home'>Appsus</NavLink></li>
            <div className="appsus-nav-bar-links">
            <li><NavLink activeClassName="active" to='/home' exact>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/booksApp'>Books</NavLink></li>
            <li><NavLink activeClassName="active" to='/noteApp'>Notes</NavLink></li>
            <li><NavLink activeClassName="active" to='/emailApp'>Emails</NavLink></li>
            <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
            </div>
        </ul>
    </nav>
}