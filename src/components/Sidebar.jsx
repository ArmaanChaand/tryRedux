import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <div className='w-fit h-full mr-auto p-0'>
            <ul className="menu w-56">
                <li>
                    <NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/counter/' className={({isActive}) => isActive ? "active" : ""}>
                        Counter
                    </NavLink>
                    <NavLink to='/blog/' className={({isActive}) => isActive ? "active" : ""}>
                        Blog
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;