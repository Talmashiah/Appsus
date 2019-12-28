import emailsService from '../services/emailService.js';
import eventBusService from '../../services/eventBusService.js';
import EmailSideBar from '../cmps/EmailSideBar.jsx';

export default class EmailPage extends React.Component {
    state = {
        email: null,
    }

    componentDidMount() {
        this.loadEmail();
    }

    onSetFilter = (filterBy) => {
        this.props.history.push('/emailApp');
    }

    loadEmail() {
        const { id } = this.props.match.params;
        emailsService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    goBack = () => {
        this.props.history.push('/emailApp');
    }

    onDelete = () => {
        emailsService.deleteEmail(this.state.email);
        this.props.history.push('/emailApp');
        this.setState({ email: null });
    }

    onRemove = () => {
        emailsService.removeEmail(this.state.email);
        this.props.history.push('/emailApp');
        this.setState({ email: null });
    }

    render() {
        if (!this.state.email) return <div>Loading...</div>
        return [
            <EmailSideBar onSetFilter={this.onSetFilter} key="s"></EmailSideBar>,
            , <div key="g" className={'email-page-container'}>
                <h1>{this.state.email.from}</h1>
                <h2>{this.state.email.subject}</h2>
                <div className={'emailpage-body-container'}>
                    <div>{this.state.email.body}</div>
                </div>
                <button className={'go-back-btn-body'} onClick={this.goBack}>Back</button>
                <button className={'delete-btn-body'} onClick={this.state.email.isTrash ? this.onRemove : this.onDelete}>Delete</button>
            </div>
        ]

    }
}
