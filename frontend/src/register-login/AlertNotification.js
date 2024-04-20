import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import './AlertNotification.css';

class AlertNotification extends Component {
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            variant : this.props.variant,
            heading : this.props.heading,
            message : this.props.message
        }
    }

    setAlert = (message) => {
        this.setState({message : message});
    }

    setHeading = (heading) => {
        this.setState({heading : heading});
    }

    setVariant = (variant) => {
        this.setState({variant : variant});
    }

    setVisible = (visible) => {
        this.setState({visible: visible});
    }

    render(){
        if (this.state.visible){
            return (
                <>
                    <div className = "RegisterAlert">
                        <Alert variant = {this.state.variant} onClose = {() => this.setState({ visible: false })} dismissible >
                         <Alert.Heading>{this.state.heading}</Alert.Heading>
                            <p>
                                {this.state.message}
                            </p>
                        </Alert>
                    </div>
                </>
            );
        }
        return null;
    }

}
export default AlertNotification;