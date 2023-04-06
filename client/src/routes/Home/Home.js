import React, {useState,useEffect} from 'react';
import styles from './Home.module.css';


import PostForm from '../../components/Post/PostForm';
import Post from '../../components/Post/Post';
import PostService from '../../services/post.services';


// const POSTS = [
//     {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "First post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "Hello my name is Christian Lopez",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my third post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my fourth post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "First post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "Hello my name is Christian Lopez",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my third post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my fourth post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "First post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "Hello my name is Christian Lopez",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my third post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my fourth post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "First post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "Hello my name is Christian Lopez",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my third post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },
//       {
//         imgSource: "",
//         imgAlt: "Christian's profile picture",
//         postText: "This is my fourth post",
//         username: "@clopez",
//         profileName: "Christian Lopez",
//         date: "30 March 2023",
//         isVerified: "true"
//       },

// ];
export default function Home() {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
      async function fetchPosts() {
        try {
          const response = await PostService.getAll();
          setPosts(response.data);
        } catch (error) {
          console.error(error);
          // Handle the error here, e.g. set an error state
        }
      }
      fetchPosts();
    }, []);
    





    return (
        <div className={styles['home-container']}>
            <div className={styles['home-header']}>
            <h1>Home</h1>
            </div>
            <PostForm/>
            <ol className={styles['home-post-feed-container']}>
            {
            posts.map((post, idx) => (
             <Post 
                key={idx}
                imgsource={post.imgsource}
                imgalt={post.imgalt}
                posttext={post.posttext}
                profileusername={post.profileusername}
                profilename={post.profilename}
                createdAt={new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
                
                
            />
            ))
            }
            </ol>
        </div>
    );
    }