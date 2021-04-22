import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

let mapToStateProps = (state) => {
  return {
    navdata: state.sidebar.navdata
  }
}
let mapToDispatchProps = (dispatch) => {
  return {

  }
} 

const NavbarContainer = connect(mapToStateProps, mapToDispatchProps)(Navbar)

export default NavbarContainer;