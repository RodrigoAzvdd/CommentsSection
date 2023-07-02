import style from './style.module.css'

export default function Comment ({ email, comment, id, creationDate }) {
    return (
        <div key={id} className={style.section} >
            <p className={style.email}>{email}</p>
            <p className={style.creationDate}>Em {creationDate}</p>
            <p className={style.comment}>{comment}</p>
        </div>
    )
}