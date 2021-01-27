import styled from 'styled-components'
import Header from '../Header'
import About from '../About'
import Card from '../Cards'
import Cart from '../Carts'
import {getCardInfo} from '../../WebApi'
import { useEffect, useState } from 'react'

const Root = styled.div``
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  justify-content: center;
  align-items: center;
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`
const ModalContainer= styled.div`
  position: absolute; 
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 960px;
  height: 550px;
  max-width: 960px;
  margin: auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: .3rem;
  overflow-y:scroll;
`
const ModalHeader= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 50px;
  border-bottom: 1px solid #eceeef;
  h4 {
    letter-spacing: 0.2em
  }
  span {
    color: red;
    fcont-size: 20px;
  }
`
const CloseModal= styled.div`
  cursor: pointer;
  font-size: 20px;
`
const ModalBody = styled.div`
  table{
    width: 90%;
    margin: 0 auto 1rem auto;
    max-width: 100%;
    margin-bottom: 1rem;
    border-collapse: collapse;
    background-color: transparent;
    
    th{
      padding: 1.75rem;
      border-top: 1px solid #eceeef;
      border-bottom: 2px solid #eceeef;
      
    }
  }
`
const CalculatePrice= styled.div`
  width: 90%;
  margin: 0 auto 1rem auto;
  box-sizing: border-box;
  background-color: 	#dff0d8;
  padding: .75rem 1.25rem;
  border-radius: .25rem;
`
const Total = styled.div`
  text-align: right;
  color: #3c763d;
`
const ModalFooter = styled.div`
  border-top: 1px solid #eceeef;
  width: 90%;
  margin: 0 auto 1rem auto;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  padding: .75rem 1.25rem;

  .success-button{
    width: 50px;
    text-align: center;
    font-size: 14px;
    color: white;
    padding:8px;
    background-color: #0275d8;
    border-radius: 8px;
    cursor: pointer;
    margin-right: 10px;
  }
  .cancel-button{
    width: 50px;
    text-align: center;
    cursor: pointer;
    padding:8px;
    border-radius: 8px;
    font-size: 14px;
    color: #292b2c;
    background-color: 	#FBFBFF;
   
  }
  .
`


function App() {
  const [cards, setCards] = useState([])
  const [carts, setCarts] = useState([])
  const [modal, setModal] = useState(false)
  

  // 新增商品到購物車
  const handleClickAddToCarts = (id,title, price) => {
     setCarts(
      carts.concat({
        id,
        title,
        price
      })
    )
    
    console.log(carts)
  }

  // 打開購物車視窗
  const handleIsOpen = () => {
    if (!modal) {
      setModal(true)
    } else {
      setModal(false)
    }
  }
  // 關閉購物車視窗
  const handleCloseModal = () => {
    if (modal) {
      setModal(false)
    }
  }

  // 刪除購物車品項
  const handleDeleteCommodity = (key) => {
    setCarts(
      carts.filter(cart => cart.id !== key)
    )
  }

  // 結帳
  const handleCheckoutClick = () => {
    const totalPrice = carts.reduce((accumulator, cart) => (accumulator + cart.price), 0)
    alert(`
      已從您的信用卡中扣除${totalPrice}元
    `)
  }

  const handleCancleClick = () => {
    setModal(false)
  }
  // 從 api 拿商品資料
  useEffect(() => {
    getCardInfo().then(data => {
      // console.log(data)
      setCards(data)
    })
  },[])

  return (
    <Root>
      <Header />
      <Container>
        <About carts={carts} handleClickAddToCarts={handleClickAddToCarts} handleIsOpen={handleIsOpen}/>

        {modal && (
          <ModalContainer>
            <ModalHeader>
              <h4>有
              <span>{carts.length}</span>
                樣商品準備購買中
              </h4>
              <CloseModal onClick={handleCloseModal}>X</CloseModal>
            </ModalHeader>
            <ModalBody>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>品項</th>
                    <th>價格</th>
                    <th></th>
                  </tr>
                  {carts.map((cart) => <Cart cart={cart} key={cart.id} handleDeleteCommodity={handleDeleteCommodity}/>)}
                </thead>
              </table>
            </ModalBody>
            <CalculatePrice>
              <Total>
                總價{carts.reduce((accumulator, cart) => (accumulator + cart.price), 0)}元
              </Total>
            </CalculatePrice>
            <ModalFooter>
              <div className='success-button' onClick={handleCheckoutClick}>結帳</div>
              <div className='cancel-button' onClick={handleCancleClick}>取消</div>
            </ModalFooter>
          </ModalContainer>
        )}
        
        <Cards>
          {cards.map(card => <Card card={card} key={card.id} carts={carts} handleClickAddToCarts={handleClickAddToCarts} />) }
        </Cards>
      </Container>
    </Root>
    
  )
}

export default App;
