import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import AppBar from './components/AppBar/AppBar';
import { connect } from 'react-redux';
import { authOperations } from './redux/Auth';

import './styles.css';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactsList';
import Container from './components/Container/Container';
import { authActions } from './redux/Auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />
        <Switch>
          <Route exact path="/register" component={RegisterView} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/contacts" component={ContactForm} />
          <Route path="/" component={HomeView} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
