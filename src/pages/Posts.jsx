import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Posts() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')

                if (!response.ok) {
                    throw new Error('Errore nel caricamento dei post')
                }

                const data = await response.json()
                setPosts(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (loading) {
        return (
            <div className="posts-page">
                <div className="loading-spinner">⏳ Caricamento posts...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="posts-page">
                <div className="error-message">❌ {error}</div>
            </div>
        )
    }

    return (
        <div className="posts-page">
            <h1 className="page-title">📝 Tutti i Posts</h1>
            <p className="page-subtitle">Clicca su un post per vedere i dettagli</p>

            <div className="posts-grid">
                {posts.map(post => (
                    <Link
                        to={`/posts/${post.id}`}
                        key={post.id}
                        className="post-card-link"
                    >
                        <div className="post-card">
                            <div className="post-id">#{post.id}</div>
                            <h3 className="post-title">{post.title}</h3>
                            <p className="post-body">
                                {post.body.substring(0, 100)}...
                            </p>
                            <div className="read-more">Leggi di più →</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Posts
