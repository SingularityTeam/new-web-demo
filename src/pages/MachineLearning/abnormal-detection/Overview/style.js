import styled from 'styled-components';

// 使用 styled-components 制作定制的卡片
const StyledCard = styled.div`
  display: inline-block;
  width: 30%;
  background-color: #eee;
  text-align: center;
  border-left: 10px solid ${props => props.cardColor};

  & + & {
    margin-left: 20px;
  }

  p {
    margin: 5px 0;
  }

  p:first-child {
    font-weight: 700;
  }
`;

export default StyledCard;
