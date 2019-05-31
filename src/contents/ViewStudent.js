import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ViewStudent extends Component{

    handleDelete = (ev) => {
        ev.preventDefault();
        this.props.handleDeleteStudent( ev.target.value);
        this.props.history.push('/');
    };


    render(){
        let key = this.props.match.params.id.toString();
        let student = this.props.students.find(({ id }) => id === key);
        return(
            <div className="container">
                <h2>Student Profile</h2>
                <div>
                    <span>Name: { student.name }</span><br />
                    <span>Email: { student.email }</span> <br />
                    <Link to={'/edit/'+student.id}>
                        Edit 
                    </Link>
                    <br />
                    <button className="btn btn-sm btn-danger" value={ student.id } onClick={this.handleDelete}> Delete</button>
                </div>
                <br />
                <button
                    className="btn btn-sm btn-primary"
                    onClick={()=>this.props.history.push('/')}>
                    Back
                </button>
            </div>
        );
    }
}

export default ViewStudent;