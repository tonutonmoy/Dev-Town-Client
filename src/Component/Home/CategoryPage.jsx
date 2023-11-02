import { useState, useEffect, useContext, useRef } from 'react';
import UseCategory from '../../Hooks/useCategory';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


import PriceRange from './PriceRange'
import Category from './Category'

const CategoryPage = () => {
    const scrollToThisRef = useRef(null);
    const { sortPrice } = useContext(AuthContext)

    const { categoryName } = useParams();
    const [data] = UseCategory(categoryName);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    useEffect(() => {
        setCurrentPage(1);
    }, [categoryName]);

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = sortPrice?.length > 0 ? sortPrice?.slice(indexOfFirstCard, indexOfLastCard) : data?.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = sortPrice?.length > 0 ? Math.ceil((sortPrice?.length || 0) / cardsPerPage) : Math.ceil((data?.length || 0) / cardsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        scrollToRef(scrollToThisRef);
    }, []);

    return (
        <div className='w-[90%]  mx-auto'>

          

            <section
                ref={scrollToThisRef}
                className="flex justify-between w-[90%] md:w-[95%] xl:w-[95%] 2xl:w-[95%] 3xl:w-[95%] mx-auto pt-[150px] pb-[50px] "
            >
                <PriceRange />
                <Category />
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-4 gap-10  ">
                {currentCards?.map((product) => (
                    <section key={product?.id}>

                        <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg my-5 group">
                            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                                <img
                                    src={product?.image}
                                    alt="ui/ux review check"
                                    className="h-[230px] w-full group-hover:scale-110 "
                                />
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                                <button
                                    className="absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-dark="true"
                                >
                                    <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-6 w-6"
                                        >
                                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="mb-3 flex items-center justify-between">
                                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {product.title}
                                    </h5>
                                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="-mt-0.5 h-5 w-5 text-yellow-700"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.760-.415-2.212.749-2.305l5.404.433 2.082-5.006z"
                                                clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        5.0
                                    </p>
                                </div>
                                <p className="block font-[500] text-base text-[17px] leading-relaxed text-gray-700 antialiased">
                                    Price: {product.price}
                                </p>
                                <p className="block font-sans text-base font-[400] leading-relaxed text-gray-700 antialiased mt-2">
                                    {product.description?.slice(0, 150)}...
                                </p>
                            </div>
                            <div className="p-6 pt-3">
                                <Link to={`/SingleProduct/${product?._id}`}
                                    className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </section>

                ))}
            </div>


            <div className="join grid grid-cols-2 w-[20%] mx-auto my-10">
                <button
                    className="join-item btn btn-outline"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Previous Page
                </button>
                <button
                    className="join-item btn btn-outline"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default CategoryPage;
