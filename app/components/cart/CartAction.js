import Link from "next/link";
import Button from "../shared/Button";

const CartAction = () => {
  return (
    <div className=" py-8 border-t">
      <div className="flex justify-between gap-5 flex-wrap">
        {/* Coupon  */}
        <div className="md:w-[40%] w-full">
          <div className="text-xl mb-3 font-bold">Farmart Newsletter</div>

          <div className="flex items-center mt-5">
            <div className="flex flex-1 items-center border p-4 rounded">
              <input
                type="text"
                placeholder="Coupoon code"
                className="outline-none bg-transparent px-4 flex-1"
              />
            </div>
            <Button title="Apply" className="self-stretch" />
          </div>
        </div>

        <div className="bg-gray-100 p-5 rounded-md md:w-[40%] w-full">
          <div className="flex justify-between mb-5 border-b-2 ">
            <h2 className="text-xl font-bold">Subtotal</h2>
            <h2 className="text-xl font-bold">$ 200</h2>
          </div>
          <div className="pb-5 border-b space-y-3">
            <span className="text-title">Shipping</span>
            <ul className="">
              <li className="">- Flat rate</li>
            </ul>
            <p>
              Shippign to <strong>India</strong>
            </p>
                  </div>
                  <div className="flex justify-between py-5">
                      <h2 className="text-xl font-bold">Subtotal</h2>
                      <h2 className="text-xl font-bold text-green">$200</h2>
          </div>
          <Link href="checkout">
             <Button
                      title="Proceed to checkout"
                      className="w-full py-3"
                  />
          </Link>
               
        </div>
      </div>
    </div>
  );
};

export default CartAction;
