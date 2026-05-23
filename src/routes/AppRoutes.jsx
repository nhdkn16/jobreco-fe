import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import ProtectedRoute from './Route'
import HomePage from '../pages/landing/HomePage'
import AboutPage from '../pages/landing/AboutPage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterPage from '../pages/auth/RegisterPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import UploadCVPage from '../pages/dashboard/UploadCVPage'
import RecommendationsPage from '../pages/dashboard/RecommendationsPage'
import ProfilePage from '../pages/dashboard/ProfilePage'

export default function AppRoutes() {
    return (
        <Routes>

            {/* MAIN */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
            </Route>

            {/* AUTH */}
            <Route path="/" element={<AuthLayout />}>
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
            </Route>

            {/* DASHBOARD */}
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<DashboardPage />} />

                <Route
                    path="upload-cv"
                    element={<UploadCVPage />}
                />

                <Route
                    path="recommendations"
                    element={<RecommendationsPage />}
                />

                <Route
                    path="profile"
                    element={<ProfilePage />}
                />
            </Route>

        </Routes>
    )
}