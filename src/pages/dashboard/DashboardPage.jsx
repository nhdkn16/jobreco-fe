import { useAuthStore } from '../../store/authStore'

export default function DashboardPage() {
    const { user } = useAuthStore()

    return (
        <div className="mx-auto max-w-7xl px-6 py-20">
        
            <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                
                <h1 className="text-5xl font-black text-slate-900">
                    Dashboard
                </h1>

                <p className="mt-4 text-lg text-slate-600">
                    Chào mừng quay trở lại,
                    <span className="font-bold text-indigo-600">
                        {' '}{user?.name}
                    </span>
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                
                    <div className="rounded-3xl bg-indigo-50 p-8">
                        <h3 className="text-lg font-bold text-slate-900">
                            CV Uploaded
                        </h3>

                        <p className="mt-4 text-4xl font-black text-indigo-600">
                            1
                        </p>
                    </div>

                    <div className="rounded-3xl bg-cyan-50 p-8">
                        <h3 className="text-lg font-bold text-slate-900">
                            Recommended Jobs
                        </h3>

                        <p className="mt-4 text-4xl font-black text-cyan-600">
                            12
                        </p>
                    </div>

                    <div className="rounded-3xl bg-emerald-50 p-8">
                        <h3 className="text-lg font-bold text-slate-900">
                            Match Score
                        </h3>

                        <p className="mt-4 text-4xl font-black text-emerald-600">
                            92%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}