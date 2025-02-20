/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './BurgerComponent.scss'
export default function BurgerComponent({ setActiveNavMobile, ...props }) {
    return (
        <div onClick={() => { setActiveNavMobile(prev => !prev) }} className="burger">
            <div className="burger__item"></div>
            <div className="burger__item"></div>
            <div className="burger__item"></div>
        </div>
    )
}
