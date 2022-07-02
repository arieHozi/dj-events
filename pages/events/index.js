/* eslint-disable @next/next/no-html-link-for-pages */
import { Layout } from "@/components/Layout";
import EventItem from "@/components/EventItem"
import { API_URL } from '@/config/index';

export default function EventsPage({ events }) {
  console.log(events);// this we will see on the dev tools console
  return (
    <Layout title="Events" >
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}
      {events.map(event => (<EventItem key={event.id} event={event} />))
      }
    </Layout >
  )
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC`)
  const events = await res.json();
  console.log(events); //come from server so we will see it in rerminal first
  return {
    props: { events },
    revalidate: 1,
  }
}
