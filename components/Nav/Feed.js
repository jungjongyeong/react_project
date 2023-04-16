import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post'
import db from '../../firebase'
import QuaraBox from './QuaraBox'


function Feed() {
    const [posts, setPosts] = useState([]);
    /* 시간따라 올라온 post사진들을 올리는 기능 */
    useEffect(() => {
        db.collection("questions").orderBy('timestemp', 'desc')
            .onSnapshot(snapshot => setPosts(snapshot.docs.map(
                (doc) => (({
                    id: doc.id, //데이터베이스의 id
                    question: doc.data() //데이터베이스의 정보들
                }))
            )))
    }, [])
    return (
        <div className='feed'>
            <div className='feed_center'>
                <QuaraBox />
                {posts.map(({ id, question }) => ( //포스트를 맵핑해서 뿌려주는 기능이다.
                    <Post key={id}
                        Id={id}
                        image={question.imageUrl}
                        question={question.question}
                        timestemp={question.timestemp}
                        quaraUser={question.user} />
                ))}
            </div>
        </div>
    )
}

export default Feed
