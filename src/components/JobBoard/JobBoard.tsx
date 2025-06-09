import { useState, useEffect } from 'react'

import './style.css'

interface Post {
    id: number
    title: string
    by: string
    time: number
    url?: string
}

const MAX = 6

export default function App() {
    const url = 'https://hacker-news.firebaseio.com/v0/jobstories.json'
    const postUrl = 'https://hacker-news.firebaseio.com/v0/item/'

    const [posts, setPosts] = useState<Post[]>([])
    const [postIds, setPostsIds] = useState<number[]>([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        if (postIds.length) {
            fetchPosts(0, MAX)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postIds])

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (page > 0) {
            console.log(page)
            fetchPosts(page, MAX)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    async function fetchPosts(start = 0, max = MAX) {
        const awaitAll = postIds
            .slice(start, start + max)
            .map(async (postId) => {
                try {
                    const response = await fetch(`${postUrl}${postId}.json`)
                    return response.json()
                } catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message)
                    } else {
                        console.error('An unknown error occurred')
                    }
                    return null
                }
            })

        Promise.all(awaitAll).then((values) => {
            setPosts([...posts, ...values])
        })
    }

    async function fetchData() {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }

            const json = await response.json()
            setPostsIds(json)
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
            } else {
                console.error('An unknown error occurred')
            }
        }
    }

    return (
        <section className="job-board">
            {posts.map(({ title, by, time, id, url }) => {
                return (
                    <div key={id} className="job-card" role="listitem">
                        <h3>
                            {url ? (
                                <a href={url} target="_blank" rel="noopener">
                                    {title}
                                </a>
                            ) : (
                                title
                            )}
                        </h3>
                        <p>
                            By {by} &middot;{' '}
                            {new Date(time * 1000).toLocaleString()}
                        </p>
                    </div>
                )
            })}
            {page < postIds.length - 1 ? (
                <button
                    className="load-more"
                    onClick={() => setPage(page + MAX)}
                >
                    Load more jobs
                </button>
            ) : null}
        </section>
    )
}
