import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditProfilePage extends Component {
    state = {
        invalidForm: false,

        formData: this.props.profile
    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateProfile(this.state.formData);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value}
        this.setState({
            formData,
            invalid: !this.formRef.current.checkValidity()
        });
    }

    render() {
        return (
            <>
            <h1>Edit Profile</h1>
            <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name (required)</label>
                    <input
                        className="form-control"
                        name="name"
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image Link </label>
                    <input
                        className="form-control"
                        name="picture"
                        value={this.state.formData.picture}
                        onChange={this.handleChange}
                        
                    />
                </div>
                <div className="form-group">
                    <label>Bio</label>
                    <input
                        className="form-control"
                        name="bio"
                        value={this.state.formData.bio}
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-xs"
                    disabled={this.state.invalidForm}
                >
                    SAVE PROFILE
                </button>&nbsp;&nbsp;
                <Link to='/profiles'>CANCEL</Link>
                </form>
            </>
        );
    }
 }



export default EditProfilePage;