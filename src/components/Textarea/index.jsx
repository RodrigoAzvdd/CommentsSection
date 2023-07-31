import style from './style.module.css'
import PropType from 'prop-types'

Textarea.propTypes = {
    label: PropType.string,
    name: PropType.string,
    id: PropType.number,
    cols: PropType.string,
    rows: PropType.string,
    func: PropType.func
}

export default function Textarea({ label, name, id, cols, rows, func }) {
    return (
        <div className={style.divTextarea}>
            <label className={style.label} htmlFor={name}>{label}</label>
            <textarea className={style.textarea} name={name} id={id} cols={cols} rows={rows} onChange={(ev) => func(ev.target.value)}></textarea>
        </div>
    )
}