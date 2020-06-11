import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Title = styled.Text`
  margin: 20px 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-bottom-width: 0.5px;
  border-color: #ddd;
  padding-bottom: 20px;
`;

export const CategoriesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 10px;
  padding: 0 20px;
`;

export const CategoriesForm = styled(TouchableOpacity)`
  background: #ddd;
  border-radius: 4px;
  padding: 20px;
  flex: 1;
  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-top: 15px;
  font-size: 13px;
  font-weight: bold;
  color: #333;
  text-align: center;
`;
