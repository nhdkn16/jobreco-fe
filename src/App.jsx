import { Toaster } from 'react-hot-toast'

import AppRoutes from './routes/AppRoutes'

export default function App() {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: {
                        borderRadius: '16px',
                        padding: '16px',
                    },
                }}
            />

            <AppRoutes />
        </>
    )
}