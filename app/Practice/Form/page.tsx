'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  SignupFormData,
  LoginFormData,
  validateSignupForm,
  validateLoginForm,
  formContainerStyle,
  cardStyle,
  inputStyle,
  labelStyle,
  buttonStyle,
  errorMessageStyle,
} from '../(root)/mathutils';

export default function FormPage() {
  const [isLogin, setIsLogin] = useState(false);

  // Signup Form
  const signupForm = useForm<SignupFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  // Login Form
  const loginForm = useForm<LoginFormData>({
    mode: 'onChange',
    defaultValues: {
      emailOrName: '',
      password: '',
    },
  });

  const signupPassword = signupForm.watch('password');

  const onSignupSubmit: SubmitHandler<SignupFormData> = (data) => {
    const validationErrors = validateSignupForm(data);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Signup submitted successfully:', data);
      alert('Account created successfully!');
      signupForm.reset();
    } else {
      console.log('Validation errors:', validationErrors);
    }
  };

  const onLoginSubmit: SubmitHandler<LoginFormData> = (data) => {
    const validationErrors = validateLoginForm(data);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Login submitted successfully:', data);
      alert('Logged in successfully!');
      loginForm.reset();
    } else {
      console.log('Validation errors:', validationErrors);
    }
  };

  return (
    <div style={formContainerStyle as React.CSSProperties}>
      <div style={cardStyle as React.CSSProperties}>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#333',
            marginBottom: '30px',
          }}
        >
          {isLogin ? 'Sign In' : 'Create Account'}
        </h1>

        {/* SIGNUP FORM */}
        {!isLogin && (
          <form
            onSubmit={signupForm.handleSubmit(onSignupSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Name Field */}
            <div>
              <label htmlFor="signup-name" style={labelStyle}>
                Full Name
              </label>
              <input
                id="signup-name"
                type="text"
                placeholder="John Doe"
                {...signupForm.register('name', {
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name must be at least 2 characters' },
                })}
                style={inputStyle(!!signupForm.formState.errors.name) as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                onBlur={(e) =>
                  (e.target.style.borderColor = signupForm.formState.errors.name
                    ? '#ef4444'
                    : '#ddd')
                }
              />
              {signupForm.formState.errors.name && (
                <p style={errorMessageStyle}>
                  ⚠️ {signupForm.formState.errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="signup-email" style={labelStyle}>
                Email Address
              </label>
              <input
                id="signup-email"
                type="email"
                placeholder="john@example.com"
                {...signupForm.register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format',
                  },
                })}
                style={inputStyle(!!signupForm.formState.errors.email) as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                onBlur={(e) =>
                  (e.target.style.borderColor = signupForm.formState.errors.email
                    ? '#ef4444'
                    : '#ddd')
                }
              />
              {signupForm.formState.errors.email && (
                <p style={errorMessageStyle}>
                  ⚠️ {signupForm.formState.errors.email.message}
                </p>
              )}
            </div>

            {/* Username Field */}
            <div>
              <label htmlFor="signup-username" style={labelStyle}>
                Username
              </label>
              <input
                id="signup-username"
                type="text"
                placeholder="johndoe123"
                {...signupForm.register('username', {
                  required: 'Username is required',
                  minLength: { value: 3, message: 'Username must be at least 3 characters' },
                  validate: (value) =>
                    value !== 'admin' || 'Username cannot be admin',
                })}
                style={inputStyle(!!signupForm.formState.errors.username) as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                onBlur={(e) =>
                  (e.target.style.borderColor = signupForm.formState.errors.username
                    ? '#ef4444'
                    : '#ddd')
                }
              />
              {signupForm.formState.errors.username && (
                <p style={errorMessageStyle}>
                  ⚠️ {signupForm.formState.errors.username.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="signup-password" style={labelStyle}>
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                placeholder="••••••••"
                {...signupForm.register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                style={inputStyle(!!signupForm.formState.errors.password) as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                onBlur={(e) =>
                  (e.target.style.borderColor = signupForm.formState.errors.password
                    ? '#ef4444'
                    : '#ddd')
                }
              />
              {signupForm.formState.errors.password && (
                <p style={errorMessageStyle}>
                  ⚠️ {signupForm.formState.errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="signup-confirm" style={labelStyle}>
                Confirm Password
              </label>
              <input
                id="signup-confirm"
                type="password"
                placeholder="••••••••"
                {...signupForm.register('confirmPassword', {
                  required: 'Please confirm your password',
                  validate: (value) =>
                    value === signupPassword || 'Passwords do not match',
                })}
                style={inputStyle(!!signupForm.formState.errors.confirmPassword) as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                onBlur={(e) =>
                  (e.target.style.borderColor = signupForm.formState.errors.confirmPassword
                    ? '#ef4444'
                    : '#ddd')
                }
              />
              {signupForm.formState.errors.confirmPassword && (
                <p style={errorMessageStyle}>
                  ⚠️ {signupForm.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <button
              type="submit"
              style={buttonStyle.primary as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Create Account
            </button>

            <button
              type="button"
              onClick={() => signupForm.reset()}
              style={buttonStyle.secondary as React.CSSProperties}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#e0e0e0')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#f0f0f0')}
            >
              Clear Form
            </button>
          </form>
        )}

        {/* LOGIN FORM */}
        {isLogin && (
          <form
            onSubmit={loginForm.handleSubmit(onLoginSubmit)}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Email or Name Field */}
            <div>
              <label htmlFor="login-email" style={labelStyle}>
                Email or Name
              </label>
              <input
                id="login-email"
                type="text"
                placeholder="john@example.com or john"
                {...loginForm.register('emailOrName', {
                  required: 'Email or name is required',
                })}
                style={inputStyle(!!loginForm.formState.errors.emailOrName) as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                onBlur={(e) =>
                  (e.target.style.borderColor = loginForm.formState.errors.emailOrName
                    ? '#ef4444'
                    : '#ddd')
                }
              />
              {loginForm.formState.errors.emailOrName && (
                <p style={errorMessageStyle}>
                  ⚠️ {loginForm.formState.errors.emailOrName.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="login-password" style={labelStyle}>
                Password
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                {...loginForm.register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                style={inputStyle(!!loginForm.formState.errors.password) as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = '#667eea')}
                onBlur={(e) =>
                  (e.target.style.borderColor = loginForm.formState.errors.password
                    ? '#ef4444'
                    : '#ddd')
                }
              />
              {loginForm.formState.errors.password && (
                <p style={errorMessageStyle}>
                  ⚠️ {loginForm.formState.errors.password.message}
                </p>
              )}
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              style={buttonStyle.primary as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Sign In
            </button>
          </form>
        )}

        {/* Toggle Link */}
        <p
          style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '13px',
            marginTop: '20px',
          }}
        >
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(!isLogin);
              signupForm.reset();
              loginForm.reset();
            }}
            style={{
              color: '#667eea',
              fontWeight: '600',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
          >
            {isLogin ? 'Sign up' : 'Sign in'}
          </a>
        </p>
      </div>
    </div>
  );
}
