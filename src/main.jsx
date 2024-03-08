import ReactDOM from 'react-dom/client'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))
import {createHashRouter, RouterProvider} from 'react-router-dom'

import Ideas from './routes/Ideas.jsx'
import Videojuegos from './routes/Videojuegos.jsx'
import Eventos from './routes/Eventos.jsx'

const router = createHashRouter([
  {
    path: '/',
    element:  <Ideas />,
  },
  {
    path: '/Videojuegos',
    element:  <Videojuegos />,
  },
  {
    path: '/Eventos',
    element:  <Eventos />,
  }
])
root.render(
  <>
    <RouterProvider router={router}/>
  </>
)
