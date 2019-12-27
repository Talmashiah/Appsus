import eventBusService from "../../services/eventBusService.js";
import emailsService from '../services/emailService.js';

export default class EmailSideBar extends React.Component {

    onToggleCompose = () => {
        eventBusService.emit('composeModal');
    }
    countUnreadMail = () => {
        return emailsService.unreadMailCount();
    }
    onInBox = () => {
        this.props.onSetFilter(null);
    }
    onStarred = () => {
        this.props.onSetFilter('Starred');
    }

    render() {
        return <div className={'side-bar'}>
            <button onClick={this.onToggleCompose} className={'compose-button'}><i className={'fas fa-plus'}></i><p>Compose</p></button>
            <div onClick={this.onInBox} className={'inbox-container'}> <i className={'fas fa-inbox'}></i> <p>Inbox</p> <p className={'unread-mail'}>{this.countUnreadMail()}</p></div>
            <div onClick={this.onStarred} className={'inbox-container-star'}><i className={'fas fa-star'}></i><p className={'starred-inbox'}>Starred</p></div>
        </div >
    }
}

