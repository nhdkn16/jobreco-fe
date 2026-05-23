import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { UploadCloud, FileText, Brain, Sparkles } from 'lucide-react'

export default function UploadCVPage() {
    const [file, setFile] = useState(null)

    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles[0])
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        },
        multiple: false,
    })

    return (
        <div className="mx-auto max-w-7xl">
        
            {/* HEADER */}
            <div className="mb-10">
                
                <h1 className="text-4xl font-black tracking-tight text-slate-900">
                    Upload CV
                </h1>

                <p className="mt-4 text-lg text-slate-600">
                    Upload CV để AI phân tích kỹ năng và gợi ý công việc.
                </p>
            </div>

            {/* DROPZONE */}
            <div
                {...getRootProps()}
                className={`cursor-pointer rounded-[32px] border-2 border-dashed p-14 text-center transition ${
                isDragActive
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-slate-300 bg-white'
                }`}
            >
                <input {...getInputProps()} />

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
                    <UploadCloud size={38} />
                </div>

                <h3 className="mt-8 text-2xl font-black text-slate-900">
                    Kéo & thả CV tại đây
                </h3>

                <p className="mt-4 text-lg text-slate-500">
                    Hỗ trợ định dạng: pdf, doc
                </p>
            </div>

            {/* FILE PREVIEW */}
            {file && (
                <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
                
                    <div className="flex items-center gap-5">
                        
                        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-100 text-indigo-600">
                            <FileText size={40} />
                        </div>

                        <div>
                        
                            <h3 className="text-xl font-bold text-slate-900">
                                {file.name}
                            </h3>

                            <p className="mt-2 text-slate-500">
                                {(file.size / 1024).toFixed(2)} KB
                            </p>
                        </div>
                    </div>

                    {/* AI ANALYSIS */}
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">
                        
                        {/* SKILLS */}
                        <div className="rounded-3xl bg-slate-50 p-8">
                        
                            <div className="mb-6 flex items-center gap-3">
                                
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
                                    <Brain size={20} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    Skills Extraction
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                
                                {[
                                    'ReactJS',
                                    'JavaScript',
                                    'TailwindCSS',
                                    'NodeJS',
                                    'Git',
                                    'REST API',
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full bg-indigo-100 px-5 py-3 font-medium text-indigo-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* MATCH SCORE */}
                        <div className="rounded-3xl bg-slate-50 p-8">
                        
                            <div className="mb-6 flex items-center gap-3">
                                
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white">
                                    <Sparkles size={20} />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900">
                                    Match Score
                                </h3>
                            </div>

                            <div className="flex items-center gap-6">
                                
                                <div className="flex h-32 w-38 items-center justify-center rounded-full border-[12px] border-indigo-500 text-3xl font-black text-indigo-600">
                                    92%
                                </div>

                                <div>
                                
                                    <h4 className="text-xl font-bold text-slate-900">
                                        Excellent Match
                                    </h4>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        Hồ sơ của bạn rất phù hợp với các vị trí Frontend Developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RECOMMENDATIONS */}
                    <div className="mt-10">
                        
                        <h3 className="text-3xl font-black text-slate-900">
                            Công việc đề xuất
                        </h3>

                        <div className="mt-8 grid gap-6 lg:grid-cols-3">
                        
                            {[
                                {
                                    title: 'Frontend Developer',
                                    company: 'FPT Software',
                                    match: '92%',
                                },
                                {
                                    title: 'ReactJS Engineer',
                                    company: 'VNG',
                                    match: '89%',
                                },
                                {
                                    title: 'UI Developer',
                                    company: 'Shopee',
                                    match: '85%',
                                },
                            ].map((job) => (
                                <div
                                    key={job.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div className="flex items-start justify-between">
                                        
                                        <div>
                                        
                                            <h4 className="text-2xl font-bold text-slate-900">
                                                {job.title}
                                            </h4>

                                            <p className="mt-2 text-slate-500">
                                                {job.company}
                                            </p>
                                        </div>

                                            <div className="rounded-2xl bg-emerald-100 px-4 py-2 font-bold text-emerald-600">
                                                {job.match}
                                            </div>
                                    </div>

                                    <button className="mt-8 w-38 rounded-2xl border-2 border-indigo-600 bg-white py-3 font-bold text-indigo-600 transition hover:bg-indigo-50">
                                        Xem chi tiết
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}