import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../store/AuthCtxProvider';
import img from '../../image/fbc378.png';

export default function Header() {
  const { isUserLoggedIn, logout, isUserAdmin } = useAuthContext();

  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div >
      <header className='container flex justify-end' >
      
      <nav className='mt-5'>
          <NavLink className={'px-4 py-2 font-bold text-base hover:text-indigo-500 '}  to={'/'}>
            Apie mus
          </NavLink>
          <NavLink className={'px-4 py-2 font-bold text-base hover:text-indigo-500'} to={'/shop'}>
            Parduotuvė
          </NavLink>
          
          {!isUserLoggedIn && (
            <>
              <NavLink className={' font-bold px-4 py-2 text-base hover:text-indigo-500 '} to={'/login'}>
                Prisijungti
              </NavLink>
              <NavLink
                className={'font-bold px-4 py-2 text-base hover:text-indigo-500 '}
                to={'/register'}>
                Prisiregistruoti
              </NavLink>
            </>
          )}
          {isUserLoggedIn && (
              <>
                {isUserAdmin && (
                    <>
                      <NavLink className={'font-bold px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'} to={'/items'}>
                        Prekės
                      </NavLink>
                      <NavLink className={'font-bold px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'} to={'/categories'}>
                        Kategorijos
                      </NavLink>
                    </>

                )}
                <NavLink className={'font-bold px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'} to={'/orders'}>Užsakymai</NavLink>
                <button
                    onClick={handleLogout}
                    className={'font-bold px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'}>
                  Atsijungti
                </button>
              </>
          )}
           <NavLink className={' font-bold px-4 py-2 text-base hover:text-indigo-500'} to={'/kontaktai'}>
            Kontaktai
          </NavLink>
        </nav>
      </header>
    </div>
  );
}