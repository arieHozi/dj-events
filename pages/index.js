/* eslint-disable @next/next/no-html-link-for-pages */
import { Layout } from "@/components/Layout";
import EventItem from "@/components/EventItem"
import { API_URL } from '@/config/index';
import Link from 'next/link'

export default function HomePage({ events }) {
  console.log(events);// this we will see on the dev tools console
  return (
    <Layout title="Upcoming Events" >
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}
      {events.map(event => (<EventItem key={event.id} event={event} />))
      }
      {events.length > 0 && (
        <Link href='/events'>
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout >
  )
}

export async function getStaticProps() {
  debugger;
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=1`)
  const events = await res.json();
  console.log(res); //come from server so we will see it in rerminal first
  return {
    props: { events },
    revalidate: 1,
  }
}
