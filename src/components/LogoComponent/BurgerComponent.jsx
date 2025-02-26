import './BurgerComponent.scss'
export default function BurgerComponent({ setActiveNavMobile }) {
    return (
        <div onClick={() => { setActiveNavMobile(prev => !prev) }} className="burger">
            <div className="burger__item"></div>
            <div className="burger__item"></div>
            <div className="burger__item"></div>
        </div>
    )
}
