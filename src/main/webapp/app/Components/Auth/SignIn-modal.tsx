import React, { useState, useEffect } from 'react';
import { Translate, translate } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Alert, Row, Col } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Link, Redirect } from 'react-router-dom';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: Function;
  handleClose: Function;
}

class SignInModal extends React.Component<ILoginModalProps> {
	state = {
		clicked: false
	}
  handleSubmit = (event, errors, { username, password, rememberMe }) => {
    const { handleLogin } = this.props;
	handleLogin(username, password, rememberMe);
	this.setState({clicked: true});
  };

  componentDidUpdate() {
	 // console.log('this.props.loginError ', this.props.loginError, this.props.clicked);
  }

  render() {
	const { loginError, handleClose } = this.props;

    return (
      <div>
        <AvForm onSubmit={this.handleSubmit}>
            <Row>
              <Col md="12">
                {loginError ? (
                  <Alert color="danger">
                    <Translate contentKey="login.messages.error.authentication">
                      <strong>Failed to sign in!</strong> Please check your credentials and try again.
                    </Translate>
                  </Alert>
                ) : null
				}
              </Col>
              <Col md="12">
                <AvField
                  name="username"
                  placeholder={translate('global.form.emailorusername.placeholder')}
                  required
                  errorMessage="Username cannot be empty!"
                />
                <AvField
                  name="password"
                  type="password"
                  placeholder={translate('login.form.password.placeholder')}
                  required
                  errorMessage="Password cannot be empty!"
                />
                <AvGroup check inline>
                  {/* <Label className="form-check-label"> */}
                    <AvInput type="checkbox" name="rememberMe" /> <Translate contentKey="login.form.rememberme">Remember me</Translate>
                  {/* </Label> */}
                </AvGroup>
              </Col>
            </Row>
            <div className="mt-1">&nbsp;</div>
            <Button color="primary" type="submit" className='login-btn'>
              <Translate contentKey="login.form.button">Sign In</Translate>
            </Button>
        </AvForm>
      </div>
    );
  }
}

export default SignInModal;
