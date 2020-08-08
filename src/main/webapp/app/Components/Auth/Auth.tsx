import React, { useState, useRef, useEffect } from 'react';
import { Button, Popover } from 'reactstrap';
import SignIn from './SignIn';
import SignUp from './Signup/SignUp';
import RegisterPage from './Signup/register';
import { NavLink as Link } from 'react-router-dom';
import './Auth.scss';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { AdminMenu, EntitiesMenu, AccountMenu, LocaleMenu } from 'app/shared/layout/menus';

const Auth = ({isAuthenticated}) => {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const [isSignUp, setIsSignUp] = useState(false);

	useEffect(() => {
		setPopoverOpen(false);
	}, [isAuthenticated])

	const toggle = () => {
		setPopoverOpen(!popoverOpen);
	}

	const toggleSignUp = selected => setIsSignUp(selected === 'signUp');

	return (
		<>
			{
				isAuthenticated ?	<AccountMenu isAuthenticated />
				:
				<>
					<Button id='Popover1' className='header-btn shadow rounded Popover1'>SIGN UPPP</Button>					 
					<Popover placement="bottom-end" isOpen={popoverOpen} target="Popover1" toggle={toggle} trigger="hover">
						<form className="auth">
							<div className="buttons">
								<div className="button-container">
									<button type="button" onClick={() => toggleSignUp('signIn')}  className={ !isSignUp ? 'active' : '' }>Sign In</button>
								</div>
								<div className="button-container">
									<button type="button" onClick={() => toggleSignUp('signUp')} className={ isSignUp ? 'active' : '' }>Sign Up</button>
								</div>
							</div>
							{
								isSignUp ? <RegisterPage toggle={toggle} /> : <SignIn toggle={toggle} /> 
							}
						</form>
					</Popover>
				</>
			}
		</>
	);
}

export default Auth;
