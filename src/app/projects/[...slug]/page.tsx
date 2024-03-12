type detailProjectPageProps = {
    /* params: { slug: string } // kalau string biasa, kayak cuman 1 url untuk [slug] */
    params: { slug: string[] } // string array alias banyak url dijadikan 1 untuk [...slug]
}

export default function DetailProjectPage(props: detailProjectPageProps) {
    const { params } = props;
    return (
        <div>
            {params.slug && <>
                <h1>{params.slug[0]}</h1>
                <h2>{params.slug[1]}</h2>
            </>}
        </div>
    )
}