import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

export default class PhotoCarousel extends Component {
  render() {
    const images = [
      {
        original: 'https://res.cloudinary.com/ac31624/image/upload/v1554845911/combo/combo_plate_3_u3uuvo.jpg',
        thumbnail: 'https://res.cloudinary.com/ac31624/image/upload/v1554845911/combo/combo_plate_3_u3uuvo.jpg'
      },
      {
        original: 'https://res.cloudinary.com/ac31624/image/upload/v1554790461/combo/potsticker2_ebukbe.jpg',
        thumbnail: 'https://res.cloudinary.com/ac31624/image/upload/v1554790461/combo/potsticker2_ebukbe.jpg'
      },
      {
        original: 'https://res.cloudinary.com/ac31624/image/upload/v1554790464/combo/egg_rolls_nxdv96.jpg',
        thumbnail: 'https://res.cloudinary.com/ac31624/image/upload/v1554790464/combo/egg_rolls_nxdv96.jpg'
      },
      {
        original: 'https://res.cloudinary.com/ac31624/image/upload/v1554790463/combo/potsticker1_julqgk.jpg',
        thumbnail: 'https://res.cloudinary.com/ac31624/image/upload/v1554790463/combo/potsticker1_julqgk.jpg'
      },
      {
        original: 'https://res.cloudinary.com/ac31624/image/upload/v1554790467/combo/combo_plate_1_kdefwv.jpg',
        thumbnail: 'https://res.cloudinary.com/ac31624/image/upload/v1554790467/combo/combo_plate_1_kdefwv.jpg'
      },
      {
        original: 'https://res.cloudinary.com/ac31624/image/upload/v1554790458/combo/party_salt_pepper_shrimp_z37bxt.jpg',
        thumbnail: 'https://res.cloudinary.com/ac31624/image/upload/v1554790458/combo/party_salt_pepper_shrimp_z37bxt.jpg'
      },
    ];

    return (
      <ImageGallery 
        id="carousel-overrides"
        items={images}
        showThumbnails={true}
        infinite={true}
        showFullscreenButton={false}
        autoPlay={true}
        slideInterval={10000}
        slideDuration={1000}
        showPlayButton={false}
      />
    )
  }
}