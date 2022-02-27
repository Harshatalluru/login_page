import React, { Component } from 'react'
import './header.css'
import logo from './logo.png'
export default class Header extends Component {
  render() {
    return (
      <div className='h'>
          <div className='h-logo'>
          <img src={logo} alt=""/>
          </div>
          
          <div className='h-button'>
              <span>
              <button className='button1'>StartFree Trail</button>
              <button className='button2'>Login</button></span>
          </div>
         
          
      </div>
    )
  }
}
