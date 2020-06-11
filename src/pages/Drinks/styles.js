import styled from 'styled-components/native';
import Input from '../../components/Input';

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

export const SearchForm = styled.View`
  flex-direction: row;
  padding: 0 13px 10px;
  margin-top: 20px;
`;

export const FormInput = styled(Input).attrs({
  placeholderTextColor: '#eee',
})`
  flex: 1;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 0 15px;
`;

export const Title = styled.Text`
  font-size: 16px;
`;

export const DrinksList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 10px 0 -10px 0;
  padding: 0 5px;
`;

export const Form = styled.View`
  align-items: center;
  margin: 5px 5px 12px;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: row;
  border-radius: 4px;
  padding: 12px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  overflow: hidden;
  max-width: 210px;
  color: #000;
  margin: 0 0 0 8px;
  font-weight: bold;
  font-size: 14px;
`;

export const LoadingForm = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;

export const SearchErrorForm = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 250px;
`;

export const SearchError = styled.Text`
  font-size: 18px;
`;
