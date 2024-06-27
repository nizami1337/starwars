import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Photos from './components/Photos/Photos.tsx'
// import Photo from './components/Photo/Photo.tsx'
// import store from './redux/store.ts'
import { Provider } from 'react-redux'
import Movies from './components/Movies/Movies.tsx'
import { BrowserRouter, Link, createBrowserRouter } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <div><h1>404 Error</h1><Link to={'/'}>back to main page</Link></div>
//   },
//   {
//     path: '/movies',
//     element: <Movies />
//   },
//   // {
//   //   path: '/photos/:photoId',
//   //   element: <Photo />
//   // }
// ])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
