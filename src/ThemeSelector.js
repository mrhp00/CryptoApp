import React from 'react'
import {useSelector} from 'react-redux'

const Theme1 = React.lazy(()=>import('./Theme1'))
const Theme2 = React.lazy(()=>import('./Theme2'))

const ThemeSelector: React.FC = ({children}) => (
    
    <>
    <React.Suspense fallback={()=>null}>
        {useSelector((state)=>state.s_dark) && <Theme1/>}
        {useSelector((state)=>state.s_dark) || <Theme2/>}
    </React.Suspense>
    </>
)