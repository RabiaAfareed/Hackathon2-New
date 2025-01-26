"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link";
import { Heart, Trash2 } from "lucide-react"

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCart() {
 
  const router = useRouter()
  const searchParam = useSearchParams();
  const [cartItem, setCartItem] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    const updatedCart = cart ? JSON.parse(cart) : [];
    setCartItem(updatedCart);
  }, []);

  useEffect(()=>{
    const cart = localStorage.getItem("cart")
    const updatedCart = cart ? JSON.parse(cart) : []
    
    const name = searchParam.get("name");
    const price = searchParam.get("price");
    const description = searchParam.get("description");
    const image = searchParam.get("image");

    if(name && price && description && image){
      const isDuplicate: boolean =  updatedCart.some((item: CartItem) => item.name === name);
    
      if(!isDuplicate){
        updatedCart.push({name, price, description, image, quantity: 1})
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart))
      setCartItem(updatedCart)
      router.replace("/cart")
    }  
  },[searchParam, router])

  function handleRemoveItem(index: number){
    const removeCard = [...cartItem]
    removeCard.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(removeCard))
    setCartItem(removeCard)
  }

  function handleQuantity(index: number, e_target_value: number){
    const copyWalaArray = [...cartItem]
    copyWalaArray[index].quantity = e_target_value

    localStorage.setItem("cart", JSON.stringify(copyWalaArray))
    setCartItem(copyWalaArray)
  }

  function handleWishList (index:number){
    const wishListArray = [...cartItem]
    const local_WishList = localStorage.getItem("wishlist")
    const updatedWishList = local_WishList ? JSON.parse(local_WishList) : []
    updatedWishList.push(wishListArray[index])
    localStorage.setItem("wishlist", JSON.stringify(updatedWishList))
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-normal text-gray-900 mb-8">Your shopping cart</h1>

      <div className="mb-8">
        <div className="grid grid-cols-[2fr,1fr,1fr] gap-4 pb-4 border-b">
          <div className="text-sm font-medium">Product</div>
          <div className="text-sm font-medium">Quantity</div>
          <div className="text-sm font-medium text-right">Total</div>
        </div>

        <div className="container mx-auto">
        {cartItem.map((item: CartItem, index: number) => {
          return(
            <div key={index} className="grid grid-cols-[3fr,1fr,1fr] gap-4 py-6 items-center">
              <div className="flex gap-4">
                <div className="w-96 h-40 bg-gray-100 relative rounded">
                  <Image
                   src={item.image || "/creamic1.png"}
                   alt={item.name}
                   height={96}
                   width={96}
                   className="object-cover rounded"
                    />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  <p className="text-sm text-gray-500 mt-1">£{item.price}</p>
            
                </div>
               
              </div>
              <div>
                <input
                  type="number"
                   min={1}
                  value={item.quantity} onChange={(e)=>{handleQuantity(index, +e.target.value)}}
                  className="w-16 px-2 py-1 border rounded-md"
                />
              </div>
              <div className="text-right"> MRP: ₹ {+item.price * item.quantity}</div>
              <div key={index} className="flex gap-4">
                 <Button variant="ghost" size="sm" onClick={() => { handleWishList(index) }}>
                  <Heart className="w-4 h-4 hover:bg-red-700"/>
                 </Button>
                 <Button variant="ghost" size="sm" onClick={() => { handleRemoveItem(index) }}>
                  <Trash2 className="w-4 h-4" />
                 </Button>
            </div>
            </div>
          )
           })}
        </div>
      </div>

      <div className="flex flex-col items-end gap-4">
        <div className="flex justify-between w-48">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">£{cartItem.reduce((total: number, object: { price: string | number; quantity: number })=>{return total + (+object.price * object.quantity)  }, 0)}</span>
        </div>
        <div className="flex justify-between w-48">
          <span className="text-gray-600">Total</span>
          <span className="font-medium">₹ {cartItem.reduce((total: number, item: { price: any; quantity: number })=> total + Number(item.price) * item.quantity, 0).toFixed(2).toLocaleString()}</span>
        </div>
                    
        <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout</p>
       <Link href={"/checkout"}>
       <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8">Go to checkout</Button>
       </Link>
      </div>
    </div>
  )
}

