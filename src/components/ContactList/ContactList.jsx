import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList({ contact, onDelete }) {

    return (
        <>
            <ul className={css.list}>
                {contact.map((cont) => (
                    <li className={css.item} key={cont.id}>
                        <Contact
                            id={cont.id}
                            name={cont.name}
                            tel={cont.number}
                            onDelete={onDelete}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}