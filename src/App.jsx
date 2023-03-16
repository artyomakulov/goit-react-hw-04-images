import React, { Component } from 'react';
import fetchImages from './components/services/serviceAPI'
import css from 'App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { MagnifyingGlass } from  'react-loader-spinner'


export class App extends Component {
 state = {
   searchingName:'',
   images: null,
   numberPage: 1,
   largeImgForModal:'',
   showModal:false,
   spinerView: false
}

 componentDidUpdate (prevState, prevProps) { 

 if (prevProps.searchingName !== this.state.searchingName) {
      this.setState({spinerView: true}) 
      fetchImages(this.state.searchingName, 1)
      .then(res => res.json())
      .then(imagesRender => this.setState({images: imagesRender.hits, numberPage: 1,  spinerView: false })); 
  } 
  window.addEventListener('keydown', this.handleKeyDown);
}

  onButtonClikRender = (e) => {
      const searchName = this.state.searchingName;
      const searchPage = this.state.numberPage + 1; 

    this.setState({spinerView: true}) 
     fetchImages(searchName, searchPage)
      .then(res => res.json())
      .then((imagesNext) => (this.setState({images: [...this.state.images, ...imagesNext.hits], 
              numberPage: searchPage, spinerView: false}) )
      );   
  }

  handleForSubmit = (searchingName) => {   
    this.setState({searchingName})
  }

  onImageClick = e => { 
    const stateForBigImg = this.state.images
    this.setState({largeImgForModal: (stateForBigImg.find(image => image.id === Number(e.currentTarget.id))).largeImageURL,
    showModal: true})  
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
 

  render () {
    const {searchingName, images, spinerView, showModal, largeImgForModal} = this.state;
  
    return (
      <div className={css.App}>

      <Searchbar        
       onSubmit={this.handleForSubmit}></Searchbar>
      
      <ImageGallery 
      value={searchingName} 
      renderArray={images} 
      onClick={this.onImageClick}/>

      {(spinerView) && 
        <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#3f51b5'
      />}  

      {images !== null && 
      <Button onClick={this.onButtonClikRender} />}
      {showModal &&
      <Modal 
      imageForModal={largeImgForModal} 
      onClose={this.toggleModal}/>}

      </div>
    );
  }
};
