import { Outlet } from 'react-router-dom'
import DashboardTopbar from '../components/dashboard/DashboardTopbar'

export default function DashboardLayout() {
    return (
        <div className="min-h-screen bg-slate-50">
        
            <DashboardTopbar />

            <main className="mx-auto max-w-7xl px-6 py-10">
                <Outlet />
            </main>
        </div>
    )
}