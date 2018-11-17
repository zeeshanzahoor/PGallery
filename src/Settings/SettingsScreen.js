import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import withRedux from '../Store/withRedux';
import Gallery from 'react-native-photo-gallery';

const data = [
    {
      image: require('../../img/alia.jpg'),
      thumb: require('../../img/alia.jpg'),
    },
    {
        image: require('../../img/alia.jpg'),
        thumb: require('../../img/alia.jpg'),
      },
      {
        image: require('../../img/alia.jpg'),
        thumb: require('../../img/alia.jpg'),
      },
      {
        image: require('../../img/alia.jpg'),
        thumb: require('../../img/alia.jpg'),
      },
      {
        image: require('../../img/alia.jpg'),
        thumb: require('../../img/alia.jpg'),
      },
      {
          image: require('../../img/alia.jpg'),
          thumb: require('../../img/alia.jpg'),
        },
        {
          image: require('../../img/alia.jpg'),
          thumb: require('../../img/alia.jpg'),
        },
        {
          image: require('../../img/alia.jpg'),
          thumb: require('../../img/alia.jpg'),
        },
        {
            image: require('../../img/alia.jpg'),
            thumb: require('../../img/alia.jpg'),
          },
          {
              image: require('../../img/alia.jpg'),
              thumb: require('../../img/alia.jpg'),
            },
            {
              image: require('../../img/alia.jpg'),
              thumb: require('../../img/alia.jpg'),
            },
            {
              image: require('../../img/alia.jpg'),
              thumb: require('../../img/alia.jpg'),
            },
            {
                image: require('../../img/alia.jpg'),
                thumb: require('../../img/alia.jpg'),
              },
              {
                  image: require('../../img/alia.jpg'),
                  thumb: require('../../img/alia.jpg'),
                },
                {
                  image: require('../../img/alia.jpg'),
                  thumb: require('../../img/alia.jpg'),
                },
                {
                  image: require('../../img/alia.jpg'),
                  thumb: require('../../img/alia.jpg'),
                },
                {
                    image: require('../../img/alia.jpg'),
                    thumb: require('../../img/alia.jpg'),
                  },
                  {
                      image: require('../../img/alia.jpg'),
                      thumb: require('../../img/alia.jpg'),
                    },
                    {
                      image: require('../../img/alia.jpg'),
                      thumb: require('../../img/alia.jpg'),
                    },
                    {
                      image: require('../../img/alia.jpg'),
                      thumb: require('../../img/alia.jpg'),
                    },
                    {
                        image: require('../../img/alia.jpg'),
                        thumb: require('../../img/alia.jpg'),
                      },
                      {
                          image: require('../../img/alia.jpg'),
                          thumb: require('../../img/alia.jpg'),
                        },
                        {
                          image: require('../../img/alia.jpg'),
                          thumb: require('../../img/alia.jpg'),
                        },
                        {
                          image: require('../../img/alia.jpg'),
                          thumb: require('../../img/alia.jpg'),
                        },
  ];
class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return (

            <Gallery backgroundColor="" style={{marginBottom:100}} data={data}/>
        );
    }
}

export default withRedux(SettingsScreen);
