import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { listPosts } from '../src/graphql/queries'

export default function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const response = await API.graphql({
            query: listPosts,
        })
        setPosts(response.data.listPosts.items)
    }
    return (
        <>
             <div>
            <h1 className="text-6xl font-bold underline">My Posts:</h1>

        </div>
            <div className={'items-center'}>
                {
                    posts.map((post, index) => (
                        <p key={post.id}>{post.title}</p>
                    ))
                }
            </div>

        </>


    )
}
