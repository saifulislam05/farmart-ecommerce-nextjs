import { DEALS } from '../../data/product';
import ProductCard from '../Product/ProductCard';
import SectionHeading from '../shared/SectionHeading';


const TodaysDeals = () => {
    return (
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="flex flex-wrap w-full">
                    <SectionHeading
                        title="Top Saver Today"
                        moreText="All Offers"
                    />
                    {/* Products  */}
                    <div className="w-full flex gap-7 overflow-x-auto mt-5 pt-5 pb-14 pl-2 -ml-2 no-scrollbar">

                        {DEALS.map((product, index) => (
                            <ProductCard
                                key={index}
                                product={product}
                            />
                        ))}

                    </div>
                </div>

            </div>
        </section>
    )
}

export default TodaysDeals