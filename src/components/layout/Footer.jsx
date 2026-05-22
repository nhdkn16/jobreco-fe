export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
                
                <div>
                    <h2 className="text-lg font-bold text-slate-900">
                        JobReco
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        AI-powered job recommendation platform.
                    </p>
                </div>

                <div className="text-sm text-slate-500">
                    © 2026 JobReco. All rights reserved.
                </div>
            </div>
        </footer>
    )
}