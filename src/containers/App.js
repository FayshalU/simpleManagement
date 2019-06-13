import React, {Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Content from '../contents/Content';
import ViewStudent from '../contents/ViewStudent';
import { GetAllStudents } from '../actions/GetAllStudents';
import { GetOneStudent } from '../actions/GetOneStudent';
import { AddStudent } from '../actions/AddStudent';
import { DeleteStudent } from '../actions/DeleteStudent';
import { Edit } from '../actions/Edit';
import { EditStudent } from '../contents/EditStudent';

import 'bootstrap/dist/css/bootstrap.css';
import {  } from "./App.css";

class App extends Component {

  componentDidMount(){
    // this.props.dispatch(GetAllStudents());
    console.log(this.props);
  }

  render() {
    return (
      <BrowserRouter>
        <Route 
          exact
          path='/' 
          render={(routeProps) => (
            <Content {...routeProps} {...this.props} />
          )}
        />
        <Route 
          exact
          path='/student/:id' 
          render={(routeProps) => (
            <ViewStudent {...routeProps} {...this.props} />
          )}
        />
        <Route 
          path='/edit/:id' 
          render={(routeProps) => (
            <EditStudent {...routeProps} {...this.props} />
          )}
        />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students
});

const mapDispatchToProps = {
  handleAddStudent: AddStudent,
  handleDeleteStudent: DeleteStudent,
  handleEditStudent: Edit,
};

export default connect( mapStateToProps, mapDispatchToProps )( App );
