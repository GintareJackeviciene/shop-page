import {useFormik} from 'formik';
import * as Yup from 'yup';
import SmartInput from '../components/UI/SmartInput';
import toast from 'react-hot-toast';
import axios from 'axios';
import {baseBeUrl} from '../helper';
import {useAuthContext} from '../store/AuthCtxProvider';
import {useNavigate} from 'react-router-dom';

export default function LoginPage() {
    const {login} = useAuthContext();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: 'gintare@bit.lt',
            slaptažodis: '123456',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().min(3).required(),
            slaptažodis: Yup.string().min(5).max(30).required(),
        }),
        onSubmit: (values) => {
            sendAxiosData(values);
        },
    });

    function sendAxiosData(data) {
        axios
            .post(`${baseBeUrl}/auth/login`, data)
            .then((response) => {
                login(data.email, response.data.token);
                navigate('/shop', {replace: true});
                toast.success(response.data?.message || 'Sveiki prisijungę');
            })
            .catch((error) => {
                toast.error(error.response.data.error);
            });
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl text-center my-10'>Kliento prisijungimas</h1>
            
            <form onSubmit={formik.handleSubmit} className='mt-4' noValidate>
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
                    Prisijungti
                </button>
            </form>
        </div>
    );
}
