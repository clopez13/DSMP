import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './PostForm.module.css';
import { useForm } from "react-hook-form";
import PostService from '../../services/post.services';


import {IMAGE_ICON, LOCATION_GLOBE_ICON,EMOJI_ICON} from '../../icons/PostFormIcons'
import Avatar from '../Avatar/Avatar';


// temporary placeholder for post form until user profile functionality is created
const PROFILE_NAME = 'Christian Lopez';
const PROFILE_USERNAME = '@clopez';

export default function PostForm(props) {
    const { onChange } = props;
    const [post, setPost] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [imagePreview, setImagePreview] = useState('');

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const postData = {
                imgsource: selectedImage,
                posttext: data.postText,
                profilename: PROFILE_NAME,
                profileusername: PROFILE_USERNAME,
            };
            const response = await PostService.create(postData);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };



    const handleInputChange = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = `${event.target.scrollHeight}px`;
      }

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
        setImagePreview(URL.createObjectURL(file));
      };
    
    const handleImageRemove = () => {
        setSelectedImage('');
        setImagePreview('');
    }


    return(

        <div className={styles['post-form-container']}>
           {/* <div className={styles['post-form-header']}>
            <h1>PostForm</h1>
            </div> */}
            <div className={styles['post-form-main']}>
            <div className={styles['post-form-avatar']}>
            <Avatar/>
            </div>
            <div className={styles['post-form-input']}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("postText", {})}
                 onInput= {handleInputChange}
                 placeholder="What's on your mind?"
                 />
                {selectedImage && (
                <div className={styles['post-form-image-preview']}>
                    <img src={imagePreview} alt="Selected" />
                    <button className={styles['post-form-image-remove-button']} onClick={handleImageRemove}>
                        X
                    </button>
                </div>
                // <img src={imagePreview} alt="Selected image preview" className={styles['post-form-image-preview']} />
                )}
                <div className={styles['post-form-footer']}>
                <div className={styles['post-form-media-container']}>
                <label htmlFor='image-input'>{IMAGE_ICON}</label>
                <input className={styles['post-form-file']} 
                    type="file" 
                    id="image-input"
                    {...register("image")} 
                    onChange={handleImageChange}
                />
                {/* EMOJI AND LOCATION FUNCTIONALITY NOT YET IMPLEMENTED */}
                <label htmlFor='emoji-input'>{EMOJI_ICON}</label>
                <label htmlFor='location-input'>{LOCATION_GLOBE_ICON}</label>
                </div>
                <div className={styles['post-form-button-container']}>
                <input type="submit" className={styles['post-form-button']}/>
                </div>
                </div>
            </form>
            </div>
            </div>
        </div>
    );
}