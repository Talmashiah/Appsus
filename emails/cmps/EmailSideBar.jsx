import eventBusService from "../../services/eventBusService.js";

export default class EmailSideBar extends React.Component {


    onToggleCompose = () => {
        eventBusService.emit('composeModal');
    }

    render() {
        return <div className={'side-bar'}>
            <button onClick={this.onToggleCompose} className={'compose-button'}><i className={'fas fa-plus'}>Compose</i></button>
        </div>
    }
}
