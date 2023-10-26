import { ReactNode } from 'react';

type AppLayoutProps = {
    children: ReactNode
}

const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <div className="flex flex-col gap-4 justify-center items-center w-screen h-screen bg-custom-cream">
            {children}
        </div>
    )
}

export default AppLayout
