import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import formatApi from '../../_util/formatApi';
import {
  Container,
  Header,
  SearchForm,
  FormInput,
  Title,
  DrinksList,
  Form,
  Avatar,
  Name,
  LoadingForm,
  SearchErrorForm,
  SearchError,
} from './styles';

function Drinks() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const name = useSelector(state => state.category.name);
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadDrinks() {
      const type = formatApi(name);
      const response = await api.get(type);
      setData(response.data.drinks);
      setLoading(false);
    }
    loadDrinks();
  }, [name]);

  useEffect(() => {
    search === '' ? setDataSearch([]) : null;
  }, [search]);

  async function loadSearch() {
    setLoading(true);
    const response = await api.get(`/search.php?s=${search}`);
    setDataSearch(response.data.drinks);
    setLoading(false);
  }

  function navigateToDetails(item) {
    const {idDrink, strDrink} = item;
    dispatch({
      type: '@drinks/ADD_DRINKS',
      strDrink,
      idDrink,
    });
    navigation.navigate('Details');
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>
        <Title>{name}</Title>
      </Header>

      <SearchForm>
        <FormInput
          autoCorrect={false}
          autoCapitalize={false}
          placeholder="Search cocktail by name"
          icon={search ? null : 'search'}
          returnKeyType="search"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={loadSearch}
        />
      </SearchForm>

      {loading ? (
        <LoadingForm>
          <ActivityIndicator size="large" color="#999" />
        </LoadingForm>
      ) : dataSearch == null ? (
        <SearchErrorForm>
          <SearchError>No drinks were found. 🙁</SearchError>
        </SearchErrorForm>
      ) : (
        <DrinksList
          data={search === '' ? data : dataSearch}
          keyExtractor={item => item.idDrink}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigateToDetails(item)}>
              <Form>
                <Avatar source={{uri: item.strDrinkThumb}} />
                <Name>{item.strDrink}</Name>
              </Form>
            </TouchableOpacity>
          )}
        />
      )}
    </Container>
  );
}

export default connect(state => ({
  category: state.category,
}))(Drinks);
