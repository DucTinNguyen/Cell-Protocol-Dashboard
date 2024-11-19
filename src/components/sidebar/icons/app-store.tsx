
import React from 'react'

export const IconAppStore = ({ isActive }: { isActive: boolean }) => {

    const colorFill = isActive ? '#8CE339' : '#798675';


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.3333 14.6674H4.66659C2.66659 14.6674 1.33325 13.6674 1.33325 11.334V8.00069C1.33325 5.66736 2.66659 4.66736 4.66659 4.66736H11.3333C13.3333 4.66736 14.6666 5.66736 14.6666 8.00069V11.334C14.6666 13.6674 13.3333 14.6674 11.3333 14.6674Z" stroke="#798675" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 3H12" stroke="#798675" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 1.33264H10" stroke="#798675" stroke-width="1.4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
