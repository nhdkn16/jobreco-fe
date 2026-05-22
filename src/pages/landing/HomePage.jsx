export default function HomePage() {
    return (
        <section className="relative overflow-hidden">
        
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl"></div>

            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

            <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
                
                <div className="mb-6 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
                    AI-Powered Career Matching
                </div>

                <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-900 md:text-7xl">
                    Find Your Perfect Job With AI
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    Upload your CV and let JobReco analyze your skills,
                    experience, and career direction to recommend the
                    best jobs for you.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <button className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-indigo-500/20 transition hover:scale-105">
                        Upload CV
                    </button>

                    <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-100">
                        Explore Jobs
                    </button>
                </div>
            </div>
        </section>
    )
}