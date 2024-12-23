
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Assessments from './pages/Assessments/Assessments'
import Branch from './pages/Branch/Branch'
import Employee from './pages/Employee/Employee'
import Module from './pages/Modules/Module'
import Training from './pages/Training/Training'
import Setting from './pages/Setting/Setting'
import CreateTraining from './pages/Training/CreateTraining'
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/500.css"; // Weight 500
import "@fontsource/poppins/700.css"; // Weight 700
import AssignedTrainings from './pages/Training/AssignedTrainings'
import AssingOrdelete from './pages/Training/AssingOrdelete'
import CreateModule from './pages/Modules/createmodule/CreateModule'
import CreateTrainings from './pages/Training/createTraining/CreateTrainings'

function App() {

  return (
    <>

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/assessments'} element={<Assessments />} />
        <Route path={'/branch'} element={<Branch />} />
        <Route path={'/employee'} element={<Employee />} />
        <Route path={'/module'} element={<Module />} />
        <Route path={'/Alltraining'} element={<Training />} />
        <Route path={'/settings'} element={<Setting />} />
        <Route path={'/training'} element={<CreateTraining />} />
        <Route path={'/AssigData'} element={< AssignedTrainings />} />
        <Route path={'/AssigTraing'} element={< AssingOrdelete />} />
        <Route path={'/createModule'} element={< CreateModule />} />
        <Route path={'/createnewtraining'} element={< CreateTrainings />} />
        {/*  */}
      </Routes>

    </>
  )
}

export default App
