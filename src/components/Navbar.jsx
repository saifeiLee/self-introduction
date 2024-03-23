import {avatarImg} from '../utils'

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className='flex w-full screen-max-width'>
                <img src={avatarImg} alt="avatar" width={24} height={36}></img>
            </nav>
        </header>
    )
}

export default Navbar;