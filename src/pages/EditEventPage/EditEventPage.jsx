import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditEventPage extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.e
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateEvent(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
    return (
      <>
        <h1>Edit Event</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Event's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Event's Date</label>
            <input
              className="form-control"
              name="date"
              value={this.state.formData.date}
              onChange={this.handleChange}
              
            />
          </div>
          <div className="form-group">
            <label>Event Image Link</label>
            <input
              className="form-control"
              name="picture"
              value={this.state.formData.picture}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              value={this.state.formData.description}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              className="form-control"
              name="location"
              value={this.state.formData.location}
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs"
            disabled={this.state.invalidForm}
          >
            SAVE EVENT
          </button>&nbsp;&nbsp;
          <Link to='/events'>CANCEL</Link>
        </form>
      </>
    );
  }
}

export default EditEventPage;