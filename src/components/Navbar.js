import { NavLink, useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { MdHome } from "react-icons/md";
import { LuListMinus } from "react-icons/lu";


export default function Nav({setSearch}){
    const navigate = useNavigate()
    const handleChange = (e) =>{
        setSearch(e.target.value)
        navigate('/')
    }

    return(
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-cyan-700 py-1 px-5">
            <div className="flex items-center gap-5">
                <img src="logo.png" width="50" className="mr-12"/>

                <div className="flex items-center gap-1 hover:text-amber-300">
                <MdHome size='18'/>
                <NavLink to='/' >Home</NavLink>
                </div>

                <div className="flex items-center gap-1 hover:text-amber-300">
                <LuListMinus size='18'/>
                <NavLink to='/movies'>Movies</NavLink>
                </div>
            </div>
            <div className="flex items-center px-12 space-x-4">
            <input className="appearance-none bg-zinc-300 rounded-2xl px-6 py-1 focus:outline-none" type="text" name="search" onChange={handleChange} placeholder="movie name"/>
            <CiSearch size="23" className="cursor-pointer" />
            </div>
        </nav>

    )
}