/* eslint-disable @next/next/no-html-link-for-pages */

import { Layout } from "@/components/Layout";

export default function HomePage() {
  return (
    <Layout title="Home" >
      <h1>Upcoming events</h1>

    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch()
}
