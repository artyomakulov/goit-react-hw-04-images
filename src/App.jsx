import React, { useEffect, useState } from 'react';
import fetchImages from './components/services/serviceAPI'
import css from 'App.module.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { MagnifyingGlass } from  'react-loader-spinner'


export function App() {
  const [searchingName, setSearchingName] = useState('');
  const [images, setImages] = useState(null);
  const [numberPage, setNumberPage] = useState(1);
  const [largeImgForModal, setLargeImgForModal] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [spinerView, setSpinerView] = useState(false);


  useEffect(() => {
    if (!searchingName) {
      return
    }
    setSpinerView(true)
    fetchImages(searchingName, 1)
    .then(res => res.json())
    .then(imagesRender => setImages(imagesRender.hits), setNumberPage(1), setSpinerView(false));     ////////////////////
  }, [searchingName])

  const onButtonClikRender = (e) => {
    // const searchName = searchingName;
    const searchPage = numberPage + 1; 

    setSpinerView(true) 
   fetchImages(searchingName, searchPage)
    .then(res => res.json())
    .then((imagesNext) => (setImages([...images, ...imagesNext.hits], 
      setNumberPage(searchPage), setSpinerView(false)) )
    );   
}

const handleForSubmit = (searchingName) => {   
  setSearchingName(searchingName)
}

const onImageClick = e => { 
  setLargeImgForModal(images.find(image => image.id === Number(e.currentTarget.id)).largeImageURL,
  setShowModal(true))  
}

const toggleModal = () => {
  setShowModal((showModal ) => ({
    showModal: !showModal,
  }));
};


  return (

    <div className={css.App}>

    <Searchbar        
     onSubmit={handleForSubmit}></Searchbar>
    
    <ImageGallery 
    value={searchingName} 
    renderArray={images} 
    onClick={onImageClick}/>

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
    <Button onClick={onButtonClikRender} />}
    {showModal &&
    <Modal 
    imageForModal={largeImgForModal} 
    onClose={toggleModal}/>}

    </div>
  );

}

  