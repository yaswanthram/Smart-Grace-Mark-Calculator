import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminLogin from './screens/AdminLogin';
import StudentSignup from './screens/StudentSignup';
import AdminSignup from './screens/AdminSignup';
import StudentLogin from './screens/StudentLogin';
import Home from './screens/Home';
import StudentProfile from './screens/StudentProfile';
import AdminProfile from './screens/AdminProfile';
import FacultyLogin from './screens/FacultyLogin';
import FacultySignup from './screens/FacultySignup';
import FacultyProfile from './screens/FacultyProfile';
import AllStudentList from './screens/AllStudentList';
import AllFacultyList from './screens/AllFacultyList';
import GraceMarkForm from './screens/GraceMarkForm';
import RequestForm from './screens/RequestForm';
import GracemarkList from './screens/Gracemarklist';
import GracemarkEdit from './screens/GracemarkEdit';
import BatchStudents from './screens/BatchStudents';
import Footer from './components/Footer';

function App() {
  const studentSignin = useSelector((state) => state.studentSignin);
  const { studentInfo } = studentSignin;
  const adminSignin = useSelector((state) => state.adminSignin);
  const { adminInfo } = adminSignin;
  const facultySignin = useSelector((state) => state.facultySignin);
  const { facultyInfo } = facultySignin;
  return (
    <Router>
      <Navbar />
      <main className='py-3'>
        <Container>
          {studentInfo ? (
            <Route exact path='/' component={StudentProfile} />
          ) : adminInfo ? (
            <Route exact path='/' component={AdminProfile} />
          ) : facultyInfo ? (
            <Route exact path='/' component={FacultyProfile} />
          ) : (
            <Route exact path='/' component={Home} />
          )}
          <Route path='/admin/login' component={AdminLogin} />
          <Route path='/admin/signup' component={AdminSignup} />
          <Route path='/admin/profile' component={AdminProfile} />
          <Route path='/admin/students' component={AllStudentList} />
          <Route path='/admin/faculties' component={AllFacultyList} />
          <Route path='/admin/addGraceMarkDetails' component={GraceMarkForm} />
          <Route path='/admin/gracemarklist' component={GracemarkList} />
          <Route path='/admin/gracemark/:id' component={GracemarkEdit} />
          <Route path='/student/login' component={StudentLogin} />
          <Route path='/student/signup' component={StudentSignup} />
          <Route path='/student/profile' component={StudentProfile} />
          <Route path='/student/request' component={RequestForm} />
          <Route path='/faculty/login' component={FacultyLogin} />
          <Route path='/faculty/signup' component={FacultySignup} />
          <Route path='/faculty/profile' component={FacultyProfile} />
          <Route path='/faculty/adviser/:id/:id' component={BatchStudents} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
