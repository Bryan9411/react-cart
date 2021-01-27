import styled from 'styled-components'



const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  background-color: #eceeef;
  border-radius: .3rem;
  max-width: 1440px;
`
const Info = styled.div`
padding: 0 20px;
`
const Title = styled.h1`
  padding: 0 20px;
  font-size: 40px;
`
const Content = styled.p`
  width: 100%;
  font-size: 20px;
  letter-spacing: 0.2em;
  padding: 0 20px;
  line-height: 2;
  box-sizing: border-box;
  white-space: wrap;
`
const Cart = styled.button`
  color: #fff;
  background-color: #0275d8;
  border-color: #0275d8;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  width: 100px;
  padding: 8px;
  margin: 20px 40px;
  border-radius: 5px;
`
export default function About({carts, handleIsOpen}) {
  return (
    <Container>
      <Info>
        <Title>美客唱片</Title>
        <Content>
        美客唱片成立以來，結合實體唱片通路、唱片公司、網站，因而擁有豐富、完整的音樂資源

        並與電視、廣播等媒體進行策略聯盟，已迅速打響知名度，並廣受各界好評

        不僅如此，美客唱片將跨足大中華地區，透過舉辦跨國、跨區域的大型頒獎典禮、演唱會以及音樂活動

        進一步擴大影響力，提昇流行音樂產業的動能
        </Content>
      </Info>
      <Cart onClick={handleIsOpen} >購物車({carts.length })</Cart>
    </Container>
    
  )
}


