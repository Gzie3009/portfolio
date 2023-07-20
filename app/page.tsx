import Header from '@/components/header/header';
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Mrinmoy Saikia Portfolio Website',
  description:"This is the portfolio website which belongs to Mrinmoy Saikia who is a full stack developer with expertise in frontend development"
}
 
export default function Home() {
  return (
    <>
      <main className="">
        <Header/>
      </main>
    </>
  );
}
