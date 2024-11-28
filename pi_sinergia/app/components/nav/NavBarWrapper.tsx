import NavBar from "./NavBar";
import { getCurrentUser } from "@/actions/getCurrentUser";

const NavBarWrapper = async () => {
  const currentUser = await getCurrentUser();
  return <NavBar currentUser={currentUser} />;
};

export default NavBarWrapper;
