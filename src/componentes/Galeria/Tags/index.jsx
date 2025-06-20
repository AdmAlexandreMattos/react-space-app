import { styled } from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;
const TituloTags = styled.p`
  color: #d9d9d9;
  font-size: 24px;
  margin: 0;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background-color: rgba(217, 217, 217, 0.3);
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  border-color: transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;
const Div = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;
const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TituloTags>Busque por tags:</TituloTags>
      <Div>
        {tags.map((tag) => (
          <Tag key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}
          </Tag>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
