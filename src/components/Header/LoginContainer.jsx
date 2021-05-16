import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { setUserDataAC } from '../../redux/auth-reducer';
import Header from './Header'

class LoginContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true}).then(response => {
            if(response.data.resultCode === 0) {
                this.props.getAuth(response.data.data.id, response.data.data.email,response.data.data.login)
            }
         
        })
    }


    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authData.isAuth,
        login: state.authData.login,
        id: state.authData.id
    }
};

let mapDispatchToProps = (dispath) => {
    return {
        getAuth: (id,email,login) => {
            return dispath(setUserDataAC(id,email,login))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);