/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('User register in successfully')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 font-poppins'>
      <div className='w-full max-w-md p-8'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-2xl font-semibold mb-6 text-gray-800'>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='username'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Username
                </label>
                <div className='relative'>
                  <input
                    id='username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-full px-3 text-sm py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your username'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Email Address
                </label>
                <div className='relative'>
                  <input
                    id='email'
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-3 text-sm py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    placeholder='Enter your email address'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Password
                </label>
                <input
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Enter your password'
                  className='w-full px-3 text-sm py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              >
                SignUp Now →
              </button>

              <div className='text-center mt-4'>
                <span className='text-sm text-gray-600'>
                  Already have an account?
                  <Link
                    to='/login'
                    className='text-blue-500 hover:text-blue-600 ml-1'
                  >
                    LogIn!
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
