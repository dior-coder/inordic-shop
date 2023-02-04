import { Outlet, useLocation } from 'react-router-dom'

import {HelloBlock, SearchInput} from './components'

export function Main() : JSX.Element {
    const { pathname } = useLocation()
    return (
        <>
            {pathname === '/' && (
                <>
                    <HelloBlock />
                    <SearchInput />
                </>
            )}
            <Outlet />
        </>
    )
}