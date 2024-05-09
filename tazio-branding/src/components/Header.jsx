import Button from "./Button"
import logo1 from '../assets/logo1.svg'

function Header() {
  return (
    <div className='bg-black w-auto h-16'>
      <div className='flex justify-between'>
        <div className='h-16 bg-white justify-center content-center w-24'>
          <a>
            <img src={logo1} width={190} height={40} alt="" />
          </a>
    
        </div>
        <div className='h-16 bg-white'>
          <h1>aguante boca</h1>

        </div>
        <div className='h-16 bg-white'> 
          <nav>
                <ul className='flex'>
                  <li>boka</li>
                  <li>boka</li>
                  <li>boka</li>
                  <li>boka</li>
                  <li>boka</li>
                  <li></li>
                </ul>
          </nav>

        </div>
        <div className="h-16 bg-white">
          <h1>boca</h1>
          
        </div>

      </div>
      
    </div>
  )
}

export default Header