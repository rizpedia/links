import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import Image from 'next/image'

import links from "../data/links";
import logo from "../public/logo.webp";
export default function Home() {
  return (
    <>
      <Head>
        <title>Rizkirmdhn Links</title>
        <meta name="title" content="Rizkirmdhn Links" />
        <meta name="author" content="Rizkirmdhn" />
        <meta
          name="description"
          content="Rizkirmdhn Links"
        />
        <meta
          name="keywords"
          content="Rizkirmdhn, Rizpedia, NAS Rizkirmdhn, Link Tree Rizkirmdhn"
        />
        <link rel="canonical" href="https://rizpedia.my.id" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rizpedia.my.id" />
        <meta property="og:title" content="Rizkirmdhn" />
        <meta
          property="og:description"
          content="Rizkirmdhn Links"
        />
        <meta property="og:image" content="./website.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rizpedia.my.id" />
        <meta property="twitter:title" content="Rizkirmdhn" />
        <meta
          property="twitter:description"
          content="Rizkirmdhn Links"
        />
        <meta property="twitter:image" content="./website.png" />
      </Head>

      <nav className="navbar navbar-expand-lg my-3">
        <div className="content container d-flex justify-content-between">
          <div className="d-flex justify-content-center align-items-center">
            <Image src={logo} className="logo img-fluid mx-2" alt="Logo" />
            <Link className="navbar-brand" href="/">
              Rizkirmdhn
            </Link>
          </div>
          {/* <button className="btn navbar-btn">Hello</button> */}
        </div>
      </nav>

      <main className="mt-4">
        <div className="content container">
          <div className="row d-flex justify-content-center">
            {links.map((item) => {
              return (
                <div key={item.id} className="col-md-4  my-3">
                  <div className="cards-wrap">
                    <Link href={item.url} rel="noreferrer">
                      <div className="cards p-3 d-flex justify-content-center">
                        <div className="cards-content">
                          <Image
                            src={item.img}
                            className="img-fluid cards-img"
                            alt=""
                          />
                          <h3 className="my-2 cards-name">{item.name}</h3>
                          <p className="text-muted cards-about">{item.about}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
