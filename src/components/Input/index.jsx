import style from './style.module.css'

export default function Input ({ label, name, id, type, func }) {
    return (
        <div className={style.inputArea}>
            <label className={style.label} htmlFor={name}>{label}</label>
            <input className={style.input} type={type} name={name} id={id} onChange={(ev) => {func(ev.target.value)}} />
        </div>
    )
}