import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
  border-bottom-width: 0.5px;
  border-color: #ddd;
  margin-bottom: -5px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const DetailsList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 -10px 0;
  padding: 0 10px;
`;

export const Form = styled.View`
  align-items: center;
  margin: 5px 5px 12px;
  background: rgba(0, 0, 0, 0.01);
  border-radius: 5px;
  padding: 12px;
`;

export const Avatar = styled.Image`
  width: 190px;
  height: 190px;
  border-radius: 8px;
`;

export const Category = styled.Text`
  color: #111;
  margin: 20px 0 5px 0;
  text-align: center;
  font-weight: bold;
  font-size: 15px;
`;

export const Instructions = styled.Text`
  color: #111;
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
`;

export const Description = styled.Text`
  color: #777;
  font-size: 14px;
`;

export const LoadingForm = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;
