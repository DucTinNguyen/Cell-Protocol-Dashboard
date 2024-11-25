
import React from 'react'

export const IconCell = ({ isActive }: { isActive: boolean }) => {

    const colorFill = isActive ? '#8CE339' : '#798675';


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_45_1386)">
                <path d="M5.33341 12L0.666748 14.6667V4.00004L5.33341 1.33337M5.33341 12L10.6667 14.6667M5.33341 12V1.33337M10.6667 14.6667L15.3334 12V1.33337L10.6667 4.00004M10.6667 14.6667V4.00004M10.6667 4.00004L5.33341 1.33337" stroke="#798675" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_45_1386">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}
