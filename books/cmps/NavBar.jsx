const { NavLink } = ReactRouterDOM
export default function NavBar() {
    return <nav>
        <ul className="nav-bar">
            <li><NavLink style={{ textDecoration: 'none' , color:'black' }} activeClassName="main-logo" to='/'>Miss Book <i className="fas fa-book"></i></NavLink></li>
            <div className="nav-bar-links">
            <li><NavLink activeClassName="active" to='/booksApp' exact>books</NavLink></li>
            <li><NavLink activeClassName="active" to='/booksApp/about'>About</NavLink></li>
            <li><NavLink activeClassName="active" to='/booksApp/add-book'>Add book</NavLink></li>
            </div>
        </ul>
    </nav>
}