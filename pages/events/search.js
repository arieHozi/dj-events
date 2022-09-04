/* eslint-disable @next/next/no-html-link-for-pages */
import qs from 'qs'
import { Layout } from "@/components/Layout";
import EventItem from "@/components/EventItem"
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
import Link from 'next/link'

export default function SearchPage({ events }) {
  const router = useRouter();
  console.log(events);// this we will see on the dev tools console
  return (
    <Layout title="Search Results" >
      <Link href='/events'>Go back</Link>
      <h1>Search Results for {router.query.term}</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}
      {events.map(event => (<EventItem key={event.id} event={event} />))
      }
    </Layout >
  )
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { vanue_contains: term }
      ]
    }
  })

  const res = await fetch(`${API_URL}/events?${query}`)
  const events = await res.json();

  return {
    props: { events },
  }
}
