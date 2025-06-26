import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Welcome from './pages/Welcome.jsx'
import InserNumber from './pages/InserNumber.jsx'
import VerifyCode from './pages/VerifyCode.jsx'
import BeforeCamera from './pages/BeforeCamera.jsx'
import CameraPageBi from './pages/CameraBi.jsx'
import CameraPageFace from './pages/CameraFace.jsx'
import AnalizeData from './pages/AnalizeData.jsx'
import InsertName from './pages/InsertName.jsx'
import NotConfirmed from './pages/NotConfirmed.jsx'
import ConfirmData from './pages/ConfirmData.jsx'
import CameraBiBack from './pages/CameraBiBack.jsx' 
import PassPageCamera from './pages/PassPageCamera.jsx' 
import PassPageCameraFace from './pages/PassPageCameraFace.jsx' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/InsertNumber",
    element: <InserNumber />,
  },
  {
    path: "/VerifyCode",
    element: <VerifyCode />,
  },
  {
    path: "/BeforeCamera",
    element: <BeforeCamera />,
  },
  {
    path: "/CameraBi",
    element: <CameraPageBi />,
  },
  {
    path: "/CameraFace",
    element: <CameraPageFace />,
  },
  {
    path: "/AnalizeData",
    element: <AnalizeData />,
  },
  {
    path: "/InsertName",
    element: <InsertName />,
  },
  {
    path: "/NotConfirmed",
    element: <NotConfirmed />
  },
  {
    path: '/CameraBiBack',
    element: <CameraBiBack />
  },
  {
    path: "/ConfirmData",
    element: <ConfirmData />
  },
  {
    path: "/PassPageCamera",
    element: <PassPageCamera />
  },
  {
    path: "/PassPageCameraFace",
    element: <PassPageCameraFace />
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
