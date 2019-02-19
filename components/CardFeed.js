import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardFeed extends Component {
  render() {
    function handleClick() {
      alert('liked');
    }
    return (
      <Container style={styles.container}>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: '/Users/tudo/code/finalApp/assets/download (1).jpeg'}} />
                <Body>
                  <Text>Hana</Text>
                  <Text note>5 years old</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: '/Users/tudo/code/finalApp/assets/download.jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>15 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>5h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: '/Users/tudo/code/finalApp/assets/download (2).jpeg'}} />
                <Body>
                  <Text>John</Text>
                  <Text note>4 years old</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: '/Users/tudo/code/finalApp/assets/images (1).jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>15 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: '/Users/tudo/code/finalApp/assets/images.jpeg'}} />
                <Body>
                  <Text>Jack</Text>
                  <Text note>6 years old</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
            
              <Image source={{uri: '/Users/tudo/code/finalApp/assets/images (2).jpeg'}} style={{height: 200, width: null, flex: 1}}/>
              
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text onClick={handleClick}>11 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>11 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>1h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: '/Users/tudo/code/finalApp/assets/images (3).jpeg'}} />
                <Body>
                  <Text>Tina</Text>
                  <Text note>3 years old</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: '/Users/tudo/code/finalApp/assets/images (3).jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>15 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            {/* <CardItem>
              <Left>
                <Thumbnail source={{uri: '/Users/tudo/code/finalApp/assets/download (2).jpeg'}} />
                <Body>
                  <Text>John</Text>
                  <Text note>4 years old</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: '/Users/tudo/code/finalApp/assets/images (1).jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>15 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: '/Users/tudo/code/finalApp/assets/download (2).jpeg'}} />
                <Body>
                  <Text>John</Text>
                  <Text note>4 years old</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: '/Users/tudo/code/finalApp/assets/images (1).jpeg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>15 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem> */}
            
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
      height: 500,
      width: 400,
      marginTop: 100,
    },
});
