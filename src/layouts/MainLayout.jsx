import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900">
            {/* NAVBAR */}
            <Navbar />

            {/* MAIN */}
            <main className="flex-1 h-full">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
                    <Outlet/>
                </div>
            </main>
        </div>
    )
}

export default MainLayout