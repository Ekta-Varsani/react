// our-domain/news/detail

import { useRouter } from "next/router";

function DetailPage() {
    const router = useRouter();

    const newsId = router.query.newsId;
    console.log(newsId);
    return (
        <>
           <h1>Detail page</h1>
        </>
    );
}

export default DetailPage;
