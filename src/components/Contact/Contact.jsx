import { BsFillTelephoneFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";


export default function Contact({ name, tel, id, onDelete }) {
    return (
        <>
            <div>
                <p>< RiContactsFill /> {name}</p>
                <p><BsFillTelephoneFill /> {tel}</p>
            </div>
            <button onClick={() => { onDelete(id) }}>Delete</button>
        </>
    )
}