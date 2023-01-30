import { Button, Offcanvas, OffcanvasBody, Stack } from 'react-bootstrap'
import { useShoppingCart } from './../context/ShoppingCartContext'
import { CartItem } from './CartItem'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utilities/formatCurrency'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end' className='bg-primary'>
      <Offcanvas.Header closeButton >
        <Offcanvas.Title style={{ color: 'white'}}>Carrinho de Compras</Offcanvas.Title>        
      </Offcanvas.Header>
      <OffcanvasBody >
        <Stack gap={3}  className=' bg-light  rounded'>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
            
          ))}
          
        </Stack>
        
      </OffcanvasBody>
      
      <div className='ms-auto fw-bold' style={{ color: 'white', width: '250px'}}>
       Total R${' '}
        
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
        
        </div>
      <Button className='bg-black rounded-0 fw-bold' style={{height: '60px'}}>
        <div>Finalizar Compra</div>
      </Button>
    </Offcanvas>
  )
}
