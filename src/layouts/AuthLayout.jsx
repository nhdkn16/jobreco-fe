import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        
            <div className="grid min-h-screen lg:grid-cols-2">
                
                {/* LEFT */}
                <div className="hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-600 to-cyan-500 p-12 text-white lg:flex">
                
                    <div>
                        <h1 className="text-4xl font-black">
                            JobReco
                        </h1>

                        <p className="mt-4 max-w-md text-lg leading-8 text-indigo-100">
                            Nền tảng AI giúp phân tích CV và gợi ý
                            công việc phù hợp dành cho sinh viên
                            và người đi làm.
                        </p>
                    </div>

                    <div>
                        <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
                        
                            <h3 className="text-2xl font-bold">
                                AI Job Recommendation
                            </h3>

                            <p className="mt-4 leading-8 text-indigo-100">
                                Upload CV và để AI giúp bạn tìm
                                công việc phù hợp nhất.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center justify-center p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}