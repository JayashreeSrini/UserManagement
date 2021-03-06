import React, { Component } from 'react'
import { InputField, Button } from '../../patterns/index'
import formFields from '../../json/form-field-controls.json'
import { Field } from 'redux-form'

class RegisterForm extends Component {
    registerSubmit = (registerDetails) => {
        const { registerUser } = this.props
        registerUser(registerDetails)
    }
    render() {
        const { handleSubmit, registerError } = this.props
        const registerFields = Object.keys(formFields.register).map(
            index => <Field
                key={index}
                name={formFields.register[index].name}
                type={formFields.register[index].type}
                className={formFields.register[index].className}
                placeholder={formFields.register[index].placeholder}
                title={formFields.register[index].title}
                label={formFields.register[index].label}
                component={InputField} />
        )

        return (<React.Fragment>
            <div className="container">
                <div class="header">
                    <div className="header-content-wrapper">
                        <h1>User management portal</h1>
                        <p><i>*Built with <b>react and redux</b> framework.</i></p>
                    </div>
                </div>
                <div className="page-container">
                    <div className="page-form">
                        {registerError &&
                            <div class="alert">
                                <strong>{registerError}! - </strong>Please try again.
                        </div>
                        }
                        <div className="form-fields">
                            <div className="page-title">User registration</div>
                            <hr />
                            <form onSubmit={handleSubmit(this.registerSubmit)}>
                                {registerFields}
                                <hr />
                                <Button label="Sign up" type="submit" id="signup" />
                                <Button label="Go back" type="button" id="back" onClick={this.props.goBack} />
                            </form>
                        </div>
                    </div>
                </div>

            </div>


        </React.Fragment>)
    }
}
export default RegisterForm