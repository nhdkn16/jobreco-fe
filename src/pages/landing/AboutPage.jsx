export default function AboutPage() {
    return (
        <div className="mx-auto max-w-5xl px-6 py-20">
        
            <div className="mb-12">
                <h1 className="text-5xl font-black tracking-tight text-slate-900">
                    About JobReco
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                    JobReco is an AI-powered job recommendation platform
                    designed to connect candidates with the right career
                    opportunities through intelligent CV analysis and
                    skill matching.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">
                        AI Matching
                    </h3>

                    <p className="mt-4 text-slate-600">
                        Analyze skills and recommend jobs with high accuracy.
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">
                        Skill Gap
                    </h3>

                    <p className="mt-4 text-slate-600">
                        Identify missing skills and improve career direction.
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900">
                        Explainable AI
                    </h3>

                    <p className="mt-4 text-slate-600">
                        Understand why jobs are recommended to you.
                    </p>
                </div>
            </div>
        </div>
    )
}