import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { SimpleGrid,Box,Text,Img,Container, Select, Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

const Cart = () => {
     const [cartData,setCartData] = useState([]) 
     const [quantity,setQuantity] = useState(1)
     const toast = useToast()

     const getCart = () => {
        axios.get("http://localhost:3001/cart")
          .then((res)=> setCartData(res.data))
          .catch(()=> null)
     }
    useEffect(() => {
           getCart()
    },[])

    //console.log(cartData)
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate() ;

   const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/${id}`)
    .then((res)=> {
          getCart()
          toast({
            title: 'Item Deleted.',
            description: "1 Item has been Removed From Your Cart",
            position: "top",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
    })
    .catch(()=> null)
   }

   let total = 0;
   //total=total*quantity
   if(cartData.length > 0){
    cartData.map((d)=> total+=(Number(d.price)*quantity))
   }
//    //console.log(quantity)
//    //console.log(total)

const handleBuy = () => {
   
    document.getElementById("buy").style.backgroundColor="green"
    document.getElementById("buy").innerText="Bought"
    toast({
        title: 'Item Placed.',
        description: "Thanks For Shopping With Us.",
        position: "top",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })

}




  return cartData.length === 0 ? (<Box style={{
    
  }}>
    <Box style={{
        width:"40%",
        margin:"auto",marginTop:"4%"
    }}><Img width="40%" style={{marginLeft:"7%"}} src="https://www.rentomojo.com/public/images/error/no-cart.png" />
        <Box style={{marginTop:"5%"}}><Text fontSize={{sm:"28px",md:"28px",lg:"30px",xl:"33px",base:"25px"}}>No items in cart</Text></Box>
        <Box style={{marginTop:"5%"}}><Text fontSize={{sm:"26px",md:"26px",lg:"26px",xl:"29px",base:"21px"}}>Add a few items to your cart and come back here for an express checkout process!</Text></Box>
    </Box>
    <Box style={{width:"50%",margin:"auto",marginTop:"5%"}}>
        <Button
         fontSize={{sm:"14px",md:"16px",lg:"18px",xl:"20px",base:"12px"}}
        style={{backgroundColor:"#dc3226",color:"white",marginLeft:"7%"}}>Browse Catalogue</Button></Box>

  </Box>) :
  
  
  (
<Box style={{ width:"100%",backgroundColor:"#f5f7fa",padding:"1%"}}>
  <SimpleGrid style={{width:"90%",margin:"auto",marginTop:"3%",gap:'5%'}} columns={{
    sm:1,
    md:2,
    lg:2,
    xl:2,
    base:1
   }}>
    <Box height={{sm:"600px",md:"550px",lg:"450px",xl:"500px",base:"450px"}} style={{padding:'3%',borderRadius:"8px",backgroundColor:"white",width:"110%"}}>
       <Box style={{display:"flex"}}>
        <Img width="7%" src="https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg" />
        <Text style={{fontWeight:"bold"}} fontSize={{sm:"15px",md:"18px",lg:"19px",xl:"20px",base:"14px"}}>Order Summary:</Text>
       </Box>
       <Box style={{display:"flex",marginTop:"3%"}}>
        <Text style={{fontWeight:"bold"}} fontSize={{sm:"15px",md:"18px",lg:"19px",xl:"20px",base:"14px"}}>
            Total Products: {cartData.length}</Text>
       </Box>
       <SimpleGrid columns={{sm:1,md:2,lg:2,xl:2,base:1}} style={{marginTop:"4%",justifyContent:"space-evenly",}}>
        <Box style={{border:"1px solid #e2eaf0",width:"95%", padding:'2%',borderRadius:"8px",marginTop:"2%"}}>
        <Text style={{}} fontSize={{sm:"15px",md:"18px",lg:"19px",xl:"20px",base:"14px"}}>Payable Now</Text>
          <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:'3%'}}>
          <Text style={{}} fontSize={{sm:"14px",md:"17px",lg:"18px",xl:"19px",base:"12px"}}>Refundable Deposit</Text>
          <Text style={{fontWeight:"bold"}} fontSize={{sm:"13px",md:"16px",lg:"17px",xl:"18px",base:"12px"}}>${total}</Text>
          </Box>

          <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:'3%'}}>
          <Text style={{}} fontSize={{sm:"14px",md:"17px",lg:"18px",xl:"18px",base:"12px"}}>Delivery Charges</Text>
          <Text style={{fontWeight:"bold"}} fontSize={{sm:"13px",md:"16px",lg:"17px",xl:"18px",base:"12px"}}>$100</Text>
          </Box>
        </Box>
        <Box style={{border:"1px solid #e2eaf0",width:"95%", padding:'2%',borderRadius:"8px",marginTop:"2%"}}>
        <Text style={{}} fontSize={{sm:"15px",md:"18px",lg:"19px",xl:"20px",base:"14px"}}>Monthly payable</Text>
        <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:'3%'}}>
          <Text style={{}} fontSize={{sm:"14px",md:"17px",lg:"18px",xl:"19px",base:"12px"}}>Products Rent</Text>
          <Text style={{fontWeight:"bold"}} fontSize={{sm:"13px",md:"16px",lg:"17px",xl:"18px",base:"12px"}}>${total}</Text>
          </Box>

          <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:'3%'}}>
          <Text style={{}} fontSize={{sm:"14px",md:"17px",lg:"18px",xl:"18px",base:"12px"}}>GST</Text>
          <Text style={{fontWeight:"bold"}} fontSize={{sm:"13px",md:"16px",lg:"17px",xl:"18px",base:"12px"}}>$100</Text>
          </Box>
          <hr />
          <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:'3%'}}>
          <Text style={{}} fontSize={{sm:"14px",md:"17px",lg:"18px",xl:"18px",base:"12px"}}>Total Monthly Rent</Text>
          <Text style={{fontWeight:"bold"}} fontSize={{sm:"13px",md:"16px",lg:"17px",xl:"18px",base:"12px"}}>${total+200}</Text>
          </Box> 
        
        </Box>
       
       </SimpleGrid>
      <Box style={{width:"80%",margin:"auto",marginTop:'8%'}}>
        <Button onClick={()=> handleBuy()} id="buy" style={{backgroundColor:"#dc3226",color:"white",width:"100%"}}>
            <Box style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
            <Text style={{}} fontSize={{sm:"14px",md:"17px",lg:"18px",xl:"18px",base:"12px"}}>${total+200} Payable Now</Text>
          <Text style={{}} fontSize={{sm:"13px",md:"16px",lg:"17px",xl:"18px",base:"12px"}}>Proceed</Text>
            </Box>
        </Button>
</Box>      


    </Box>


    <Box style={{height:"100%",borderRadius:"8px",width:"100%"}}>
        <Box style={{display:"flex",borderRadius:"8px",backgroundColor:"white",width:"85%",margin:"auto",justifyContent:"space-evenly",padding:"1%",textAlign:"center"}}>
            <Img width="10%" src="https://www.rentomojo.com/public/images/radical-cart/icons/coupon__icon.svg"/>
            <Text fontSize={{sm:"15px",md:"17px",lg:"18px",xl:"20px",base:"13px"}}>Have a coupon code?</Text>
            <Img width="10%" src="https://www.rentomojo.com/public/images/radical-cart/icons/right__chevron.svg"/>
        </Box>

            <Box  style={{borderRadius:"8px",backgroundColor:"white",width:"85%",margin:"auto",marginTop:"5%",padding:"3%"}}>
               <Box style={{width:"80%",textAlign:"center",margin:"auto",backgroundColor:"#dc3226",color:"white",borderRadius:"5px"}}>
                <Text fontSize={{sm:"15px",md:"14px",lg:"15px",xl:"16px",base:"12px"}}>Only few left in stock. Hurry up!</Text></Box>

            </Box>
            
            {cartData && cartData.map((item)=> (
                <Box key={item.length} style={{width:"90%",margin:"auto",backgroundColor:"white",borderRadius:'8px'}}>
                    <Box style={{borderRadius:"8px",backgroundColor:"white",display:"flex",width:"100%",margin:"auto",marginTop:"5%",padding:"3%"}}>
                <Box style={{width:"30%"}}><Img src={item.image} style={{borderRadius:"8px"}} /></Box>
                <Box style={{width:"70%",marginLeft:"2%"}}>
                    <Box style={{display:"flex",justifyContent:"space-evenly"}}>
                        <Text fontSize={{sm:"15px",md:"17px",lg:"18px",xl:"19px",base:"12px"}}>{item.title}</Text>
                        <Box onClick={()=> handleDelete(item.id)} style={{cursor:"pointer"}}><Img src="https://www.rentomojo.com/public/images/radical-cart/icons/delete__icon.svg"/></Box>
                    </Box>
                    <Box style={{display:"flex",justifyContent:"space-evenly",marginTop:"2%"}}>
                    <Text fontSize={{sm:"15px",md:"17px",lg:"18px",xl:"19px",base:"12px"}} color="grey">Rent</Text>
                    <Text fontSize={{sm:"15px",md:"17px",lg:"18px",xl:"19px",base:"12px"}} color="grey">Deposit</Text>
                    </Box>
                    <Box style={{display:"flex",justifyContent:"space-evenly"}}>
                    <Text fontSize={{sm:"15px",md:"17px",lg:"18px",xl:"19px",base:"12px"}} color="grey">${item.price}/mo</Text>
                    <Text fontSize={{sm:"15px",md:"17px",lg:"18px",xl:"19px",base:"12px"}} color="grey">${item.deposit}</Text>
                    </Box>
                </Box>

            </Box>
            <SimpleGrid columns={{sm:1,md:1,lg:2,xl:2,base:1}} style={{backgroundColor:"white",width:"60%",margin:"auto"}}>
                <Select onChange={(e)=> setQuantity(e.target.value)} style={{width:"100%"}}  fontSize={{sm:"13px",md:"14px",lg:"15px",xl:"16px",base:"12px"}}>
                    <option value="1">Select Quantity</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Select>
                <Select style={{width:"100%",marginLeft:"30px"}}  fontSize={{sm:"13px",md:"14px",lg:"15px",xl:"16px",base:"12px"}}>
                    <option value="12">12 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="1">1 Months</option>
                </Select>
            </SimpleGrid>
            <Box style={{backgroundColor:"#e2eaf0",padding:"1%",marginTop:"7%",width:"100%",margin:"auto",display:"flex",justifyContent:"center", textAlign:"center"}}>
               <Img width="7%" src="https://www.rentomojo.com/public/images/radical-cart/icons/truck__icon.svg" />
               <Text style={{marginLeft:'15px'}} fontSize={{sm:"14px",md:"16px",lg:"17px",xl:"19px",base:"12px"}}>Delivery By {date}/{month}/{year}</Text>
            </Box>
                </Box>
            ))}
    </Box>
  </SimpleGrid>
</Box>


  )
}

export default Cart