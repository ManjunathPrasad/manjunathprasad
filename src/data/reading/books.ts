import type { Book } from "../../types/Book";

// Import all book covers
import thePlagueCover from "../../assets/Books/the-plague.jpg";
import metamorphosisCover from "../../assets/Books/metamorphosis.jpg";
import crimeAndPunishmentCover from "../../assets/Books/crime-and-punishment.jpg";
import meditationsCover from "../../assets/Books/meditations.jpg";
import brothersKaramazovCover from "../../assets/Books/brothers-karamazov.jpg";

// New book covers
import warAndPeaceCover from "../../assets/Books/war-and-peace.jpg";
import freedomAtMidnightCover from "../../assets/Books/freedom-at-midnight.jpg";
import anjuMalligeCover from "../../assets/Books/anju-mallige.jpg";
import greatExpectationsCover from "../../assets/Books/great-expectations.jpg";
import threeMusketeersCover from "../../assets/Books/three-musketeers.jpg";
import poorFolkCover from "../../assets/Books/poor-folk.jpg";
import strangerCover from "../../assets/Books/stranger.jpg";
import madumagaluCover from "../../assets/Books/madumagalu.jpg";
import lankeshSamagraCover from "../../assets/Books/lankesh-samagra.jpg";
import annaKareninaCover from "../../assets/Books/anna-karenina.jpg";
import tughlakCover from "../../assets/Books/tughlak.jpg";
import divyaCover from "../../assets/Books/divya.jpg";
import oliverTwistCover from "../../assets/Books/oliver-twist.jpg";
import animalFarmCover from "../../assets/Books/animal-farm.jpg";
import idiotCover from "../../assets/Books/idiot.jpg";
import mansSearchCover from "../../assets/Books/mans-search.jpg";
import mahapalayanaCover from "../../assets/Books/mahapalayana.jpg";
import karvaloCover from "../../assets/Books/karvalo.jpg";
import discoveryOfIndiaCover from "../../assets/Books/discovery-of-india.jpg";
import hayavadanaCover from "../../assets/Books/hayavadana.jpg";
import bhavaCover from "../../assets/Books/bhava.jpg";
import lesMiserablesCover from "../../assets/Books/les-miserables.jpg";
import nineteenEightyFourCover from "../../assets/Books/1984.jpg";
import trialCover from "../../assets/Books/trial.jpg";
import kanooruCover from "../../assets/Books/kanooru.jpg";
import chidambaraCover from "../../assets/Books/chidambara.jpg";
import samskaaraCover from "../../assets/Books/samskara.jpg";

// New book imports from screenshot
import monkWhoSoldFerrariCover from "../../assets/Books/the-monk-who-sold-his-ferrari.jpg";
import alchemistCover from "../../assets/Books/alchemist.jpg";
import trainToPakistanCover from "../../assets/Books/train-to-pakistan.jpg";
import delhiCover from "../../assets/Books/delhi.jpg";
import timepassCover from "../../assets/Books/timepass.jpg";
import durgaastamaanaCover from "../../assets/Books/durgaastamaana.jpg";
import huliMaavinaMaraCover from "../../assets/Books/huli-maavina-mara.jpg";
import myExperimentsWithTruthCover from "../../assets/Books/my-experiments-with-truth.jpg";
import goneWithTheWindCover from "../../assets/Books/gone-with-the-wind.jpg";

export const Books: Book[] = [
    {
        id: 1,
        title: "The Plague",
        author: "Albert Camus",
        cover: thePlagueCover,
        year: 1947,
        category: "Philosophy",
        completed: true,
        favorite: true,
        quote: "The only means of fighting a plague is common decency.",
        reflection: "A profound exploration of human resilience, morality, and collective responsibility during times of crisis."
    },
    {
        id: 2,
        title: "Metamorphosis",
        author: "Franz Kafka",
        cover: metamorphosisCover,
        year: 1915,
        category: "Literary Fiction",
        completed: true,
        favorite: true,
        reflection: "A haunting examination of alienation, identity, and the fragile nature of human relationships."
    },
    {
        id: 3,
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        cover: crimeAndPunishmentCover,
        year: 1866,
        category: "Psychological Fiction",
        completed: true,
        favorite: true,
        reflection: "An extraordinary journey into guilt, conscience, redemption, and the psychology of moral conflict."
    },
    {
        id: 4,
        title: "Meditations",
        author: "Marcus Aurelius",
        cover: meditationsCover,
        year: 180,
        category: "Stoic Philosophy",
        completed: true,
        favorite: true,
        reflection: "Timeless reflections on discipline, humility, leadership, and living a meaningful life."
    },
    {
        id: 5,
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        cover: brothersKaramazovCover,
        year: 1880,
        category: "Philosophical Fiction",
        completed: true,
        favorite: true,
        quote: "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
        reflection: "A monumental exploration of faith, doubt, freedom, morality, and the complexity of human nature."
    },
    {
        id: 6,
        title: "The Monk Who Sold His Ferrari",
        author: "Robin Sharma",
        cover: monkWhoSoldFerrariCover,
        year: 1997,
        category: "Self-Help",
        completed: false,
        favorite: true,
        reflection: "A fable about fulfilling your dreams and reaching your destiny."
    },
    {
        id: 7,
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: alchemistCover,
        year: 1988,
        category: "Philosophical Fiction",
        completed: false,
        favorite: true,
        quote: "When you want something, all the universe conspires in helping you to achieve it.",
        reflection: "A inspiring story about following your dreams and listening to your heart."
    },
    {
        id: 8,
        title: "Train to Pakistan",
        author: "Khushwant Singh",
        cover: trainToPakistanCover,
        year: 1956,
        category: "Historical Fiction",
        completed: false,
        favorite: true,
        reflection: "A powerful account of the partition of India and its human cost."
    },
    {
        id: 9,
        title: "Delhi: A Novel",
        author: "Khushwant Singh",
        cover: delhiCover,
        year: 1990,
        category: "Historical Fiction",
        completed: false,
        favorite: false,
        reflection: "A sweeping narrative of Delhi's history through multiple generations."
    },
    {
        id: 10,
        title: "Timepass",
        author: "Dinanath Batwal",
        cover: timepassCover,
        year: 2015,
        category: "Memoir",
        completed: false,
        favorite: false,
        reflection: "A reflective journey through life's moments and memories."
    },
    {
        id: 11,
        title: "Durgaastamaana",
        author: "Poornachandra Tejaswi",
        cover: durgaastamaanaCover,
        year: 1975,
        category: "Kannada Novel",
        completed: false,
        favorite: true,
        reflection: "A significant work exploring human-nature relationships."
    },
    {
        id: 12,
        title: "Huli Maavina Mara",
        author: "K. P. Poornachandra Tejaswi",
        cover: huliMaavinaMaraCover,
        year: 1985,
        category: "Kannada Novel",
        completed: false,
        favorite: true,
        reflection: "A nature-centric novel exploring the relationship between humans and the forest."
    },
    {
        id: 13,
        title: "My Experiments with Truth",
        author: "Mahatma Gandhi",
        cover: myExperimentsWithTruthCover,
        year: 1927,
        category: "Autobiography",
        completed: false,
        favorite: true,
        reflection: "An honest account of Gandhi's life and his pursuit of truth and non-violence."
    },
    {
        id: 14,
        title: "Gone with the Wind",
        author: "Margaret Mitchell",
        cover: goneWithTheWindCover,
        year: 1936,
        category: "Historical Fiction",
        completed: false,
        favorite: false,
        reflection: "An epic tale of love, war, and survival during the American Civil War."
    },
    {
        id: 15,
        title: "1984",
        author: "George Orwell",
        cover: nineteenEightyFourCover,
        year: 1949,
        category: "Dystopian Fiction",
        completed: false,
        favorite: true,
        quote: "Big Brother is watching you.",
        reflection: "A chilling vision of totalitarianism and surveillance."
    },
    {
        id: 16,
        title: "War and Peace",
        author: "Leo Tolstoy",
        cover: warAndPeaceCover,
        year: 1869,
        category: "Historical Fiction",
        completed: false,
        favorite: true,
        reflection: "An epic masterpiece exploring Russian society, philosophy, and the human condition."
    },
    {
        id: 17,
        title: "Freedom at Midnight",
        author: "Dominique Lapierre & Larry Collins",
        cover: freedomAtMidnightCover,
        year: 1975,
        category: "History",
        completed: false,
        favorite: false,
        reflection: "A dramatic account of India's independence and partition."
    },
    {
        id: 18,
        title: "Anju Mallige",
        author: "K. S. Narasimhaswamy",
        cover: anjuMalligeCover,
        year: 1942,
        category: "Kannada Poetry",
        completed: false,
        favorite: true,
        reflection: "Classic Kannada love poetry that captures the essence of romance and longing."
    },
    {
        id: 19,
        title: "Great Expectations",
        author: "Charles Dickens",
        cover: greatExpectationsCover,
        year: 1861,
        category: "Classic Fiction",
        completed: false,
        favorite: false,
        reflection: "A coming-of-age story about ambition, class, and personal growth."
    },
    {
        id: 20,
        title: "The Three Musketeers",
        author: "Alexandre Dumas",
        cover: threeMusketeersCover,
        year: 1844,
        category: "Adventure",
        completed: false,
        favorite: false,
        reflection: "A swashbuckling tale of friendship, honor, and adventure."
    },
    {
        id: 21,
        title: "Poor Folk",
        author: "Fyodor Dostoevsky",
        cover: poorFolkCover,
        year: 1846,
        category: "Epistolary Novel",
        completed: false,
        favorite: true,
        reflection: "Dostoevsky's debut novel exploring poverty and human dignity."
    },
    {
        id: 22,
        title: "The Stranger",
        author: "Albert Camus",
        cover: strangerCover,
        year: 1942,
        category: "Philosophical Fiction",
        completed: false,
        favorite: true,
        quote: "I opened myself to the gentle indifference of the world.",
        reflection: "An exploration of absurdism and existential detachment."
    },
    {
        id: 23,
        title: "Malegalalli Madumagalu",
        author: "Kuvempu",
        cover: madumagaluCover,
        year: 1965,
        category: "Kannada Novel",
        completed: false,
        favorite: true,
        reflection: "A significant work in Kannada literature exploring social themes."
    },
    {
        id: 24,
        title: "Lankesh Samagra Kathegalu",
        author: "P. Lankesh",
        cover: lankeshSamagraCover,
        year: 1990,
        category: "Kannada Literature",
        completed: false,
        favorite: true,
        reflection: "The complete works of one of Kannada's most influential writers."
    },
    {
        id: 25,
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        cover: annaKareninaCover,
        year: 1877,
        category: "Literary Fiction",
        completed: false,
        favorite: true,
        reflection: "A tragic masterpiece about love, society, and the human condition."
    },
    {
        id: 26,
        title: "Tughlak",
        author: "Girish Karnad",
        cover: tughlakCover,
        year: 1964,
        category: "Indian Play",
        completed: false,
        favorite: true,
        reflection: "A historical play examining power, idealism, and political failure."
    },
    {
        id: 27,
        title: "Divya",
        author: "U. R. Ananthamurthy",
        cover: divyaCover,
        year: 1998,
        category: "Kannada Novel",
        completed: false,
        favorite: false,
        reflection: "An exploration of spiritual and philosophical themes."
    },
    {
        id: 28,
        title: "Oliver Twist",
        author: "Charles Dickens",
        cover: oliverTwistCover,
        year: 1838,
        category: "Classic Fiction",
        completed: false,
        favorite: false,
        reflection: "A social critique of poverty and child labor in Victorian England."
    },
    {
        id: 29,
        title: "Animal Farm",
        author: "George Orwell",
        cover: animalFarmCover,
        year: 1945,
        category: "Political Satire",
        completed: false,
        favorite: true,
        quote: "All animals are equal, but some are more equal than others.",
        reflection: "An allegorical critique of totalitarianism and political corruption."
    },
    {
        id: 30,
        title: "The Idiot",
        author: "Fyodor Dostoevsky",
        cover: idiotCover,
        year: 1869,
        category: "Philosophical Fiction",
        completed: false,
        favorite: true,
        reflection: "The story of a Christ-like figure navigating a cynical society."
    },
    {
        id: 31,
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        cover: mansSearchCover,
        year: 1946,
        category: "Psychology",
        completed: false,
        favorite: true,
        quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
        reflection: "A profound exploration of finding purpose in suffering."
    },
    {
        id: 32,
        title: "Mahapalayana",
        author: "K. P. Poornachandra Tejaswi",
        cover: mahapalayanaCover,
        year: 2004,
        category: "Kannada Novel",
        completed: false,
        favorite: false,
        reflection: "A philosophical journey exploring existential questions."
    },
    {
        id: 33,
        title: "Karvalo",
        author: "K. P. Poornachandra Tejaswi",
        cover: karvaloCover,
        year: 1980,
        category: "Kannada Novel",
        completed: false,
        favorite: true,
        reflection: "A nature-centric novel about conservation and human-animal relationships."
    },
    {
        id: 34,
        title: "The Discovery of India",
        author: "Jawaharlal Nehru",
        cover: discoveryOfIndiaCover,
        year: 1946,
        category: "History",
        completed: false,
        favorite: true,
        reflection: "A sweeping history of Indian civilization and culture."
    },
    {
        id: 35,
        title: "Hayavadana",
        author: "Girish Karnad",
        cover: hayavadanaCover,
        year: 1971,
        category: "Indian Play",
        completed: false,
        favorite: true,
        reflection: "A play exploring identity, completeness, and the human search for wholeness."
    },
    {
        id: 36,
        title: "Bhava",
        author: "U. R. Ananthamurthy",
        cover: bhavaCover,
        year: 2020,
        category: "Kannada Novel",
        completed: false,
        favorite: false,
        reflection: "An exploration of human emotions and relationships."
    },
    {
        id: 37,
        title: "Les Misérables",
        author: "Victor Hugo",
        cover: lesMiserablesCover,
        year: 1862,
        category: "Historical Fiction",
        completed: false,
        favorite: true,
        quote: "To love another person is to see the face of God.",
        reflection: "An epic story of redemption, justice, and human compassion."
    },
    {
        id: 38,
        title: "The Trial",
        author: "Franz Kafka",
        cover: trialCover,
        year: 1925,
        category: "Absurdist Fiction",
        completed: false,
        favorite: true,
        reflection: "A nightmarish exploration of bureaucratic oppression and existential anxiety."
    },
    {
        id: 39,
        title: "Kanooru Heggaditi",
        author: "Shivaram Karanth",
        cover: kanooruCover,
        year: 1936,
        category: "Kannada Novel",
        completed: false,
        favorite: true,
        reflection: "A classic Kannada novel depicting village life and social change."
    },
    {
        id: 40,
        title: "Chidambara Rahasya",
        author: "K. P. Poornachandra Tejaswi",
        cover: chidambaraCover,
        year: 1985,
        category: "Kannada Novel",
        completed: false,
        favorite: false,
        reflection: "A mystery novel exploring the secrets of nature."
    },
    {
    id: 41,
    title: "Samskaara",
    author: "U. R. Ananthamurthy",
    cover: samskaaraCover,
    year: 1965,
    category: "Kannada Novel",
    completed: false,
    favorite: true,
    reflection: "A groundbreaking novel exploring tradition versus modernity, caste, and cultural identity in rural Karnataka."
}
];