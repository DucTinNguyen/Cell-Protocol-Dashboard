
import React from 'react'

export const IconResource = ({ isActive }: { isActive: boolean }) => {

    const colorFill = isActive ? '#8CE339' : '#798675';


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13 6.81384V12.6672C13 14.0005 12.6667 14.6672 11 14.6672H5C3.33333 14.6672 3 14.0005 3 12.6672V6.81384" stroke="#798675" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.33325 1.33337H12.6666C13.9999 1.33337 14.6666 2.00004 14.6666 3.33337V4.66671C14.6666 6.00004 13.9999 6.66671 12.6666 6.66671H3.33325C1.99992 6.66671 1.33325 6.00004 1.33325 4.66671V3.33337C1.33325 2.00004 1.99992 1.33337 3.33325 1.33337Z" stroke="#798675" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.78638 9.33337H9.21304" stroke="#798675" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
