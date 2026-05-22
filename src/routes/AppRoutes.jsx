import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import HomePage from '../pages/landing/HomePage'
import AboutPage from '../pages/landing/AboutPage'

import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>
        </Routes>
    )
}