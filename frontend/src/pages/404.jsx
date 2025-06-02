// import { Link } from "react-router-dom";

// const NotFoundPage = () => {
//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100">
//             <div className="text-center bg-white p-10 rounded-xl shadow-md">
//                 <h1 className="text-6xl font-bold text-red-600">404</h1>
//                 <p className="mt-4 text-lg text-gray-700">Page Not Found</p>
//                 <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
//                     Go to Home
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default NotFoundPage;

import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div
			className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white'
			style={{ backgroundImage: `url('/404.png')` }}
		>
			<header className='absolute top-0 left-0 p-4 bg-black w-full '>
				<Link to={"/"}>
					<img src='/netflix-logo.png' alt='Netflix' className='h-8' />
				</Link>
			</header>
			<main className='text-center error-page--content z-10'>
				<h1 className='text-7xl font-semibold mb-4'>Lost your way?</h1>
				<p className='mb-6 text-xl'>
					Sorry, we can't find that page. You'll find lots to explore on the home page.
				</p>
				<Link to={"/"} className='bg-white text-black py-2 px-4 rounded'>
					Netflix Home
				</Link>
			</main>
		</div>
	);
};
export default NotFoundPage;
