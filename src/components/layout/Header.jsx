import { Link, useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

import { BriefcaseBusiness } from 'lucide-react'

import { useAuthStore } from '../../store/authStore'

export default function Header() {
  const navigate = useNavigate()

  const { user, logout } = useAuthStore()

  const handleLogout = () => {
        logout()
        toast.success('Đăng xuất thành công')
        navigate('/')
  }

  return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg">
        
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

                {/* LOGO */}
                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
                        <BriefcaseBusiness size={20} />
                    </div>

                    <div>
                        <h1 className="text-lg font-bold tracking-tight text-slate-900">
                            JobReco
                        </h1>

                        <p className="text-xs text-slate-500">
                            AI Job Recommendation
                        </p>
                    </div>
                </Link>

                {/* MENU */}
                <nav className="hidden items-center gap-8 md:flex">
                
                    <Link
                        to="/"
                        className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                    >
                        Trang chủ
                    </Link>

                    <Link
                        to="/about"
                        className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                    >
                        Giới thiệu
                    </Link>
                </nav>

                {/* ACTIONS */}
                <div className="flex items-center gap-3">

                    {user ? (
                        <>
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            Dashboard
                        </button>

                        <button
                            onClick={handleLogout}
                            className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-105"
                        >
                            Đăng xuất
                        </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                            >
                                Đăng nhập
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:scale-105"
                            >
                                Bắt đầu
                            </Link>
                        </>
                    )}

                </div>
            </div>
        </header>
    )
}