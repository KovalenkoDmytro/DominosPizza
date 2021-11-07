import React from 'react';
import pizza from '../../data/pizza.json'
import '../Style/Pizza.scss'


import Context from '../../Context';
import { ContextFavorit } from '../../Context';
import { useContext, useEffect, useState } from 'react';

import Bestseller from '../../fonts/icons/favourite.svg';
import New from '../../fonts/icons/new.svg';
import Hot from '../../fonts/icons/chili-pepper.svg';
import Vege from '../../fonts/icons/vegan.svg';
// import axios from 'axios';


function Pizza() {
    const addPrice = useContext(Context);
    const addFavorit = useContext(ContextFavorit);

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(3);
    const [lastPage, setLastPage] = useState(0);

    const btnNext = React.createRef();
    const btnPrev = React.createRef();

    const btnsPag = React.createRef();

    useEffect(() => {
        if (currentPage === 1) {
            btnPrev.current.setAttribute('disabled', 'disabled');
        } else { btnPrev.current.removeAttribute('disabled') }


        if (currentPage === lastPage) {
            btnNext.current.setAttribute('disabled', 'disabled');
        } else { btnNext.current.removeAttribute('disabled') }
    }, [currentPage])

    useEffect(() => {
        const getProducts = async () => {

            // await fetch("http://localhost/back/back.php")
            //     .then(data => data.json())
            //     .then(resp => {
            //         setProducts(resp);

            //     }
            //     );
            setProducts(pizza);
        }
        getProducts()

    }, [])
   

    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProduct = products.slice(firstProductIndex, lastProductIndex)



    const pageNumbers = []

    function getPages() {
        for (let index = 1; index <= Math.ceil(products.length / productsPerPage); index++) {
            pageNumbers.push(index)

        }

    }
    getPages()

    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, pageNumbers.length));
        setLastPage(pageNumbers.length)
    }
    const prevPage = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
        setLastPage(pageNumbers.length)
    }



    return (
        <>
            <div className="pizza__page">
                <div className="banner">
                    <img src="https://www.dominospizza.pl/DominosPizza/media/Images/modules/menuBanners/mobile/600x240-pizza1.jpg" alt="pizza" width="1200" height="300" />
                    <h1>Pizza</h1>
                </div>
                <div className="cards">
                    {currentProduct.map(function (elem) {
                        return (
                            <div className="card" key={elem.id} data-id={elem.id}>
                                <div className="addToFavorit icon icon__heart" onClick={(e) => {
                                    let productFavorit = {
                                        name: e.target.parentElement.querySelector('.product__title__wrapper .product__title').textContent,
                                        img: e.target.parentElement.querySelector('img.product__icon').currentSrc,
                                        description: e.target.parentElement.querySelector('.product__logdescription').textContent,
                                        price: e.target.parentElement.querySelector('.product__title__wrapper .product__price').textContent,
                                        classActive: true,
                                        id: e.target.parentElement.getAttribute('data-id'),
                                    }
                                    addFavorit(productFavorit);
                                    e.target.classList.add('active');
                                    alert('produkt zostal dodany do ulubionych')
                                }}>

                                
                                </div>
                                <img className='product__icon' alt={elem.name} src={elem.img} width="396" height="396" />
                                <div className="product__title__wrapper">
                                    <span className='product__title'>{elem.name}</span>
                                    <span className='product__price'>{elem.price + ' zł'}</span>
                                </div>
                                <div className="infoTag">
                                    {elem.sorte === "Bestseller" ? <img className="tagIcon" src={Bestseller} alt='Bestseller' width='25px' height='25px' /> : ""}
                                    {elem.sorte === "New" ? <img className="tagIcon" src={New} alt='New' width='25px' height='25px' /> : ""}
                                    {elem.sorte === "Hot" ? <img className="tagIcon" src={Hot} alt='Hot' width='25px' height='25px' /> : ""}
                                    {elem.sorte === "Vege" ? <img className="tagIcon" src={Vege} alt='Vege' width='25px' height='25px' /> : ""}
                                    <div className="tagIcon">{elem.sorte}</div>
                                </div>
                                <p className='product__logdescription'>{elem.logdescription}</p>
                                <button className='outline' onClick={() => {
                                    addPrice[0](elem.name, elem.img, elem.price, elem.logdescription, elem.sorte, 1);
                                    alert('produkt zostal dodany do koszyka')

                                }}>+add to basket</button>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="pagination__bottom">

                    <div className="pagination" ref={btnsPag}>
                        {

                            pageNumbers.map((number, index) => (
                                <button className="inactive solid" key={number}
                                    onClick={(e) => {

                                        paginate(number);
                                        Array.from(e.target.parentElement.children).forEach(element => {
                                            if (element.classList.contains('active')) {
                                                element.classList.remove('active');
                                                element.classList.add('inactive');
                                            }
                                        });
                                        e.target.classList.remove('inactive');
                                        e.target.classList.add('active');

                                    }}>
                                    {number}</button>
                            ))

                        }
                    </div>
                   
                    <div className="paginaion_buttons">
                        <button className="solid" ref={btnPrev} onClick={(e) => {
                            prevPage();
                            Array.from(e.target.parentElement.previousElementSibling.children).forEach(element => {
                                if (element.classList.contains('active')) {
                                    element.classList.remove('active');
                                    element.classList.add('inactive');
                                }
                            });
                            e.target.parentElement.previousElementSibling.children[currentPage - 2].classList.add('active')
                        }}>prev</button>
                        <button className="solid" ref={btnNext} onClick={(e) => {
                            nextPage();
                            Array.from(e.target.parentElement.previousElementSibling.children).forEach(element => {
                                if (element.classList.contains('active')) {
                                    element.classList.remove('active');
                                    element.classList.add('inactive');
                                }
                            });
                            e.target.parentElement.previousElementSibling.children[currentPage].classList.add('active')
                        }

                        }>next</button>
                    </div>

                </div>
            </div>

        </>
    )
}
export default Pizza;