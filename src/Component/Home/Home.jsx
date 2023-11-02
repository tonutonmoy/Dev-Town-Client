import { useState, useEffect, useContext, useRef } from 'react';
import ProductCard from "./ProductCard";

import UseAllProducts from "../../Hooks/useAllProducts";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Banner from './Banner';

import PriceRange from './PriceRange'
import Category from './Category'

const Home = () => {
    const scrollToThisRef = useRef(null);
    const { sortPrice } = useContext(AuthContext)
    const [data] = UseAllProducts();
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

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
        <div className="w-[90%] mx-auto ">

         
            <section
                ref={scrollToThisRef}
                className="flex justify-between w-[90%] md:w-[95%] xl:w-[95%] 2xl:w-[95%] 3xl:w-[95%] mx-auto pt-[150px] pb-[50px] "
            >

                <PriceRange />
                <Category />

            </section>


            <section className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-4 gap-10">
                {currentCards?.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </section>

            <div className="join grid grid-cols-2 w-[20%] mx-auto py-10">
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

export default Home;
