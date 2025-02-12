import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import CreatePrescription from './pages/CreatePrescription'
import CreateTemplate from './pages/CreateTemplate'
import Home from './pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
      },
      {
        path: 'create-templates',
        element: <CreateTemplate />
      },
      {
        path: 'create-prescription',
        element: <CreatePrescription />
      }
    ]
  }
])
