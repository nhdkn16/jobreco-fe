import { Link, useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import toast from 'react-hot-toast'

export default function RegisterPage() {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = () => {
        toast.success('Đăng ký thành công')

        navigate('/login')
    }

    return (
        <div className="w-full max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/50">
        
            <div className="text-center">
                
                <h1 className="text-4xl font-black text-slate-900">
                    Tạo tài khoản
                </h1>

                <p className="mt-4 text-slate-500">
                    Tham gia cùng JobReco ngay hôm nay.
                </p>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-10 space-y-5"
            >
                
                <div>
                    <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-indigo-500"
                        {...register('name', {
                            required: 'Họ tên không được để trống',
                        })}
                    />

                    {errors.name && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.name.message}
                        </p>
                    )}
                </div>

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

                <div>
                    <input
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        className="w-full rounded-2xl border border-slate-300 px-4 py-4 outline-none transition focus:border-indigo-500"
                        {...register('confirmPassword', {
                        required: 'Vui lòng xác nhận mật khẩu',
                        validate: (value) =>
                            value === watch('password') ||
                            'Mật khẩu xác nhận không khớp',
                        })}
                    />

                    {errors.confirmPassword && (
                        <p className="mt-2 text-sm text-red-500">
                            {errors.confirmPassword.message}
                        </p>
                    )}
                </div>

                <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-4 text-lg font-bold text-white shadow-xl shadow-indigo-500/20 transition hover:scale-[1.02]">
                    Đăng ký
                </button>
            </form>

            <p className="mt-8 text-center text-slate-500">
                Đã có tài khoản?
                <Link
                    to="/login"
                    className="ml-2 font-semibold text-indigo-600"
                >
                    Đăng nhập
                </Link>
            </p>
        </div>
    )
}