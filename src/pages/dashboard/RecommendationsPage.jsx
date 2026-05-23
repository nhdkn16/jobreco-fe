import { useState } from 'react'
import { Heart, ChevronLeft, ChevronRight, Search, MapPin } from 'lucide-react'

export default function RecommendationsPage() {
    const jobs = [
        {
            id: 1,
            title: 'Frontend Developer ReactJS',
            company: 'FPT Software',
            salary: '15 - 25 triệu',
            location: 'Đà Nẵng',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg',
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            company: 'VNG Corporation',
            salary: '18 - 30 triệu',
            location: 'Hồ Chí Minh',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/VNG_Corporation_logo.svg',
        },
        {
            id: 3,
            title: 'Backend NodeJS Developer',
            company: 'Shopee',
            salary: '20 - 35 triệu',
            location: 'Hà Nội',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg',
        },
        {
            id: 4,
            title: 'AI Engineer',
            company: 'VinAI',
            salary: '30 - 50 triệu',
            location: 'Hà Nội',
            logo: 'https://vinai.io/wp-content/uploads/2021/12/logo_black.png',
        },
        {
            id: 5,
            title: 'Mobile Developer Flutter',
            company: 'Zalo',
            salary: '18 - 28 triệu',
            location: 'Hồ Chí Minh',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg',
        },
        {
            id: 6,
            title: 'Data Analyst',
            company: 'KMS Technology',
            salary: '15 - 22 triệu',
            location: 'Đà Nẵng',
            logo: 'https://kms-technology.com/wp-content/uploads/2020/10/kms-logo.svg',
        },
        {
            id: 7,
            title: 'Java Developer',
            company: 'TMA Solutions',
            salary: '18 - 30 triệu',
            location: 'Hồ Chí Minh',
            logo: 'https://tma.vn/Portals/0/TMAlogo.png',
        },
        {
            id: 8,
            title: 'QA/QC Tester',
            company: 'Axon Active',
            salary: '12 - 20 triệu',
            location: 'Đà Nẵng',
            logo: 'https://www.axonactive.com/wp-content/uploads/2021/02/logo.png',
        },
        {
            id: 9,
            title: 'DevOps Engineer',
            company: 'NashTech',
            salary: '25 - 40 triệu',
            location: 'Hà Nội',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/NashTech_Logo.png',
        },
    ]

    const jobsPerPage = 6
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(jobs.length / jobsPerPage)
    const startIndex = (currentPage - 1) * jobsPerPage
    const currentJobs = jobs.slice(
        startIndex,
        startIndex + jobsPerPage
    )

    return (
        <div>
            {/* HEADER */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                
                <h1 className="text-3xl font-black tracking-tight text-slate-900">
                    Danh sách công việc
                </h1>
            </div>

            {/* FILTER BAR */}
            <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
                
                <div className="grid gap-4 lg:grid-cols-5">
                
                    {/* SEARCH */}
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                        
                        <Search size={20} className="text-slate-400" />

                        <input
                            type="text"
                            placeholder="Tìm kiếm công việc..."
                            className="w-full bg-transparent outline-none"
                        />
                    </div>

                    {/* LOCATION */}
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                        
                        <MapPin size={20} className="text-slate-400" />

                        <select className="w-full bg-transparent outline-none">
                            <option>Tất cả địa điểm</option>
                            <option>Đà Nẵng</option>
                            <option>Hồ Chí Minh</option>
                            <option>Hà Nội</option>
                        </select>
                    </div>

                    {/* SALARY */}
                    <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none">
                        <option>Mức lương</option>
                        <option>10 - 20 triệu</option>
                        <option>20 - 30 triệu</option>
                        <option>30+ triệu</option>
                    </select>

                    <select className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none">
                        <option>Level</option>
                        <option>Intern</option>
                        <option>Fresher</option>
                        <option>Junior</option>
                        <option>Senior</option>
                        <option>Leader/Manager</option>
                    </select>

                    {/* BUTTON */}
                    <button className="rounded-2xl border-2 border-indigo-600 bg-white px-5 py-3 font-bold text-indigo-600 shadow-md transition hover:scale-[1.02] hover:bg-indigo-50">
                        Áp dụng bộ lọc
                    </button>
                </div>
            </div>

            {/* JOB LIST */}
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
                
                {currentJobs.map((job) => (
                    <div
                        key={job.id}
                        className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        
                        {/* TOP */}
                        <div className="flex items-start justify-between gap-4">
                        
                            <div className="flex gap-4">
                                
                                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-2">
                                    <img
                                        src={job.logo}
                                        alt={job.company}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <div>
                                
                                    <h3 className="line-clamp-2 text-xl font-bold text-slate-900">
                                        {job.title}
                                    </h3>

                                    <p className="mt-2 text-slate-500">
                                        {job.company}
                                    </p>
                                </div>
                            </div>

                            <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300 text-emerald-500 transition hover:bg-emerald-50">
                                <Heart size={20} />
                            </button>
                        </div>

                        {/* TAGS */}
                        <div className="mt-6 flex flex-wrap gap-3">
                        
                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                {job.salary}
                            </span>

                            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                                {job.location}
                            </span>
                        </div>

                        {/* BUTTON */}
                        <button className="mt-7 w-fit rounded-2xl border-2 border-indigo-600 bg-white px-6 py-3 font-bold text-indigo-600 transition hover:scale-[1.02] hover:bg-indigo-50">
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>

            {/* PAGINATION */}
            <div className="mt-14 flex items-center justify-center gap-3">
                
                <button
                    onClick={() =>
                        setCurrentPage((prev) =>
                            prev > 1 ? prev - 1 : prev
                        )
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100"
                >
                    <ChevronLeft size={20} />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1

                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition ${
                                currentPage === page
                                    ? 'border-2 border-indigo-600 bg-white text-indigo-600 shadow-md'
                                    : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
                            }`}
                        >
                            {page}
                        </button>
                    )
                })}

                <button
                    onClick={() =>
                        setCurrentPage((prev) =>
                            prev < totalPages ? prev + 1 : prev
                        )
                    }
                    className="flex h-9 w- items-center justify-center rounded-full border border-slate-200 bg-white transition hover:bg-slate-100"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    )
}