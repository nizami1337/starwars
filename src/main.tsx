import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Photos from './components/Photos/Photos.tsx'
// import Photo from './components/Photo/Photo.tsx'
// import store from './redux/store.ts'
import Movies from './components/Movies/Movies.tsx'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import People from './components/People/People.tsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div><h1>404 Error</h1><Link to={'/'}>back to main page</Link></div>
  },
  {
    path: '/movies',
    element: <Movies />
  },
  {
    path: '/people',
    element: <People />
  },
  // {
  //   path: '/photos/:photoId',
  //   element: <Photo />
  // }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router}>
    
  </RouterProvider>
  </React.StrictMode>,
)
