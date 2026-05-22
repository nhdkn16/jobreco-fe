import { create } from 'zustand'

const storedUser = localStorage.getItem('user')

export const useAuthStore = create((set) => ({
    user: storedUser ? JSON.parse(storedUser) : null,

    login: (userData) => {
        localStorage.setItem('user', JSON.stringify(userData))

        set({
            user: userData,
        })
    },

    logout: () => {
        localStorage.removeItem('user')

        set({
            user: null,
        })
    },
}))