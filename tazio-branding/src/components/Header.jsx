import Button from "./Button"
import logo1 from "../assets/react.svg"


function Header() {
  return (
  <header className="py-6 px-10 fixed w-full flex justify-between items-center bg-black ">
    
      <div>
        <a href="">
          <img src={logo1} height={40} width={40} alt=""/>
           
        </a>
    </div>

      
      
          <nav>
            <ul className="flex [&>li>a]:inline:block [&>li>a]:px-4 font-body [&>li>a]:text-white  ">
    
              <li><a href="" className="hover:text-amber-300 ease-in duration-300">Servicios</a></li>
              <li><a href="" className="hover:text-amber-300 ease-in duration-100">Portfolio</a></li>
              <li><a href="" className="hover:text-amber-300 ease-in duration-100">Contacto</a></li>
             

            </ul>
          </nav>
      
  </header>
  )
}

export default Header