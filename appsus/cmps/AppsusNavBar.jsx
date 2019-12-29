const { NavLink } = ReactRouterDOM
export default function AppsusNavBar() {
    return <nav>
        <div className="appsus-nav-bar">
            <div><NavLink activeClassName="active" to='/home' exact><img className='main-logo' src="/img/logo.png" alt="logo" /></NavLink></div>
            <div className="links-container">
                <div className={'home'}><NavLink activeClassName="active" to='/home' exact>Home</NavLink></div>
                <div className={'books'}><NavLink activeClassName="active" to='/booksApp'>Books</NavLink></div>
                <div className={'notes'}><NavLink activeClassName="active" to='/noteApp'>Notes</NavLink></div>
                <div className={'emails'}><NavLink activeClassName="active" to='/emailApp'>Emails</NavLink></div>
                <div className={'about'}><NavLink activeClassName="active" to='/about'>About</NavLink></div>
            </div>
        </div>
    </nav>
}