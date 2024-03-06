import { Link } from 'react-router-dom'
import img from '../image/fbc378.png'

export default function Pagrindinis() {


    return (

        <>
            <div style={{ position: 'relative', bottom: '-50px' }}>
                <img src={img} style={{ width: '100%' }} />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'white',


                }}>
                    <h1 className='text-center font-bold text-5xl'>Įrankių nuoma</h1>
                </div>
            </div>
            <div className='container grid grid-cols-4 flex gap-40 mt-20'>
                <div className='relative '>

                    <img className='w-20 mb-2' src='https://th.bing.com/th/id/R.47ea004d72850ca8f6434e7b4cdb228b?rik=2IAfSSBAfH7%2fvg&pid=ImgRaw&r=0' alt='Tool 1' />

                    <label className="">Kopėčios:</label>
                    
                </div>
                <div className='relative'>
                    <img className='w-44 ' src='https://th.bing.com/th/id/OIP.7PXJr-HOwrhd9J8wik0VPgHaHa?rs=1&pid=ImgDetMain' alt='Tool 2' />
                    <label className="">Sodo įranga:</label>
                    <select className='bottom-0 left-0 w-full bg-white border border-gray-300 rounded px-2 py-1'>
                        <option value=''>--Kategorijos--</option>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                    </select>
                </div>
                <div className='relative'>
                    <img className='w-40 mt-5' src='https://th.bing.com/th/id/R.5da10b1e7477d02c3a3f19b0a9dd50b0?rik=aq9G9cZNn3HcKg&pid=ImgRaw&r=0' alt='Tool 3' />
                    <label className="">Gręžimo įranga:</label>
                    <select className='bottom-0 left-0 w-full bg-white border border-gray-300 rounded px-2 py-1'>
                        <option value=''>--Kategorijos--</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </select>
                </div>
                <div className='relative'>
                    <img className='w-40 mt-3' src='https://www.amatrix.com.my/image/amatrix/image/cache/data/all_product_images/product-2584/KARCHER%20K5%20Premium-420x420.jpg' alt='Tool 4' />
                    <label className="">Valymo įranga:</label>
                    <select className=' bottom-0 left-0 w-full bg-white border border-gray-300 rounded px-2 py-1'>
                        <option value=''>--Kategorijos--</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </select>
                </div>

                <div className='relative'>
                    <img className='w-40 mb-4 ' src='https://th.bing.com/th/id/OIP.N2Jv71RDLt9FZ0jUxSvzyQHaGW?rs=1&pid=ImgDetMain' alt='Tool 5' />
                    <label className="">Pjovimo įranga:</label>
                    <select className='  left-0 w-full bg-white border border-gray-300 rounded px-2 py-1'>
                        <option value=''>--Kategorijos--</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </select>
                </div>
                <div className='relative'>
                    <img className='w-40 mb-4' src='https://images-na.ssl-images-amazon.com/images/I/81ZKLttW9dL._AC_SL1500_.jpg' alt='Tool 6' />
                    <label className="">Matavimo įranga:</label>
                    <select className=' left-0 w-full bg-white border border-gray-300 rounded px-2 py-1'>
                        <option value=''>--Kategorijos--</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </select>
                </div>
                <div className='relative'>
                    <img className='w-48 ' src='https://th.bing.com/th/id/OIP.QtHQ8rtdc1zVho5XSaN5agAAAA?w=300&h=300&rs=1&pid=ImgDetMain' alt='Tool 7' />
                    <label className="">Tankimo įranga:</label>
                    <select className=' left-0 w-full bg-white border border-gray-300 rounded px-2 py-1'>
                        <option value=''>--Kategorijos--</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </select>
                </div>
                <div className='relative '>
                    <img src='https://irankis.lt/_nuxt/image/499702.webp' alt='Tool 8' />
                    <label className="">Sausinimo įranga:</label>
                    <select className=' left-0 w-full bg-white border border-gray-300 rounded px-2 py-1'>
                        <option value=''>--Kategorijos--</option>
                        <option value='2'>Option 2</option>
                        <option value='3'>Option 3</option>
                    </select>
                </div>
            </div>
        </>
    )
}