import Head from "next/head";
import Image from "next/image";
import GithubForms from "@/components/forms/githubForms";


export default function githubFormPage() {

    

    return (
    <>
        <Head>
            <title>Github Form Page</title>
            <meta name="description" content="Search Github User" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div>
            <main>
                <GithubForms/>
            </main>
            
        </div>
    </>
    )
}