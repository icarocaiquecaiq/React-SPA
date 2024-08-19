import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, {loader as rootLoader, action as rootAction} from './routes/Root.jsx'
import Contact, {loader as contactSegment, action as toggleStar} from './routes/Contact.jsx'
import EditContact, {action as editAction} from './routes/Edit.jsx'
import {action as destroyAction} from "./routes/Destroy.jsx"
import Index from './routes/Index.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'




// rotas

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Index></Index> 
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactSegment,
        action: toggleStar
      },
      {
        path: "contacts/:contactId/Edit",
        element: <EditContact />,
        loader: contactSegment,
        action: editAction
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction
      }
    ]
  },
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}></RouterProvider>
  </React.StrictMode>,
)
