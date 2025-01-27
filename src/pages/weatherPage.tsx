import Head from "next/head";
import Image from "next/image";


export default function weatherPage() {
    return(
        <>
            <Head>
                <title>Weather Page</title>
                <meta name="description" content="Fetch Melbourne Weather" />
                <meta name="viewport" content="width=device-width, inital-scale=1" />
            </Head>
            <div>
                <main>
                    <h1>Hello World</h1>
                </main>
            </div>
        </>
    )
}
