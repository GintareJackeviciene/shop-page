import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

import RegisterPage from './pages/RegisterPage';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';
import Header from './components/layuot/Header';
import { Toaster } from 'react-hot-toast';
import CategoryListPage from './pages/Category/CategoryListPage';
import AdminPrivateRoute from './PrivateRoute/AdminPrivateRoute';
import CategoryCreatePage from './pages/Category/CategoryCreatePage';
import CategoryEditPage from './pages/Category/CategoryEditPage';
import ItemCreatePage from './pages/Item/ItemCreatePAge';
import ItemListPage from './pages/Item/ItemListPage';
import ItemEditPage from './pages/Item/ItemEditPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import OrderListPage from './pages/Order/OrderListPage';
import OrderDetailPage from './pages/Order/OrderDetailPage';
import Kontaktai from './pages/Kontaktai';
import Pagrindinis from './pages/Pagrindinis';
import Kopecios from './pages/Item/kopecios';

export default function App() {
    return (
        <div className=' '>
            <Toaster />
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/shop' element={<Pagrindinis />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/kontaktai' element={<Kontaktai />} />
                <Route path='/kopecios' element={<Kopecios/>} />


                <Route path='/orders' element={
                    <PrivateRoute>
                        <OrderListPage />
                    </PrivateRoute>
                } />

                <Route path='/orders/:id' element={
                    <PrivateRoute>
                        <OrderDetailPage />
                    </PrivateRoute>
                } />
                <Route path='/categories' element={
                    <AdminPrivateRoute>
                        <CategoryListPage />
                    </AdminPrivateRoute>
                } />

                <Route path='/categories/create' element={
                    <AdminPrivateRoute>
                        <CategoryCreatePage />
                    </AdminPrivateRoute>
                } />
                <Route path='/categories/edit/:id' element={
                    <AdminPrivateRoute>
                        <CategoryEditPage />
                    </AdminPrivateRoute>
                } />
                <Route path='/items' element={
                    <AdminPrivateRoute>
                        <ItemListPage />
                    </AdminPrivateRoute>
                } />
                <Route path='/items/create' element={
                    <AdminPrivateRoute>
                        <ItemCreatePage />
                    </AdminPrivateRoute>
                } />
                <Route path='/items/edit/:itemId' element={
                    <AdminPrivateRoute>
                        <ItemEditPage />
                    </AdminPrivateRoute>
                } />
            </Routes>
        </div>
    );
}
