import React from 'react'

export const FullPageComponent: React.FC = ({ children }) => {
    return (
        <div className="fullPage">
            {children}
        </div>)
}
