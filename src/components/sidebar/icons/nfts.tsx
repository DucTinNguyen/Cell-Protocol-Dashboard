
import React from 'react'

export const IconNFTS = ({ isActive }: { isActive: boolean }) => {

    const colorFill = isActive ? '#8CE339' : '#798675';


    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
            <path d="M11.7285 3.38071L6.2285 0.556215C6.085 0.483215 5.915 0.483215 5.7715 0.556215L0.2715 3.38071C0.105 3.46621 0 3.63771 0 3.82521V10.1757C0 10.3632 0.105 10.5352 0.2715 10.6207L5.7715 13.4452C5.9155 13.5187 6.0845 13.5187 6.2285 13.4452L11.7285 10.6207C11.895 10.5352 12 10.3637 12 10.1762V3.82521C12 3.63771 11.895 3.46621 11.7285 3.38071ZM6 1.56271L11 4.13071V7.01971C10.357 6.53271 9.5325 6.00071 9 6.00071C8.28 6.00071 6.291 7.64271 5.578 8.25271C4.645 7.65121 3.496 7.00071 3 7.00071C2.468 7.00071 1.644 7.53271 1 8.01971V4.13071L6 1.56271ZM6 12.4387L1 9.87072V9.30322C1.9695 8.48071 2.7885 8.01071 2.986 7.99971C3.3755 8.04671 5.2625 9.16122 6.1905 9.89272C6.408 10.0637 6.722 10.0262 6.8925 9.80972C7.0635 9.59272 7.0265 9.27872 6.8095 9.10772C6.7185 9.03622 6.586 8.93822 6.43 8.82722C7.261 8.12722 8.6905 7.07421 8.9985 7.00021C9.211 7.01021 10.031 7.48021 11 8.30321V9.87022L6 12.4387Z" fill="#798675" />
            <path d="M5.5 6.50073C6.327 6.50073 7 5.82773 7 5.00073C7 4.17373 6.327 3.50073 5.5 3.50073C4.673 3.50073 4 4.17373 4 5.00073C4 5.82773 4.673 6.50073 5.5 6.50073ZM5.5 4.50073C5.776 4.50073 6 4.72473 6 5.00073C6 5.27673 5.776 5.50073 5.5 5.50073C5.224 5.50073 5 5.27673 5 5.00073C5 4.72473 5.224 4.50073 5.5 4.50073Z" fill="#798675" />
        </svg>
    )
}