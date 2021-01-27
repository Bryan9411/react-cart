import styled from 'styled-components'

const CartInfo = styled.tr`
  td {
    padding: 1.75rem;
    border-top: 1px solid #eceeef;
    border-bottom: 2px solid #eceeef;
    text-align: center;
  }
`
const DeleteCommodity = styled.div`
  background-color: pink;
  cursor: pointer;
  color: white;
  padding:8px;
  border-radius: 8px;
  font-size: 20px;
`

export default function Cart({cart, handleDeleteCommodity}) {
  return (
    <CartInfo>
      <th>{cart.id}</th>
      <td>{cart.title}</td>
      <td>{cart.price}</td>
      <td>
        <DeleteCommodity onClick={() => handleDeleteCommodity(cart.id)}>X</DeleteCommodity>
      </td>
    </CartInfo>
        
  )
}