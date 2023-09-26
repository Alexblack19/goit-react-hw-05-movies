import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notiflix from 'notiflix';
import { useState, useEffect, useCallback } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { getAllPhoto, NUM_REQUESTED_PHOTOS } from '../api/image-api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export function App() {
  const [dataPhoto, setDataPhoto] = useState([]);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [photoTag, setPhotoTag] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentLargeImageUrl, setCurrentLargeImageUrl] = useState('');
  const [currentImageTags, setCurrentImageTags] = useState('');
  const [currentHits, setCurrentHits] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  const fetchPhoto = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getAllPhoto(photoTag, page);
      setDataPhoto(prevDataPhoto => [...prevDataPhoto, ...data.hits]);
      setCurrentHits(NUM_REQUESTED_PHOTOS * page);
      setTotalHits(data.totalHits);
      if (!data.hits.length) {
        notificationTry();
      }
    } catch (error) {
      notificationCatch(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [photoTag, page]);

  useEffect(() => {
    if (!photoTag) return;
    fetchPhoto();
  }, [photoTag, fetchPhoto]);

  useEffect(() => {
    if (page === 1) return;
    function smoothScrollGallery() {
      window.scrollBy({
        top: window.innerHeight * 0.9,
        behavior: 'smooth',
      });
    }
    smoothScrollGallery();
  }, [dataPhoto, page]);

  const handleFormSubmit = photoTag => {
    setPhotoTag(photoTag);
    setPage(1);
    setDataPhoto([]);
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  function notificationTry() {
    Notiflix.Notify.warning(
      'Sorry, there are no images matching your search query. Please try again.',
      {
        position: 'center-center',
        fontSize: '18px',
        cssAnimationStyle: 'zoom',
        cssAnimationDuration: 1000,
        width: '380px',
      }
    );
  }

  function notificationCatch(error) {
    Notiflix.Notify.warning(error, {
      position: 'center-center',
      fontSize: '16px',
      width: '340px',
    });
  }

  const openModal = e => {
    setCurrentLargeImageUrl(e.target.dataset.large);
    setCurrentImageTags(e.target.alt);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <GlobalStyle />
      <Searchbar onSubmit={handleFormSubmit} />
      {dataPhoto.length > 0 && (
        <ImageGallery photos={dataPhoto} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {showModal && (
        <Modal
          imageUrl={currentLargeImageUrl}
          imageTags={currentImageTags}
          onClose={toggleModal}
        />
      )}
      {dataPhoto.length > 0 && currentHits <= totalHits && (
        <Button handleLoadMore={handleLoadMore} />
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
}
