import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

const Search = ({ searchResults }) => {
  const router = useRouter();
  //   console.log(router.query);

  //   es6 destructuring
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd-MMMM-yyyy");
  const formattedEndDate = format(new Date(endDate), "dd-MMMM-yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-sm">
            500+ stays - {range} - for {noOfGuests} Guests
          </p>
          <h1 className="font-bold mb-6 text-3xl mt-2">Stays in {location}</h1>
          <div className="hidden lg:inline-flex mb-3 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">cancellation flexibility</p>
            <p className="button">Wifi</p>
            <p className="button">Type of place</p>
            <p className="button">Air Conditioning</p>
            <p className="button">Dedicated Workplace</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
