import { routes } from '@/assets/fackData'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button } from './ui/button'

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <div className='flex flex-col'>
      <header className='bg-neutral-900 text-neutral-50 p-4 dark:bg-neutral-50 dark:text-neutral-900 h-16'>
        <nav>
          <ul className='flex space-x-4'>
            {routes.map((item, idx) => (
              <li key={idx}>
                <Button
                  asChild
                  variant={pathname === item.link ? 'secondary' : 'ghost'}
                >
                  <Link
                    className='hover:animate-pulse'
                    viewTransition
                    to={item.link}
                  >
                    {item.title}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className='min-h-[calc(100vh-8rem)]'>
        <Outlet />
      </main>
      <footer className='bg-neutral-100 text-neutral-900 p-4 text-center dark:bg-neutral-800 dark:text-neutral-50 h-16'>
        <p className='animate-bounce font-medium'>
          © 2025 | Prescription Sucker
        </p>
      </footer>
    </div>
  )
}
