import React, {useState, useEffect} from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {connect, useSelector} from 'react-redux';
import Youtube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import formatApi from '../../_util/formatApi';
import {
  Container,
  Header,
  Title,
  DetailsList,
  Form,
  Avatar,
  Instructions,
  Category,
  Description,
  LoadingForm,
} from './styles';

function Details() {
  const name = useSelector(state => state.drinks.name);
  const id = useSelector(state => state.drinks.id);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const links = ['q-gYcvipozY', 'kX6upM2XFc0', 'SOIIhdPgIDM'];
  const link = links[Math.floor(Math.random() * links.length)];

  useEffect(() => {
    async function loadDrinks() {
      const type = formatApi(name);
      const response = await api.get(`${type}${id}`);
      setData(response.data.drinks);
      setLoading(false);
    }
    loadDrinks();
  }, [name, id]);

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

      {loading ? (
        <LoadingForm>
          <ActivityIndicator size="large" color="#999" />
        </LoadingForm>
      ) : (
        <DetailsList
          data={data}
          keyExtractor={item => item.idDrink}
          renderItem={({item}) => (
            <Form>
              <Avatar source={{uri: item.strDrinkThumb}} />
              <Category>{item.strCategory}</Category>
              <Instructions>
                Instructions: <Description>{item.strInstructions}</Description>
              </Instructions>
              <Youtube
                apiKey="AIzaSyAdgexPeQtlHthvF4AY5AyshbPjbzkMOAY"
                videoId={link}
                fullscreen={false}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  display: 'flex',
                  marginTop: 25,
                  alignSelf: 'stretch',
                  height: 200,
                }}
              />
            </Form>
          )}
        />
      )}
    </Container>
  );
}

export default connect(state => ({
  drinks: state.drinks,
}))(Details);
