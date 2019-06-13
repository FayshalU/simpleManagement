import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GetAllStudents } from '../actions/GetAllStudents';
import Form from './Form';

class Content extends Component{

    handleDelete = (ev) => {
        ev.preventDefault();
        this.props.handleDeleteStudent( ev.target.value);

    }

    componentDidMount(){
        this.props.handleDispatch(GetAllStudents);
        // console.log(this.props);
    }

    render(){
        return (
            <div className="container">
                <h2>All Students Info</h2>
                <div className="card">
                    { this.props.students.length ? (
                        this.props.students.map( (item) => (
                            <div className="card" key={item.id}>
                                <div className="card-body">
                                    <br /><span>Name: { item.name } </span>
                                    <br /><span>Email: { item.email } </span> 
                                    <br />
                                    <Link to={'/student/'+item.id}>
                                        View 
                                    </Link>
                                    <br />
                                    <Link to={'/edit/'+item.id}>
                                        Edit 
                                    </Link>
                                    
                                    <button className="btn btn-sm btn-danger" value={item.id} onClick={this.handleDelete}> Delete</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No students registered yet</div> 
                    )}
                </div>
                <br />
                {/* <button>Add Student</button> */}
                <Form handleAddStudent={this.props.handleAddStudent} />
            </div>
        );
    }
}

export default Content;