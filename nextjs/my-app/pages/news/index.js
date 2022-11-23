// our-domain.com/news

import Link from 'next/link'

function NewsPage() {
    return(
        <>
             <ul>
                <li><Link href="/news/detail">details</Link></li>
                <li><a href="/news/detail2">detail1</a></li>
            </ul>
        </>
    )
}

export default NewsPage