import axios from "axios";
import { baseBeUrl } from "../../helper";
import { useAuthContext } from "../../store/AuthCtxProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BuyItemButton({ itemId, customerId, itemStock }) {
  const navigate = useNavigate();

  const { token } = useAuthContext();

  const [quantity, setQuantity] = useState(1);

  const [max, setMax] = useState(itemStock);

  const buyItem = async () => {
if(quantity > max) {
  toast.error('Item stock is too low!');
  return;
}

    sendAxiosData({
      item_id: itemId,
      customer_id: customerId,
      quantity: parseInt(quantity)
    })
  };

  function sendAxiosData(data) {
    axios
      .post(`${baseBeUrl}orders`, data, {
        headers: { 'Authorization': token }
      })
      .then((response) => {
        toast.success(response?.message || 'Order was created successfully!');
        navigate('/orders', { replace: true })
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      })
  }
  return (
    <div className="">
      <input
        className='px-2 py-1 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mr-3'
        type='number'
        min='1'
        max={max}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}

      />

      <button
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex gap-2 rounded"
        onClick={buyItem}
      >

        Į Krepšelį
        <svg data-v-2e1ff45f="" xmlns="http://www.w3.org/2000/svg" width="26.391" height="28" stroke="#001F47" className="stroke-white"><g data-v-2e1ff45f="" data-name="Group 9583"><g data-v-2e1ff45f="" data-name="Group 8557"><g data-v-2e1ff45f="" data-name="Group 8556" fill="none" stroke-width="2" transform="translate(0 1)"><path data-v-2e1ff45f="" data-name="Path 20961" d="M0 0h6.072v14.462h16.175s1.811-5.029 2.726-7.632c.165-.468.2-.564.3-.832a1.607 1.607 0 00-1.653-2.181c-1.3 0-1.987-.012-2.779-.011H10.563" stroke-linejoin="round"></path><circle data-v-2e1ff45f="" data-name="Ellipse 9" cx="3.202" cy="3.202" r="3.202" transform="translate(3.422 19.597)" stroke-miterlimit="10"></circle><circle data-v-2e1ff45f="" data-name="Ellipse 10" cx="3.202" cy="3.202" r="3.202" transform="translate(18.216 19.597)" stroke-miterlimit="10"></circle></g></g></g></svg>
      
        </button>
    </div>
  );
}
