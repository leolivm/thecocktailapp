import React, {useState, useEffect} from 'react';
import {
  Container,
  Title,
  CategoriesForm,
  CategoriesList,
  Name,
  Avatar,
} from './styles';
import {StyleSheet} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import cocktail from '../../assets/cocktail.jpg';
import alcoholic from '../../assets/alcoholic.jpg';
import nonalcoholic from '../../assets/nonalcoholic.jpg';
import ordinarydrink from '../../assets/ordinarydrink.jpg';
import cocktailglass from '../../assets/cocktailglass.jpg';
import champagneflute from '../../assets/champagneflute.jpg';

function Categories() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  function navigateToDrinks(item) {
    const {id, name} = item;
    dispatch({
      type: '@category/ADD_CATEGORY',
      id,
      name,
    });
    navigation.navigate('Drinks');
  }

  useEffect(() => {
    setData([
      {id: 0, name: 'Alcoholic', image: alcoholic},
      {id: 1, name: 'Non Alcoholic', image: nonalcoholic},
      {id: 2, name: 'Cocktail', image: cocktail},
      {id: 3, name: 'Ordinary Drink', image: ordinarydrink},
      {id: 4, name: 'Cocktail glass', image: cocktailglass},
      {id: 5, name: 'Champagne flute', image: champagneflute},
    ]);
  }, []);

  return (
    <Container>
      <Title>Categories</Title>

      <CategoriesList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <CategoriesForm
            style={styles.shadow}
            onPress={() => navigateToDrinks(item)}>
            <Avatar source={item.image} />
            <Name>{item.name}</Name>
          </CategoriesForm>
        )}
      />
    </Container>
  );
}

export default connect()(Categories);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 10,
    elevation: 5,
    backgroundColor: '#ddd',
  },
});
