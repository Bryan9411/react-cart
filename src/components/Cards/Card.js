import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0,0,0,.125);
  margin: 20px 15px;
  height: 600px;
`
const CardImg = styled.div`
  background-color: pink;
  width: 440px;
  height: 300px;
  }
  img{
    width: 100%;
    height: 100%;
  }
`
const CardInfo = styled.div`
  padding: 1.25rem;
  width: 400px;
`
const Title = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
`
const Price = styled.span`
  display: inline-block;
  background-color: #5cb85c;
  padding: 5px;
  border-radius: 4px;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  text-align: center;
`
const Content = styled.p`
  color: #555;
  margin: 20px 0;
`
const Buy = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  padding: 5px;
`
export default function Card({card, carts, handleClickAddToCarts}) {

  return (
   <Container $id={card.id}>
     <CardImg>
       <img src={card.img} alt='img'/>
     </CardImg>
     <CardInfo>
       <Title>{card.title}</Title>
       <Price>售價{card.price}</Price>
       <Content>{card.desc}</Content>
       <Buy onClick={() => handleClickAddToCarts(card.id, card.title, card.price)} disabled={carts.find(cart => cart.id === card.id)}>點我購買</Buy>
     </CardInfo>
   </Container>
  )
}

