import { Badge, Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from './../context/ShoppingCartContext'
export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavbarBs sticky='top' className='bg-primary shadow-sm mb-3' variant="dark">
      <Container>
        <Nav className='me-auto'>
        <Nav.Link to={'/Store'} as={NavLink}> {/* Navegação para a tela home */}
          MKSsistemas
          </Nav.Link> 
    
        </Nav>

        {cartQuantity > 0 && (
          <Button 
            onClick={openCart}
            style={{ color: 'white', width: '3.3rem', height: '3rem', position: 'relative' }}
            variant='outline-Dark'
            className='color-outline'
            
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColorblack'
              viewBox='0 0 16 16'
            >
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            <div
              className=' align-items-center'
              style={{
                color: 'black',
                width: '1.7rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 13,
                right: -9,
                transform: 'translate(+25%, +25%)',
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}
