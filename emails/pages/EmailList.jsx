import emailsService from '../services/emailService.js'
import EmailFilter from '../cmps/EmailFilter.jsx'
import EmailPreview from '../cmps/EmailPreview.jsx'
export default class EmailList extends React.Component {
    state = {
        emails: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadEmails();

    }

    loadEmails = () => {
        emailsService.getEmails(this.state.filterBy).then(emails => {
            this.setState({ emails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails());
    }

    deleteEmail = (email) => {
        emailsService.deleteEmail(email);
        this.loadEmails();
        this.props.history.push('/emailApp');
    }

    toggleRead = (email) => {
        emailsService.toggleRead(email);
        this.loadEmails();
    }

    toggleUnRead = (email) => {
        emailsService.toggleUnRead(email);
        this.loadEmails();
    }

    formatDate = (date) => {
        emailsService.formatDate(date);
        this.loadEmails();
    }


    render() {
        return (
            <section>
                <EmailFilter key="1" onSetFilter={this.onSetFilter} />
                <ul className={'email-list'}>{this.state.emails.map((email, i) => <EmailPreview key={i} email={email} deleteEmail={this.deleteEmail}
                    toggleRead={this.toggleRead} toggleUnRead={this.toggleUnRead} formatDate={this.formatDate}>
                </EmailPreview>)}</ul>
            </section>
        )
    }
}