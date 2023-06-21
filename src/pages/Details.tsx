import React , { useLayoutEffect , useContext , useState} from 'react';
import { useParams , NavLink} from 'react-router-dom';
// import context
import { ProductsContex } from '../contexts/products-context-provider';

const Details = () => {
    const { responses } = useContext(ProductsContex);

    const { params } = useParams();

    const [id , setId] = useState<number>((
        Number(JSON.parse(localStorage.getItem('paramsId')!) || params)
    ));

    useLayoutEffect(() => {
        localStorage.setItem('paramsId' , JSON.stringify(params));
        setId(() => {
            return Number(JSON.parse(localStorage.getItem('paramsId')!) || params);
        })
    } , [params])

    const product = responses?.find(item => item.id === id);
    
    return (
        <div className='py-[50px] px-[50px] md:px-[90px] lg:px-[140px] 
        gap-y-16 md:gap-y-0 flex flex-col items-center justify-between
        md:flex-row md:items-start'>
            <section className='w-full md:w-1/2'>
                <img src={product?.image} alt="product"
                className='w-[240px] lg:w-[300px] border-4 rounded-2xl 
                mx-auto md:mx-0 border-secondary dark:border-darkSecondary'/>
            </section>
            <section className='w-full md:w-1/2 flex flex-col items-start gap-y-6'>
                <h2 className='font-bold text-xl'>
                    {product?.title}
                </h2>
                <p className='font-bold'>
                    {product?.description}
                </p>
                <p className='font-bold'>
                    <span className='text-info dark:text-darkInfo'>Category: </span> {product?.category}
                </p>
                <section className='w-full flex items-center justify-between'>
                    <div className='square-badge bg-info dark:bg-darkInfo'>
                        {`${product?.price} $`}
                    </div>
                    <NavLink to='/' className='card-btn'>
                        Back to Shop
                    </NavLink>
                </section>
            </section>
        </div>
    )
}

export default Details;