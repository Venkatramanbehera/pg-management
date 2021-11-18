import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@mui/material';

const validationSchema = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: Yup
        .string('Enter your name')
        .required('Name is required')
});

const UserRegister = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(values)
        },
    });

    return (
        <div style={{ padding: '20px' }}>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <div>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        helperText={
                            formik.touched.name && formik.errors.name ?
                                formik.errors.name : "Enter your name"
                        }
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        fullWidth
                    />
                </div>

                <br />

                <div>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        helperText={
                            formik.touched.email && formik.errors.email ?
                                formik.errors.email : "Enter your email"
                        }
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        fullWidth
                    />
                </div>

                <br />

                <div style={{ marginLeft: '50px' }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Register
                    </Button>
                </div>

            </form>
        </div>
    );
};

export default UserRegister