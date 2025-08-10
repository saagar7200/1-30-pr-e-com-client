import NavLinks from "./nav-links";
import { GrFavorite } from "react-icons/gr";
import { LiaCartPlusSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth.hooks";
import toast from "react-hot-toast";
import type { IUser } from "../../types/user.types";

const NavBar = () => {
  const { token, isLoading, user, setUser, setToken } = useAuth();
  const navigate = useNavigate();
  console.log(user)
 const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    setToken(null);
    setUser(null);
    navigate("/login", { replace: true });
    toast.success("logout successfully");
  };
 

  if (isLoading) {
    <div className="h-full w-full flex justify-center items-center">
      <p>Loading...</p>
    </div>;
  }

  return (
    <nav className="w-full flex items-center justify-between tracking-wider px-36 py-2">
      {/* logo */}
      <div>
        <img
          src={"./logo.png"}
          alt="logo image"
          className="object-cover h-20"
        />
      </div>
      {/* nav links */}
      <div>
        <NavLinks />
      </div>

<div>
{
    token ? 
    <LoggedInUsersection logout={logout} user={user}/>      
      :
      <div >
           <Link className="h-full bg-indigo-600 rounded-md font-bold text-white px-6 py-3" to={'/login'}>
            Log In 
        </Link >
      </div>
}
</div>
    </nav>
  );
};


const LoggedInUsersection = ({user ,logout}:{user:IUser | null,logout:()=> void}) =>{

    
    return(
 <div className="flex items-center gap-4">
        {/* wishlist */}
        <Link
          to={"/wish_list"}
          className="cursor-pointer w-fit bg-[#F8F8F8] p-3 rounded-full flex items-center justify-center"
        >
          <GrFavorite size={26} className="text-indigo-600" />
        </Link>
        {/* cart */}

        <Link
          to={"/cart"}
          className="cursor-pointer w-fit bg-[#F8F8F8] p-2 rounded-full flex items-center justify-center"
        >
          <LiaCartPlusSolid size={30} className="mb-1 text-indigo-600" />
        </Link>

        {/*  */}
        <div>
          <p className="font-semibold italic text-lg capitalize">
            {user?.first_name} {user?.last_name}
          </p>
          <p onClick={logout} className="text-indigo-900 cursor-pointer">
            Log out{" "}
          </p>
        </div>

      </div>
    )
}

export default NavBar;
