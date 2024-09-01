import { TbReceipt } from "react-icons/tb";
import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ title, isCustomer, orderCount, ...rest }) {
    return (
        <Container
            type="button"
            {...rest}
        >
            {isCustomer && <TbReceipt size={"3.2rem"} />}
            {title}
            {isCustomer && <span>({orderCount})</span>}
        </Container>
    );
}