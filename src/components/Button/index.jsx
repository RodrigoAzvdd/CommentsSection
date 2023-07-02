import style from './styles.module.css'

export default function Button ({ text }) {
    return (
        <button className={style.btn}>{text}</button>
    )
}