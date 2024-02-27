import {useFormik} from 'formik';
import SmartInput from '../components/UI/SmartInput';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';
import {baseBeUrl} from '../helper';
import {useNavigate} from "react-router-dom";

export default function RegisterPage() {

  const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            vardas: '',
            pavardė: '',
            email: '',
            slaptažodis: '',
            
        },
        validationSchema: Yup.object({
            vardas: Yup.string().min(3).required('Privalomas vardas'),
            pavardė: Yup.string().min(3).required('Privaloma pavardė'),
            email: Yup.string().email().min(3).required('Privalomas el. paštas'),
            slaptažodis: Yup.string().min(5).max(30).required('Įveskite slaptažodį'),
            
        }),
        onSubmit: (values) => {
            sendAxiosData(values);
        },
    });

    function sendAxiosData(data) {
        axios
            .post(`${baseBeUrl}/auth/register`, data)
            .then((response) => {
                toast.success(response?.message || 'Jūs prisiregistravote');
                navigate('/login', {replace: true});
            })
            .catch((error) => {
                toast.error(error.response.data.error);
            });
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center my-10'>Registracijos puslapis</h1>
            <form onSubmit={formik.handleSubmit} className='mt-4' noValidate>
                <div className='mb-4'>
                    <SmartInput
                        id='vardas'
                        formik={formik}
                        type='text'
                        placeholder='Įveskite vardą'
                    />
                </div>
                <div className='mb-4'>
                    <SmartInput
                        id='pavardė'
                        formik={formik}
                        type='text'
                        placeholder='Įveskite pavardę'
                    />
                </div>
                <div className='mb-4'>
                    <SmartInput
                        id='email'
                        formik={formik}
                        type='email'
                        placeholder='Įveskite  email'
                    />
                </div>
                <div className='mb-4'>
                    <SmartInput
                        id='slaptažodis'
                        formik={formik}
                        type='password'
                        placeholder='Įveskite slaptažodį'
                    />
                </div>
               
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'>
                    Registruotis
                </button>
            </form>
        </div>
    );
}
