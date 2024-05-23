import { useRecoilState } from "recoil";
import { shippingAreaState } from "@/stores/cartAmount";

const useShippingArea = () => {
  const [shippingArea, setShippingArea] = useRecoilState(shippingAreaState);

  const changeShippingArea = () => {
    setShippingArea((prev) => (prev === "standard" ? "remote" : "standard"));
  };

  return {
    shippingArea,
    changeShippingArea,
  };
};

export default useShippingArea;