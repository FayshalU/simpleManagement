import React, { Component } from 'react';

export default class Form extends Component{

    state = { itemValue: {
        name: '',
        email: ''
    } };

    handleSubmitAndResetForm = ev => {
        ev.preventDefault();
    
        this.props.handleAddStudent(this.state.itemValue);
    
        // Reset value
        return this.setState({
            itemValue: {
                name: '',
                email: ''
            }
        });
    };

    handleNameChange = ev =>
        this.setState({
        itemValue: {name : ev.target.value, email: this.state.itemValue.email}
    });

    handleEmailChange = ev =>
        this.setState({
        itemValue: {name : this.state.itemValue.name, email: ev.target.value}
    });

    render(){
        return(
             <div className="container">
                <h4>Add new student</h4>
                <form method="POST" autoComplete="on" onSubmit={this.handleSubmitAndResetForm}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={this.state.itemValue.name}
                            onChange={this.handleNameChange}
                            autoFocus
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={this.state.itemValue.email}
                            onChange={this.handleEmailChange}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!(this.state.itemValue.name && this.state.itemValue.email )}
                            aria-label="Add new student">
                            Add
                        </button>
                    </div>
                </form>
            </div>

        );
    }
}