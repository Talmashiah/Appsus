export default class EmailFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
        },
        bg: '',
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

    onChangeBg = (ev) => {
        const value = ev.target.value;
        this.setState(({ bg: value }), function () {
            console.log(this.state.bg);
        })
    }

    changeBg = () => {
        document.body.style.backgroundImage = `url(${this.state.bg})`;
    }

    render() {
        return <div className="email-list-header">
            <span><i class="fas fa-search"></i></span>
            <div className={'search-input-container'}><input className="search-input" type="text" placeholder="Search Mail" value={this.state.filterBy.name}
                onChange={this.changeInput} name="name"></input></div>
            <div className={'search-bg-container'}><input className={'search-bg-input'} type="text" placeholder="Set Background URL"
                value={this.state.bg} onChange={this.onChangeBg}></input><button className={'bg-btn'} onClick={this.changeBg}>Change</button></div>
            <div className={'dropdown'}>
                <button className={'dropbtn'}>Search By</button>
                <div className={'dropdown-content'}>
                    <option onClick={this.onFilter}>All</option>
                    <option onClick={this.onFilter}>Read</option>
                    <option onClick={this.onFilter}>Unread</option>
                    <option onClick={this.onFilter}>Starred</option>
                    <option onClick={this.onFilter}> Unstarred</option>
                    <option onClick={this.onFilter}>Date</option>
                </div>
            </div>
        </div>
    }
}
