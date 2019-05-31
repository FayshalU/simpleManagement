import React, { Component } from 'react';

export class EditStudent extends Component{

    getId = ()=> {
        return this.props.match.params.id.toString();
    }

    getName = () => {
        return this.props.students.find( ({id}) => id === this.getId()).name;
    }

    getEmail = () => {
        return this.props.students.find( ({id}) => id === this.getId()).email;
    }

    state = { itemValue: {
        id: this.getId(),
        name: this.getName(),
        email: this.getEmail()
    } };

    handleSubmitAndResetForm = ev => {
        ev.preventDefault();
        this.props.handleEditStudent(this.state.itemValue);
        this.props.history.push('/');
    };

    handleNameChange = ev =>
        this.setState({
        itemValue: {
            id: this.getId(), 
            name : ev.target.value, 
            email: this.state.itemValue.email
        }
    });

    handleEmailChange = ev =>
        this.setState({
        itemValue: {
            id: this.getId(), 
            name : this.state.itemValue.name, 
            email: ev.target.value
        }
    });

    render(){
        return(
            <div className="container">
                <h3>Edit student info</h3>
                <form method="POST" autoComplete="on" onSubmit={this.handleSubmitAndResetForm}>
                    <div>
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

                    <div>
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

                    <div>
                        <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            disabled={!(this.state.itemValue.name && this.state.itemValue.email )}
                            aria-label="Edit student">
                            Done
                        </button>
                    </div>
                </form>
                <br />
                <button
                    className="btn btn-sm btn-warning"
                    onClick={()=>this.props.history.push('/')}>
                    Cancel
                </button>
            </div>
        );
    }
}
