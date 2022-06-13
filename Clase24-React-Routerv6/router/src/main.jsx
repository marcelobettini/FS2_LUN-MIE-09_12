import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App'
import Expenses from "./routes/Expenses"
import Invoices from "./routes/Invoices"
import NotFound from "./routes/NotFound"
import Invoice from './routes/Invoice'
import ProtectedRoute from "./auth/ProtectedRoute"
import Protected from "./routes/Protected"
import SignIn from "./routes/SignIn"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route index element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>} />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          <Route element={<ProtectedRoute />} >
            <Route path="/protected" element={<Protected />} />
          </Route>

          <Route path='/signin' element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode >
)
