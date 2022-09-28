import { useState } from 'react'
import { Formik, Field } from 'formik'

interface Values {
    name: string
    password: string
    email: string
}

const RegisterForm: React.FC = () => {
    const [newUser, setNewUser] = useState([])

    console.log(newUser)

    return (
        <div>
            <h1>Register</h1>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    email: '',
                }}
                onSubmit={(values: Values) => {
                    setNewUser(values)
                }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <Field
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                        />
                        <label htmlFor="email">Email</label>
                        <Field
                            type="text"
                            placeholder="Email"
                            id="email"
                            name="email"
                        />
                        <label htmlFor="email">Password</label>
                        <Field
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                        />
                        <button type="submit">Send Form</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm
