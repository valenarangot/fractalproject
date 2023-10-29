import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TestPage, ModalPage } from './Pages'
import LoginPage from './Pages/LoginPage/LoginPage'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<TestPage />}
        />
        <Route
          path='/Modal'
          element={<ModalPage />}
        />
        <Route
          path='/Login'
          element={<LoginPage />}
        />
      </Routes>
    </main>
  )
}
