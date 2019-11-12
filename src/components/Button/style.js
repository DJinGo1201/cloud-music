import styled from 'styled-components';

export const ButtonWrap = styled.a`
  display: block;
  outline: 0 none;
  -webkit-appearance: none;
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  font-size: 18px;
  height: 47px;
  line-height: 47px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  white-space: nowrap;
  color: #666;
  background-color: ${props => props.active ? '#ddd' : '#fff'};
  border: 1px solid #ddd;
  border-radius: 5px;
`