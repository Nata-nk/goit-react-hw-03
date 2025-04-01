import { nanoid } from 'nanoid'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css'
import * as Yup from "yup";


const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

export default function ContactForm({ onAdd }) {


    const handlSabmit = (values, actions) => {
        onAdd(
            {
                id: nanoid(),
                name: values.name,
                number: values.number,
            }
        );
        actions.resetForm();

    }

    return (
        <>
            <Formik initialValues={{
                id: '',
                name: '',
                number: '',
            }} validationSchema={ContactSchema} onSubmit={handlSabmit}>
                <Form className={css.form} >
                    <div className={css.formGroup}>
                        <label className={css.label} htmlFor="name">Name</label>
                        <Field className={css.input} type="name" name='name' />
                        <ErrorMessage className={css.error} name='name' component="span" />
                    </div>
                    <div className={css.formGroup}>
                        <label className={css.label} htmlFor="name">Number</label>
                        <Field className={css.input} type='tel' name='number' />
                        <ErrorMessage className={css.error} name='number' component="span" />

                    </div>

                    <button className={css.button} type="submit">Add contact</button>
                </Form>

            </Formik>
        </>
    )
}