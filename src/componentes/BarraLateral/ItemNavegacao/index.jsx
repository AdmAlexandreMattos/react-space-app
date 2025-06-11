import styled from "styled-components";

const ItemListaEstilizado = styled.li`
  width: 212px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemNavegacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <>
      <ItemListaEstilizado>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
        {children}
      </ItemListaEstilizado>
    </>
  );
};

export default ItemNavegacao;
