const { NavLink } = ReactRouterDOM
export default function NavBar() {
    return <nav>
        <ul className="nav-bar">
            <li><NavLink activeClassName="active" to='/booksApp' exact>books</NavLink></li>
            <li><NavLink activeClassName="active" to='/booksApp/add-book'>Add book</NavLink></li>
        </ul>
    </nav>
}