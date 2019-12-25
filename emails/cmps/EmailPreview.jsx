const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    render() {
        const { props } = this;
        console.log(props.email);
        return <li>
            <h2> {props.email.subject} </h2>
            <p> {props.email.body} </p>

        </li>
    }
}