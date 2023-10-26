import { ReactNode } from 'react';

type AppLayoutProps = {
    children: ReactNode
}

const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <div className="w-screen h-screen bg-custom-cream text-rm-green">
            {children}
        </div>
    )
}

export default AppLayout
