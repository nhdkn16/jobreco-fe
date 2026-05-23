import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        
            <div className="grid min-h-screen lg:grid-cols-2">
                
                {/* LEFT */}
                <div
                    className="relative hidden overflow-hidden lg:flex"
                    style={{
                        backgroundImage: "url('https://hronline.vn/uploads/images/menu/kien-thuc-nhan-su/tri-tue-nhan-tao-ai.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative z-10 flex w-full flex-col justify-between p-12 text-white">
                        
                        <div>
                            <h1 className="text-4xl font-black">
                                JobReco
                            </h1>

                            <p className="mt-4 max-w-md text-lg leading-8 text-slate-200">
                                Nền tảng JobReco giúp phân tích CV và gợi ý
                                công việc phù hợp dành cho sinh viên
                                và người đi làm.
                            </p>
                        </div>

                        <div>
                            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
                                
                                <h3 className="text-2xl font-black">
                                    Job Recommendation
                                </h3>

                                <p className="mt-4 leading-8 text-slate-200">
                                    Upload CV và để JobReco giúp bạn tìm
                                    công việc phù hợp nhất.
                                </p>
                            </div>
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