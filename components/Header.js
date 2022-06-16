import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className='navbar mt-4 mb-4'>
          <div className='container'>
            <div className="navbar-brand">
              <h1>Rifa benéfica Ethers</h1>
            </div>
            <div className='navbar-end'>
              <ConnectButton moralisAuth={false} className="button is-info is-outlined" />
            </div>           
          </div>
        </nav>
    )
}