import React from 'react'; 
import Header from './templates/header';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import PasswordResetSuccess from './pages/password-reset-success';
import UserDashboard from './pages/user-dashboard-empty';
import UpdateSchoolInfo from './pages/update-school-info';
import AdminSetup from './pages/admin-setup';
import AddCourses from './pages/add-courses';
import AddSchool from './pages/add-school';
import ChangePassword from './pages/change-password';
import AddSchoolProgram from './pages/add-school-program';
import ApplicationSetup from './pages/application-setup';
import SchoolSetup from './pages/school-setup';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
  } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  
  import { OPEN_ASIDE, LOGIN } from '../redux/application/action'; 

  
class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={Login} />
					<Route path='/login' component={Login} />
					<Route path='/reset-password' component={ResetPassword} />
					<Route path='/reset-password-success' component={PasswordResetSuccess} />
					<ProtectedRoute path='/user-dashboard' component={UserDashboard} />
					<ProtectedRoute path='/update-school-info' component={UpdateSchoolInfo} />
					<ProtectedRoute path='/admin-setup' component={AdminSetup} />
					<ProtectedRoute path='/add-courses' component={AddCourses} />
					<ProtectedRoute path='/add-school' component={AddSchool} />
					<ProtectedRoute path='/change-password' component={ChangePassword} />
					<ProtectedRoute path='/add-school-program' component={AddSchoolProgram} />
					<ProtectedRoute path='/application-setup' component={ApplicationSetup} />
					<ProtectedRoute path='/school-setup' component={SchoolSetup} />
				</div>
			</Router>
		);
	}
}

const ProtectedRoute = ({ path, component: Child }) => {
	let { user_token } = useSelector((state) => state.app);
	const token = user_token || window.localStorage.getItem('user_token') || null;
	console.log('token hood', token,  user_token || window.localStorage.getItem('user_token') || null);
	if (token === null) {
	  return <Redirect to="/login" />;
	}
	return (
	  <Route path={path}>
		  <Child /> 
	  </Route>
	);
  };
export default App;
