import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from './Sections';

import Nav from './Components/Nav';

const App = () => (
  <main className="relative ">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="padding">
        <PopularProducts/>
      </section>
      <section className="padding">
        <SuperQuality/>
      </section>
      <section className="padding-x padding-y">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/> 
      </section>
      <section className="padding bg-pale-blue">
        <CustomerReviews/> 
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        <Subscribe/>
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer/> 
      </section>
  </main>
)

export default  App; 
