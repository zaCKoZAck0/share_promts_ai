import '@styles/globals.css';
import { ReactNode } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

interface RootProps {
  children: ReactNode;
}

function Root({children}:RootProps) {
    return (
    <html lang='en'>
        <body>
        <Provider session={undefined}>
            <div className="main">
            <div className="gradient"/>
        </div>
        <main className="app">
            <Nav />
            {children}
        </main>
        </Provider>
        </body>
    </html>
    )
}

export default Root