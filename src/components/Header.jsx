import logo from '../assets/logo.svg'

const Header = () => {
    return (
        <header className="header py-8 mb-6">
            <div className='max-w-[1200px] mx-auto'>
                <img className="logo cursor-pointer" src={logo} alt="company-logo" />
            </div>
        </header>
    )
}

export default Header