import React from 'react';
import styles from './Home.module.css';

import PostForm from '../../components/Post/PostForm';
import Post from '../../components/Post/Post';

const POSTS = [
    {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "First post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "Hello my name is Christian Lopez",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my third post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my fourth post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "First post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "Hello my name is Christian Lopez",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my third post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my fourth post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "First post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "Hello my name is Christian Lopez",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my third post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my fourth post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "First post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "Hello my name is Christian Lopez",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my third post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },
      {
        imgSource: "",
        imgAlt: "Christian's profile picture",
        postText: "This is my fourth post",
        username: "@clopez",
        profileName: "Christian Lopez",
        date: "30 March 2023",
        isVerified: "true"
      },

];
export default function Home() {
    return (
        <div className={styles['home-container']}>
            <div className={styles['home-header']}>
            <h1>Home</h1>
            </div>
            <PostForm/>
            <ol className={styles['home-post-feed-container']}>
            {
            POSTS.map((post, idx) => (
             <Post 
                key={idx}
                imageSource={post.imageSource}
                imgAlt={post.imgAlt}
                postText={post.postText}
                username={post.username}
                profileName={post.profileName}
                date={post.date}
                
            />
            ))
            }
            </ol>
        </div>
    );
    }