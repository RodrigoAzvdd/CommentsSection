import style from './style.module.css'

export default function Textarea({ label, name, id, cols, rows, func }) {
    return (
        <div className={style.divTextarea}>
            <label className={style.label} htmlFor={name}>{label}</label>
            <textarea className={style.textarea} name={name} id={id} cols={cols} rows={rows} onChange={(ev) => func(ev.target.value)}></textarea>
        </div>
    )
}