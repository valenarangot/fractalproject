import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TestPage, ModalPage } from './Pages'
import LoginPage from './Pages/LoginPage/LoginPage'
import UserExperiencePage from './Pages/ServicePages/UserExperiencePage/UserExperiencePage'

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
        <Route
          path='/ux'
          element={<UserExperiencePage />}
        />
      </Routes>
    </main>
  )
}
