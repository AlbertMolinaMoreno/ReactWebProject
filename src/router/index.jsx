import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Root from '../layouts/mainLayout'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
      ]
    }
  ])
  
  export default router
  