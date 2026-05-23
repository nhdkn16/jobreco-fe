import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Bell, ChevronDown, LogOut, User, Upload, LayoutDashboard, BriefcaseBusiness } from 'lucide-react'
import toast from 'react-hot-toast'
import { useAuthStore } from '../../store/authStore'

export default function DashboardTopbar() {
    const navigate = useNavigate()

    const { user, logout } = useAuthStore()

    const [open, setOpen] = useState(false)

    const handleLogout = () => {
        logout()
        toast.success('Đăng xuất thành công')
        navigate('/')
    }

    const menus = [
        {
            title: 'Upload CV',
            path: '/dashboard/upload-cv',
            icon: Upload,
        },
        {
            title: 'Công Việc',
            path: '/dashboard/recommendations',
            icon: BriefcaseBusiness,
        },
    ]

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
        
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* LEFT */}
                <div className="flex items-center gap-12">

                    {/* LOGO */}
                    <Link
                        to="/"
                        className="flex items-center gap-3"
                    >
                        <img
                            src="./src/assets/logo.png"
                            alt="JobReco Logo"
                            className="h-12 w-25 rounded-xl object-cover"
                        />
                    </Link>

                    {/* NAVIGATION */}
                    <nav className="hidden items-center gap-3 lg:flex">
                        
                        {menus.map((menu) => {
                            const Icon = menu.icon

                            return (
                                <NavLink
                                    key={menu.title}
                                    to={menu.path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition border-2 ${
                                            isActive
                                                ? 'border-indigo-600 bg-white text-indigo-600 shadow-lg'
                                                : 'border-transparent text-slate-600 hover:bg-slate-100'
                                        }`
                                    }
                                >
                                    <Icon size={18} />

                                    {menu.title}
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4">

                    {/* NOTIFICATION */}
                    <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white transition hover:bg-slate-50">
                        
                        <Bell size={20} className="text-slate-700" />

                        <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500"></div>
                    </button>

                    {/* PROFILE */}
                    <div className="relative">
                        
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 transition hover:bg-slate-50"
                        >
                        
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-lg font-bold text-white">
                                {user?.name?.charAt(0)}
                            </div>

                            <div className="hidden text-left md:block">
                                
                                <h3 className="font-bold text-slate-900">
                                    {user?.name}
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Ứng viên
                                </p>
                            </div>

                            <ChevronDown
                                size={18}
                                className={`text-slate-400 transition ${
                                    open ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        {/* DROPDOWN */}
                        {open && (
                            <div className="absolute right-0 top-16 w-64 rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
                                
                                <NavLink
                                    to="/dashboard/profile"
                                    className="flex items-center gap-3 rounded-2xl px-4 py-3 text-slate-700 transition hover:bg-slate-100"
                                >
                                    <User size={18} />

                                    Trang Cá Nhân
                                </NavLink>

                                <button
                                    onClick={handleLogout}
                                    className="mt-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-red-500 transition hover:bg-red-50"
                                >
                                    <LogOut size={18} />

                                    Đăng Xuất
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}