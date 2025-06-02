// import React from 'react'

// export const HomePage = () => {
//   return (
//     <div className='hero-bg h-screen'>HomePage</div>
//   )
// }


import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
	const { user } = useAuthStore();
	// const user = true;

	return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};
export default HomePage;
