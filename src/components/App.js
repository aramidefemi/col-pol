import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route exact path='/' component={Login} />
					<Route path='/login' component={Login} />
					<Route path='/reset-password' component={ResetPassword} />
					<Route path='/reset-password-success' component={PasswordResetSuccess} />
					<Route path='/user-dashboard' component={UserDashboard} />
					<Route path='/update-school-info' component={UpdateSchoolInfo} />
					<Route path='/admin-setup' component={AdminSetup} />
					<Route path='/add-courses' component={AddCourses} />
					<Route path='/add-school' component={AddSchool} />
					<Route path='/change-password' component={ChangePassword} />
					<Route path='/add-school-program' component={AddSchoolProgram} />
					<Route path='/application-setup' component={ApplicationSetup} />
					<Route path='/school-setup' component={SchoolSetup} />
				</div>
			</Router>
		);
	}
}

export default App;
