import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formatCurrency } from './../utilities/formatCurrency'
type CartItemProps = {
  id: number
  quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((i) => i.id === id)
  if (item == null) return null

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.imgUrl}
        style={{ width: '105px', height: '60px', objectFit: 'cover'}}
      />
      <div className='me-auto'>
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '.75rem' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div >
        {formatCurrency(item.price * quantity)}
        <Button style={{  color: 'white', width: '1.5rem', height: '1.5rem'}}   //icone "x" dos item selecionados para corrigir
          className=' rounded-circle border-0 bg-black'
          variant='outline-danger'
          size='sm' 
          onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  )
}
