import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className='navbar mt-4 mb-4'>
          <div className='container'>
            <div className="navbar-brand">
              <img className="navbar-item" src="https://fundacionsiemprefuertes.org/wp-content/uploads/2022/04/fundacion-siempre-fuertes_A-COLOR.svg" width="350"/>
            </div>
            <div className='navbar-end'>
              <ConnectButton moralisAuth={false} className="button is-info is-outlined" />
            </div>           
          </div>
          
        </nav>
    )
}