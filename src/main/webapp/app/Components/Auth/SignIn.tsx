import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps, useHistory } from 'react-router-dom';

import { IRootState } from 'app/shared/reducers';
import { login } from 'app/shared/reducers/authentication';
import SignInModal from './SignIn-modal';

export interface ILoginProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export const Login = (props: ILoginProps) => {
  const [showModal, setShowModal] = useState(props.showModal);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(true);

  // loginerror true
  // make it false in hook

  const history = useHistory();

//   const didMountRef = useRef(false)
//   useEffect(() => {
//     if (didMountRef.current && clicked && !props.loginError) {
//       console.log('doStuff() ', props.isAuthenticated);
//     } else didMountRef.current = true
//   });

  const handleLogin = (username, password, rememberMe = false) => {
	 setClicked(true);
	//const mm = props.login(username, password, rememberMe);

	props.login(username, password, rememberMe).then(() =>  history.push("/"));


	 // mm.then(() => history.push("/"))
  }

  const handleClose = () => {
    setShowModal(false);
    props.history.push('/');
  };

  const { location, isAuthenticated } = props;
//   const { from } = (location.state as any) || { from: { pathname: '/', search: location.search } };
  if (isAuthenticated) {
    return <Redirect to={'/'} />;
  }
  return <SignInModal handleLogin={handleLogin} handleClose={handleClose} loginError={props.loginError} clicked={clicked}, isAuthenticated={props.isAuthenticated} />;
};

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError,
  showModal: authentication.showModalLogin
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Login);
