import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Projects from '../pages/Projects'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/projects',
    Component: Projects,
  },
  {
    path: '/about',
    Component: About,
  },
])
