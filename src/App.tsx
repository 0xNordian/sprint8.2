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
                    className="transition-scale h-auto w-12 scale-[1] rounded-full border-2 border-custom-cream outline outline-custom-coral duration-[.2s] ease-in-out hover:scale-[1.1]"
                />
                <img
                    src="../public/english.png"
                    alt="english"
                    className="transition-scale h-auto w-12 scale-[1] rounded-full border-2 border-custom-cream outline outline-custom-coral duration-[.2s] ease-in-out hover:scale-[1.1]"
                />
                <img
                    src="../public/catalan.png"
                    alt="catalan"
                    className="transition-scale h-auto w-12 scale-[1] rounded-full border-2 border-custom-cream outline outline-custom-coral duration-[.2s] ease-in-out hover:scale-[1.1]"
                />
            </nav>

            <div className="flex h-20 w-72 items-center rounded-xl bg-custom-coral text-white">
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

            <main className="flex h-64 w-72 flex-col gap-2 rounded-xl bg-slate-100 p-4">
                <h3>Gastos - última semana</h3>
                <div className="h-[300px] w-full bg-teal-500"></div>
                <div className="flex h-3/5 w-full justify-center items-center">
                    <div className="flex justify-center items-center h-3/5 w-full flex-1 flex-col">
                        <small className="flex h-full w-full items-center text-xs text-slate-400">
                            Gastos de hoy
                        </small>
                        <h3 className="flex h-full w-full items-center justify-start">
                            557.46 €
                        </h3>
                    </div>
                    <div className="flex-3 flex flex-col justify-center items-center text-xs">
                        <div className="text-right w-full">+2.4%</div>
                        <div>Respecto a ayer</div>
                    </div>
                </div>
            </main>
        </AppLayout>
    )
}

export default App
