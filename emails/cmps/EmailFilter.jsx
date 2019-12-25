export default class EmailFilter extends React.Component {
    state = {
        filterBy: {
            name: '',
            price: 200
        }
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

    render() {
        return <div className="search-bar">
            <input className="search-input" type="text" placeholder="Search Mail" value={this.state.filterBy.name}
                onChange={this.changeInput} name="name"></input>
        </div>
    }
}
