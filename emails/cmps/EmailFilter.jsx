export default class EmailFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
        },
    }
    changeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;
        this.setState(prevState => ({ filterBy: { ...prevState.filterBy, [field]: value } }), function () {
            this.onFilterClick();
        })

    }

    onFilterClick = () => {
        this.props.onSetFilter(this.state.filterBy)
    }
    onFilter = (ev) => {
        this.props.onSetFilter(ev.target.value);
    }

    render() {
        return <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search Mail" value={this.state.filterBy.name}
                onChange={this.changeInput} name="name"></input>
            <div className={'dropdown'}>
                <button className={'dropbtn'}>Search By</button>
                <div className={'dropdown-content'}>
                    <option onClick={this.onFilter}>Read</option>
                    <option onClick={this.onFilter}>Unread</option>
                    <option onClick={this.onFilter}>Starred</option>
                    <option onClick={this.onFilter}> Unstarred</option>
                </div>
            </div>
        </div>
    }
}
