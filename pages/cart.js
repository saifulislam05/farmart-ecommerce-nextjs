import Breadcrumb from "../app/components/shared/Breadcrumb"


const Cart = () => {
    return (
        <main>
            <div className="bg-[#F5F5F5] p-5">
                <div className="mx-auto max-w-5xl">
                    <Breadcrumb
                        items={[
                        {label:'Home', href: '/'},
                        {label:'Shop', href: '/product'},
                        {label:'Cart'},
                    ]}
                    />
               </div>
            </div>
        </main>

    )
}

export default Cart