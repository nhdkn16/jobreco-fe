import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
// import { Github, Mail } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'

export default function LoginPage() {
    const navigate = useNavigate()

    const { login } = useAuthStore()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const mockUser = {
            id: 1,
            name: 'Nguyễn Hải Đăng',
            email: data.email,
        }

        login(mockUser)

        toast.success('Đăng nhập thành công')

        navigate('/dashboard')
    }

    return (
        <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/50">
        
            <div className="text-center">
                
                <h1 className="text-4xl font-black text-slate-900">
                    Đăng nhập
                </h1>

                <p className="mt-4 text-slate-500">
                    Chào mừng quay trở lại với JobReco.
                </p>
            </div>

            {/* SOCIAL */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
                
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50">
                    {/* <Github size={18} /> */}
                    Github
                </button>

                <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50">
                    {/* <Mail size={18} /> */}
                    Google
                </button>
            </div>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-4">
                
                <div className="h-px flex-1 bg-slate-200"></div>

                    <span className="text-sm text-slate-400">
                        hoặc
                    </span>

                <div className="h-px flex-1 bg-slate-200"></div>
            </div>

            {/* FORM */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
            >
                
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-indigo-500"
                        {...register('email', {
                            required: 'Email không được để trống',
                        })}
                    />

                    {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-indigo-500"
                        {...register('password', {
                            required: 'Mật khẩu không được để trống',
                            minLength: {
                                value: 6,
                                message: 'Mật khẩu tối thiểu 6 ký tự',
                            },
                        })}
                    />

                    {errors.password && (
                        <p className="mt-2 text-sm text-red-500">
                        {errors.password.message}
                        </p>
                    )}
                </div>

                <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-500/20 transition hover:scale-[1.02]">
                    Đăng nhập
                </button>
            </form>

            <p className="mt-8 text-center text-slate-500">
                Chưa có tài khoản?
                <Link
                    to="/register"
                    className="ml-2 font-semibold text-indigo-600"
                >
                    Đăng ký
                </Link>
            </p>
        </div>
    )
}