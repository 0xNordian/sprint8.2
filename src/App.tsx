import './App.css'
import AppLayout from './layouts/AppLayout'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

function App() {
    return (
        <AppLayout>
            <nav className="flex h-12 w-72 justify-end gap-2">
                <img
                    src="../public/spanish.png"
                    alt="spanish"
                    className="h-auto w-12 rounded-full border-2 border-custom-cream outline outline-custom-coral scale-[1] transition-scale duration-[.2s] ease-in-out hover:scale-[1.1]"
                />
                <img
                    src="../public/english.png"
                    alt="english"
                    className="h-auto w-12 rounded-full border-2 border-custom-cream outline outline-custom-coral scale-[1] transition-scale duration-[.2s] ease-in-out hover:scale-[1.1]"
                />
                <img
                    src="../public/catalan.png"
                    alt="catalan"
                    className="h-auto w-12 rounded-full border-2 border-custom-cream outline outline-custom-coral scale-[1] transition-scale duration-[.2s] ease-in-out hover:scale-[1.1]"
                />
            </nav>

            <div className="flex h-16 w-72 items-center rounded-xl bg-custom-coral text-white">
                <div className="flex h-3/5 w-full pl-4">
                    <div className="flex h-full w-full flex-1 flex-col">
                        <small className="flex h-full w-full items-center text-xs">
                            Balance total
                        </small>
                        <h3 className="flex h-full w-full items-center justify-start">
                            3323 €
                        </h3>
                    </div>
                    <div className="flex-3 flex items-center gap-2 px-4">
                        <div
                            className="cursor-pointer"
                            onClick={() => console.log('left')}
                        >
                            <FiArrowLeft />
                        </div>
                        <div
                            className="cursor-pointer"
                            onClick={() => console.log('right')}
                        >
                            <FiArrowRight />
                        </div>
                    </div>
                </div>
            </div>

            <main className="h-64 w-72 rounded-xl bg-slate-100"></main>
        </AppLayout>
    )
}

export default App
