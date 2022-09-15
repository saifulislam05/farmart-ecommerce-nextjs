import Image from "next/image"

const ProductCard = ({ product }) => {
    const { name, image, price, weight, oldPrice } = product
    const offCalc = () => {
        const off =((oldPrice-price) / oldPrice) *100
        return Math.round(off)
    }
    return (
        <div className='product-card'>

            {oldPrice && (
               <span className="bg-orange text-white text-xs px-2 py-1 rounded-md absolute top-5 left-5 z-10">
                {offCalc()}% OFF
            </span> 
            )}

            
            {/* Image  */}
            <Image
                src={image}
                width={265}
                height={270}
                objectFit="contain"
                alt={name}
            />

            {/* product details  */}
            <div className="flex flex-col gap-1 mt-2 w-full">
                <h4 className=" w-[275px] text-sm font-bold text-color">Farmart</h4>
                <h3 className="text-lg font-semibold text truncate">{name}</h3>

                {/* product contaty */}
                <spa className="text-sm text-color">
                    {weight}
                </spa>
                {/* product rate */}
                <div className="flex items-center gap-1">

                    <span className= {`text-base font-extrabold ${oldPrice? 'text-orange': 'text-green'}`} >
                        ${price}
                    </span>
{oldPrice && (<span className="text-sm line-through text-gray-400">${oldPrice}</span>)}               
                    
                </div>

            </div>

        </div>
    )
}

export default ProductCard