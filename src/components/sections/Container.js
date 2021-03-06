import styled from "styled-components"

const ContainerEelement = styled.div`
    max-width: 86%;
    margin-right: auto;
    margin-left: auto;
`;

export default function Container({ children }) {
    return (
        <ContainerEelement>
            {children}
        </ContainerEelement>
    )
}