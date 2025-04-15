import { NavLink, Outlet} from "react-router-dom"
import './Radix.css'

export const Radix = () => {




  return (

    <main className="totum">
        <aside className="flex w-full px-10">
<div >

</div >

<ul className=" flex justify-between w-full px-10">

<NavLink className= "button" to={'/'}>Home</NavLink>

<NavLink className= "button" to={'/aboutme'}>About Me</NavLink>

<NavLink className="button" to={'/work'}>Work</NavLink>

<NavLink className="button" to={'/contact'}>Contact</NavLink>

<a 
  className="text-white flex items-center justify-center bg-[var(--color-pink)] px-3.5 md:px-5 py-2.5 md:py-4 text-sm md:text-base rounded-lg cursor-pointer hover:bg-[var(--color-favred)]" 
  href="https://www.instagram.com/heleena.ld/?hl=es-la"
  style={{ fontFamily: 'Montserrat, sans-serif' }}
>
  Instagram
</a>

</ul>

</aside>
          <div className="outlet">
          <Outlet />
          </div>
        
      

    </main>
  )
}
