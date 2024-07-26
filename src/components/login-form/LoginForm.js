import React, { useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  EmailRule,
  AsyncRule,
} from 'devextreme-react/form';
import LoadIndicator from 'devextreme-react/load-indicator';

import './LoginForm.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../api/auth';
import { Validator } from 'devextreme-react';

export default function LoginForm() {
  const navigate = useNavigate();
  console.log(
    'state.user',
    useSelector((state) => state.userStore)
  );

  const { loading, user, error, success } = useSelector(
    (state) => state.userStore
  );
  const dispatch = useDispatch();
  const formData = useRef({ email: '', password: '' });

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = formData.current;
      let response = await signIn({ email, password });
      dispatch(response);
      if (success) navigate('/home');
    },
    [signIn]
  );

  const onCreateAccountClick = useCallback(() => {
    navigate('/create-account');
  }, [navigate]);

  function asyncValidation(params) {
    console.log('hello');
    // return sendRequest(params.value);
  }

  return (
    <form className={'login-form'} onSubmit={onSubmit}>
      <Form formData={formData.current} disabled={loading}>
        <Item
          dataField={'email'}
          editorType={'dxTextBox'}
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message='Email is required' />
          <EmailRule message='Email is invalid' />
          {/* <AsyncRule
            message='Email is already registered'
            validationCallback={asyncValidation}
          /> */}
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
          dataField={'rememberMe'}
          editorType={'dxCheckBox'}
          editorOptions={rememberMeEditorOptions}
        >
          <Label visible={false} />
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
                'Sign In'
              )}
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className={'link'}>
            <Link to={'/reset-password'}>Forgot password?</Link>
          </div>
        </Item>
        <ButtonItem>
          <ButtonOptions
            text={'Create an account'}
            width={'100%'}
            onClick={onCreateAccountClick}
          />
        </ButtonItem>
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
const rememberMeEditorOptions = {
  text: 'Remember me',
  elementAttr: { class: 'form-text' },
};
