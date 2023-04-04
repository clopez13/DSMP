import React, {useState} from  'react' ;
import styles from  './Post.module.css' ;
import {SAMPLE_AVATAR, POST_COMMENTS, POST_FAVORITE,POST_SHARE} from '../../icons/PostIcons'

export default function Post(
    {
        imgSource,
        imgAlt,
        postText,
        username,
        profileName,
        date
      }
) {
    const [shares, setShares] = useState(0);
    const [likes, setLikes] = useState(0);
    const [replies, setReplies] = useState(0);

    return (
            <div className={styles['post-container']}>
              <img src={imgSource} alt={imgAlt} />
              <div className={styles['post-content']}>
                <div className={styles['post-header']}>
                  <div className= {styles['post-username']}>
                    <h1>{profileName}</h1>
                  </div>
                  <p className={styles['post-gray']}>{username}</p>
                
                  <p className={styles['post-gray']}> {date}</p>
                  
                </div>
                <p>{postText}</p>
                <div className={styles['post-interactions']}>
                <div className={styles['post-interaction']}>
                    {POST_COMMENTS}
                    {replies}
                  </div>
                  <div className={styles['post-interaction']}>
                    {POST_SHARE}
                    {shares}
                  </div>
                  <div className={styles['post-interaction']}>
                    {POST_FAVORITE}
                    {likes}
                  </div>
                </div>
              </div>
            </div>
          );
        }
