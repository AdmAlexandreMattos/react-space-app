import styled from "styled-components";

const ListaEstilizada = styled.ul`
  width: 212px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <li>
            <a href="">Início</a>
          </li>
          <li>
            <a href="">Mais vistas</a>
          </li>
          <li>
            <a href="">Mais curtidas</a>
          </li>
          <li>
            <a href="">Novas</a>
          </li>
          <li>
            <a href="">Surpreenda-me</a>
          </li>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
