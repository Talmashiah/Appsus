const { Link } = ReactRouterDOM

export default class NotePreview extends React.Component {

    DynamicCmp = (type) => {
        switch (type) {
            case 'NoteText':
                return <h1>NoteText</h1>
            case 'NoteImg':
                return <h1>NoteImg</h1>
            case 'NoteTodos':
                return <h1>NoteTodos</h1>
            default:
                return //...some default error view
        }
    }

    render() {
        const { props } = this;
        return <div>{this.DynamicCmp(props.note.type)}</div>
    }
}