export default function LoginPage() {
    return (
        <div className="flex min-h-[80vh] items-center justify-center px-6">
        
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
                
                <h1 className="text-3xl font-black text-slate-900">
                    Welcome Back
                </h1>

                <p className="mt-2 text-slate-500">
                    Login to continue using JobReco.
                </p>

                <form className="mt-8 space-y-5">
                
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
                    />

                    <button className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-3 font-semibold text-white">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}