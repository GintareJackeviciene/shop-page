import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../store/AuthCtxProvider';

export default function Header() {
  const { isUserLoggedIn, logout, isUserAdmin } = useAuthContext();

  const navigate = useNavigate();
  function handleLogout() {
    logout();
    navigate('/login');
  }

  return (
    <div>
      <header className='container flex justify-between items-center'>
        <Link className='text-2xl font-semibold py-4' to='/'>
          <img className='w-28 rounded-full' src='https://www.jop.lt/wp-content/uploads/2021/11/irankiu-nuoma-klaipedoje.png'/>
        </Link>
        <nav>
          <NavLink className={'px-4 py-2 text-base hover:text-indigo-500 '} to={'/'}>
            Apie mus
          </NavLink>
          <NavLink className={'px-4 py-2 text-base hover:text-indigo-500'} to={'/shop'}>
            Parduotuvė
          </NavLink>
          
          {!isUserLoggedIn && (
            <>
              <NavLink className={'px-4 py-2 text-base hover:text-indigo-500 '} to={'/login'}>
                Prisijungti
              </NavLink>
              <NavLink
                className={'px-4 py-2 text-base hover:text-indigo-500 '}
                to={'/register'}>
                Prisiregistruoti
              </NavLink>
            </>
          )}
          {isUserLoggedIn && (
              <>
                {isUserAdmin && (
                    <>
                      <NavLink className={'px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'} to={'/items'}>
                        Prekės
                      </NavLink>
                      <NavLink className={'px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'} to={'/categories'}>
                        Kategorijos
                      </NavLink>
                    </>

                )}
                <NavLink className={'px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'} to={'/orders'}>Užsakymai</NavLink>
                <button
                    onClick={handleLogout}
                    className={'px-4 py-2 hover:bg-slate-500 hover:text-indigo-500'}>
                  Atsijungti
                </button>
              </>
          )}
           <NavLink className={'px-4 py-2 text-base hover:text-indigo-500'} to={'/kontaktai'}>
            Kontaktai
          </NavLink>
        </nav>
      </header>
    </div>
  );
}