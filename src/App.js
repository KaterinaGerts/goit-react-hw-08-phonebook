import Container from 'components/Container';
import { Switch, Route } from 'react-router-dom';
import AppBar  from 'components/AppBar';
import  HomeView  from 'views/HomeView';
import  RegisterView  from 'views/RegisterView';
import  LoginView  from 'views/LoginView';
import  ContactsView  from 'views/ContactsView';


function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/users/signup" component={RegisterView} />
        <Route path="/users/login" component={LoginView} />      
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  );
}

export default App;
