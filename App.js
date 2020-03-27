import React, { Component } from 'react'
import "./index.css";
import  Index from  "./Modal/Index"
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Index/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}
