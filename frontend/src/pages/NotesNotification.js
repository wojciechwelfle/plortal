import Alert from 'react-bootstrap/Alert';
import './NotesNotification.css';
import {Component} from "react";

class NotesNotification extends Component {
    constructor(props){
        super(props);
        this.state = {
            visibleNote: false,
            variantNote : this.props.variantNote,
            messageNote : this.props.messageNote
        }
    }

    setNote = (message) => {
        this.setState({messageNote : message});
    }

    setVariantNote = (variant) => {
        this.setState({variantNote : variant});
    }

    setVisibleNote = (visible) => {
        this.setState({visibleNote: visible});
    }

    render(){
        if (this.state.visibleNote){
            return (
                <>
                    <div className = "NotesAlert">
                        <Alert key={this.state.variantNote} variant={this.state.variantNote} onClose = {() => this.setState({ visibleNote: false })} dismissible>
                            {this.state.messageNote}
                        </Alert>
                    </div>
                </>
            );
        }
        return null;
    }

}
export default NotesNotification;