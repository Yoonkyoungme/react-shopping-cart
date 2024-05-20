import { useRecoilValue } from "recoil";
import { cartItemsState } from "../../../stores/cartItems";
import { cartPriceState } from "../../../stores/cartPrice";

import * as S from "./styled";

const OrderConfirm = () => {
  const { totalPrice } = useRecoilValue(cartPriceState);
  const cartItems = useRecoilValue(cartItemsState);

  const totalItemLength = cartItems.reduce((acc, cur) => {
    return cur.quantity + acc;
  }, 0);

  return (
    <S.Container>
      <S.Title>주문 확인</S.Title>
      <S.Info>
        <div>
          총 {cartItems.length}종류의 상품 {totalItemLength}개를 주문합니다.
        </div>
        <div>최종 결제 금액을 확인해 주세요.</div>
      </S.Info>
      <S.PriceWrapper>
        <S.PriceText>총 결제 금액</S.PriceText>
        <S.Price>{totalPrice.toLocaleString("ko-KR")}원</S.Price>
      </S.PriceWrapper>
    </S.Container>
  );
};

export default OrderConfirm;