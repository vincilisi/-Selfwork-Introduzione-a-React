import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function Detail() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPostDetail = async () => {
            try {
                // Fetch post details
                const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                if (!postResponse.ok) {
                    throw new Error('Post non trovato')
                }
                const postData = await postResponse.json()
                setPost(postData)

                // Fetch comments for this post
                const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                if (!commentsResponse.ok) {
                    throw new Error('Errore nel caricamento dei commenti')
                }
                const commentsData = await commentsResponse.json()
                setComments(commentsData)

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPostDetail()
    }, [id])

    if (loading) {
        return (
            <div className="detail-page">
                <div className="loading-spinner">⏳ Caricamento dettagli...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="detail-page">
                <div className="error-message">❌ {error}</div>
                <Link to="/posts" className="back-btn">← Torna ai Posts</Link>
            </div>
        )
    }

    return (
        <div className="detail-page">
            <Link to="/posts" className="back-btn">← Torna ai Posts</Link>

            <div className="post-detail">
                <div className="post-header">
                    <span className="post-badge">Post #{post.id}</span>
                    <h1 className="detail-title">{post.title}</h1>
                </div>

                <div className="post-content">
                    <p>{post.body}</p>
                </div>

                <div className="comments-section">
                    <h2 className="comments-title">💬 Commenti ({comments.length})</h2>
                    <div className="comments-list">
                        {comments.map(comment => (
                            <div key={comment.id} className="comment-card">
                                <div className="comment-header">
                                    <strong className="comment-name">{comment.name}</strong>
                                    <span className="comment-email">📧 {comment.email}</span>
                                </div>
                                <p className="comment-body">{comment.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
