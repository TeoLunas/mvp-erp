
const Navbar = () => {

    const tabs = ["Dashboard", "Ventas", "Inventario", "Compras", "Reportes", "Configuración"];


    return (
        <header className="bg-white border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* left: logo */}
                    <div className="flex items-center gap-4">
                        <a href="#" className="flex items-center gap-3">
                            {/* simple SVG logo */}
                            <svg className="h-8 w-8 flex-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <rect x="3" y="3" width="18" height="18" rx="4" className="fill-current text-indigo-600" />
                                <path d="M7 12h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-lg font-semibold tracking-tight">MiERP</span>
                        </a>

                        {/* desktop tabs */}
                        <nav className="hidden md:flex md:items-center md:gap-2">
                            {tabs.map((t) => (
                                <a
                                    key={t}
                                    href="#"
                                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    {t}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* right: actions */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex md:items-center md:gap-3">
                            <button className="rounded-md px-3 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700">Nuevo</button>
                            <button className="rounded-md px-3 py-2 text-sm font-medium border border-gray-200">Soporte</button>
                        </div>


                    </div>
                </div>
            </div>


        </header>
    )
}

export default Navbar