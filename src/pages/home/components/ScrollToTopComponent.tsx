import React from 'react'
import { IScrollProps } from '../interfaces'

export const ScrollToTopComponent: React.FC<IScrollProps> = ({ handleScrollToTop }: IScrollProps) => {
    return <button
        className="scrollToTop"
        onClick={handleScrollToTop}>
        <p>top</p>
    </button>
}
