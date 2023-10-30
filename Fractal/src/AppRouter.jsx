import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProjectsPage, UserExperiencePage, LoginPage, SubmitPage, TestPage } from './pages'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/'
          element={<TestPage />}
        />

        <Route
          path='/Projects'
          element={<ProjectsPage />}
        />

        <Route
          path='/Services/UX'
          element={<UserExperiencePage />}
        />

        <Route
          path='/Login'
          element={<LoginPage />}
        />

        <Route
          path='/admin/submit'
          element={<SubmitPage />}
        />

      </Routes>
    </main>
  )
}
