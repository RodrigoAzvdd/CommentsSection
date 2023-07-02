import style from './style.module.css'

export default function Title ({ text }) {
    return (
        <h1 className={style.title}>{text}</h1>
    )
}