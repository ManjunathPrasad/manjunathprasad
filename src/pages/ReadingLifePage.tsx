import Layout from "../components/layout/Layout";

import ReadingLifeHero from "../components/ReadingLife/ReadingLifeHero";
import CurrentlyReading from "../components/ReadingLife/CurrentlyReading";
import InfiniteBookshelf from "../components/ReadingLife/InfiniteBookShelf";
import CommonplaceBook from "../components/ReadingLife/CommonplaceBook";
import FavoriteAuthors from "../components/ReadingLife/FavoriteAuthors";
// import ReadingTimeline from "../components/ReadingLife/ReadingTimeline";
import QuoteOfTheDay from "../components/ReadingLife/QuoteOfTheDay";

export default function ReadingLifePage() {
    return (
        <Layout>
            <div className="bg-white">

                <ReadingLifeHero />

                <CurrentlyReading />

                <InfiniteBookshelf />

                <CommonplaceBook />

                <FavoriteAuthors />

                {/* <ReadingTimeline /> */}

                <QuoteOfTheDay />

            </div>
        </Layout>
    );
}