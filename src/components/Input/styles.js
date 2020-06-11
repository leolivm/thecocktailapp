import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.3)',
})`
  flex: 1;
  font-size: 15px;
`;
