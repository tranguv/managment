import React, { useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  CustomRule,
  EmailRule,
} from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';
import { useDispatch, useSelector } from 'react-redux';

import './CreateAccountForm.scss';
import { signUp } from '../../api/auth';

export default function CreateAccountForm() {
  console.log(
    'state.user',
    useSelector((state) => state.userStore)
  );
  const { loading, isAuthenticated } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const formData = useRef({ email: '', password: '' });

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = formData.current;
      const response = await signUp({ email, password });
      if (response.isOk) {
        // dispatch(signUp(response.data));
        navigate('/login');
      }
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  const confirmPassword = useCallback(
    ({ value }) => value === formData.current.password,
    []
  );

  if (isAuthenticated) {
    return navigate('/profile');
  }

  return (
    <form className={'create-account-form'} onSubmit={onSubmit}>
      <Form formData={formData.current} disabled={loading}>
        <Item
          dataField={'email'}
          editorType={'dxTextBox'}
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message='Email is required' />
          <EmailRule message='Email is invalid' />
          <Label visible={false} />
        </Item>
        <Item
          dataField={'password'}
          editorType={'dxTextBox'}
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message='Password is required' />
          <Label visible={false} />
        </Item>
        <Item
          dataField={'confirmedPassword'}
          editorType={'dxTextBox'}
          editorOptions={confirmedPasswordEditorOptions}
        >
          <RequiredRule message='Password is required' />
          <CustomRule
            message={'Passwords do not match'}
            validationCallback={confirmPassword}
          />
          <Label visible={false} />
        </Item>
        <Item>
          <div className='policy-info'>
            By creating an account, you agree to the{' '}
            <Link to='#'>Terms of Service</Link> and{' '}
            <Link to='#'>Privacy Policy</Link>
          </div>
        </Item>
        <ButtonItem>
          <ButtonOptions
            width={'100%'}
            type={'default'}
            useSubmitBehavior={true}
          >
            <span className='dx-button-text'>
              {loading ? (
                <LoadIndicator width={'24px'} height={'24px'} visible={true} />
              ) : (
                'Create a new account'
              )}
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className={'login-link'}>
            Have an account? <Link to={'/login'}>Sign In</Link>
          </div>
        </Item>
      </Form>
    </form>
  );
}

const emailEditorOptions = {
  stylingMode: 'filled',
  placeholder: 'Email',
  mode: 'email',
};
const passwordEditorOptions = {
  stylingMode: 'filled',
  placeholder: 'Password',
  mode: 'password',
};
const confirmedPasswordEditorOptions = {
  stylingMode: 'filled',
  placeholder: 'Confirm Password',
  mode: 'password',
};
