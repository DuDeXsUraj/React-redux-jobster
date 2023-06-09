
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Register,Error,ProtectedRoute, Landing} from './Pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { AllJobs,AddJobs,Profile,Stats ,SharedLayout } from './Pages/DashBoard';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={
      <ProtectedRoute>
      <SharedLayout/>
      </ProtectedRoute>}>
    <Route index element={<Stats/>}/>
    <Route path='all-jobs'  element={<AllJobs/>}/>
    <Route path='add-job' element={<AddJobs/>}/>
    <Route path='profile' element={<Profile/>}/>
    </Route>
    <Route path='landing' element={<Landing/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='*' element={<Error/>}/>
    </Routes>
    <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}


export default App;
