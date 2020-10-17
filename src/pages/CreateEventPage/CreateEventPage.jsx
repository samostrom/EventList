
import React, {Component} from 'react';

class CreateEventPage extends Component{
    state = {
        invalidForm: true,
        formData: {
            name: String,
            date: Date,
            picture: String,
            description: String,
            location: String,
        }
    };
    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddEvent(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return(
            <>
                <h1>Add Event</h1>
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
                    <label>Event's Date </label>
                    <input
                        className="form-control"
                        name="date"
                        value={this.state.formData.date}
                        onChange={this.handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label>Link for Event Picture</label>
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
                    className="btn"
                    disabled={this.state.invalidForm}
                >
                    Add Event
                </button>
                </form>
            </>
            );
        }
       
}

export default CreateEventPage;
