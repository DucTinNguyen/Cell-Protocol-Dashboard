
import React from 'react'

export const IconP2P = ({ isActive }: { isActive: boolean }) => {

    const colorFill = isActive ? '#8CE339' : '#798675';


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M1.33325 1.33337H2.49326C3.21326 1.33337 3.77992 1.95337 3.71992 2.66671L3.16659 9.3067C3.07325 10.3934 3.93325 11.3267 5.02658 11.3267H12.1266C13.0866 11.3267 13.9266 10.54 13.9999 9.58671L14.3599 4.58671C14.4399 3.48004 13.5999 2.58004 12.4866 2.58004H3.87992" stroke="#798675" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.8333 14.6667C11.2936 14.6667 11.6667 14.2936 11.6667 13.8333C11.6667 13.3731 11.2936 13 10.8333 13C10.3731 13 10 13.3731 10 13.8333C10 14.2936 10.3731 14.6667 10.8333 14.6667Z" stroke="#798675" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.50008 14.6667C5.96032 14.6667 6.33341 14.2936 6.33341 13.8333C6.33341 13.3731 5.96032 13 5.50008 13C5.03984 13 4.66675 13.3731 4.66675 13.8333C4.66675 14.2936 5.03984 14.6667 5.50008 14.6667Z" stroke="#798675" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6 5.33337H14" stroke="#798675" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}