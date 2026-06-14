import type { Painting } from "../types/Painting";

// Import painting images
import primaveraImg from "../assets/Paintings/primavera.jpg";
import birthOfVenusImg from "../assets/Paintings/the-birth-of-venus.jpg";
import ladyWithErmineImg from "../assets/Paintings/lady-with-an-ermine.jpg";
import lastSupperImg from "../assets/Paintings/the-last-supper.jpg";
import monaLisaImg from "../assets/Paintings/mona-lisa.jpg";
import creationOfAdamImg from "../assets/Paintings/the-creation-of-adam.jpg";
import callingOfSaintMatthewImg from "../assets/Paintings/the-calling-of-saint-matthew.jpg";
import nightWatchImg from "../assets/Paintings/the-night-watch.jpg";
import girlWithPearlImg from "../assets/Paintings/girl-with-a-pearl-earring.jpg";
import impressionSunriseImg from "../assets/Paintings/impression-sunrise.jpg";
import sunflowersImg from "../assets/Paintings/sunflowers.jpg";
import starryNightImg from "../assets/Paintings/the-starry-night.jpg";
import lesDemoisellesImg from "../assets/Paintings/les-demoiselles-davignon.jpg";
import persistenceOfMemoryImg from "../assets/Paintings/the-persistence-of-memory.jpg";
import guernicaImg from "../assets/Paintings/guernica.jpg";
import weepingWomanImg from "../assets/Paintings/the-weeping-woman.jpg";
import swansReflectingImg from "../assets/Paintings/swans-reflecting-elephants.jpg";
import elephantsImg from "../assets/Paintings/the-elephants.jpg";

export const paintings: Painting[] = [
    {
        id: 1,
        title: "Primavera",
        painter: "Botticelli",
        year: "1482",
        artMovement: "Early Renaissance",
        image: primaveraImg,
        description: "A allegorical painting celebrating spring and love."
    },
    {
        id: 2,
        title: "The Birth of Venus",
        painter: "Botticelli",
        year: "1485–1486",
        artMovement: "Early Renaissance",
        image: birthOfVenusImg,
        description: "Depicts the goddess Venus arriving at the shore after her birth."
    },
    {
        id: 3,
        title: "Lady with an Ermine",
        painter: "Leonardo da Vinci",
        year: "1489–1491",
        artMovement: "High Renaissance",
        image: ladyWithErmineImg,
        description: "Portrait of Cecilia Gallerani holding an ermine."
    },
    {
        id: 4,
        title: "The Last Supper",
        painter: "Leonardo da Vinci",
        year: "1495–1498",
        artMovement: "High Renaissance",
        image: lastSupperImg,
        description: "Depicts the scene of the Last Supper of Jesus with his disciples."
    },
    {
        id: 5,
        title: "Mona Lisa",
        painter: "Leonardo da Vinci",
        year: "1503–1519",
        artMovement: "High Renaissance",
        image: monaLisaImg,
        description: "World's most famous portrait, known for the subject's enigmatic smile."
    },
    {
        id: 6,
        title: "The Creation of Adam",
        painter: "Michelangelo",
        year: "1512",
        artMovement: "High Renaissance",
        image: creationOfAdamImg,
        description: "Fresco painting showing God giving life to Adam."
    },
    {
        id: 7,
        title: "The Calling of Saint Matthew",
        painter: "Caravaggio",
        year: "1599–1600",
        artMovement: "Baroque",
        image: callingOfSaintMatthewImg,
        description: "Depicts the moment Jesus calls Matthew to follow him."
    },
    {
        id: 8,
        title: "The Night Watch",
        painter: "Rembrandt",
        year: "1642",
        artMovement: "Dutch Golden Age / Baroque",
        image: nightWatchImg,
        description: "Group portrait of a militia company."
    },
    {
        id: 9,
        title: "Girl with a Pearl Earring",
        painter: "Vermeer",
        year: "1665",
        artMovement: "Dutch Baroque",
        image: girlWithPearlImg,
        description: "Tronie depicting a girl wearing an exotic dress and a pearl earring."
    },
    {
        id: 10,
        title: "Impression, Sunrise",
        painter: "Monet",
        year: "1872",
        artMovement: "Impressionism",
        image: impressionSunriseImg,
        description: "Painting that gave the Impressionist movement its name."
    },
    {
        id: 11,
        title: "Sunflowers",
        painter: "Van Gogh",
        year: "1888",
        artMovement: "Post-Impressionism",
        image: sunflowersImg,
        description: "Series of still life Paintings of sunflowers."
    },
    {
        id: 12,
        title: "The Starry Night",
        painter: "Van Gogh",
        year: "1889",
        artMovement: "Post-Impressionism",
        image: starryNightImg,
        description: "Depicts the view from Van Gogh's asylum room window."
    },
    {
        id: 13,
        title: "Les Demoiselles d'Avignon",
        painter: "Picasso",
        year: "1907",
        artMovement: "Proto-Cubism / Cubism",
        image: lesDemoisellesImg,
        description: "Revolutionary painting that helped birth Cubism."
    },
    {
        id: 14,
        title: "The Persistence of Memory",
        painter: "Dalí",
        year: "1931",
        artMovement: "Surrealism",
        image: persistenceOfMemoryImg,
        description: "Famous for its melting clocks and surreal dreamscape."
    },
    {
        id: 15,
        title: "Guernica",
        painter: "Picasso",
        year: "1937",
        artMovement: "Cubism",
        image: guernicaImg,
        description: "Powerful anti-war painting depicting the bombing of Guernica."
    },
    {
        id: 16,
        title: "The Weeping Woman",
        painter: "Picasso",
        year: "1937",
        artMovement: "Cubism",
        image: weepingWomanImg,
        description: "Continuation of the Guernica theme depicting a woman in anguish."
    },
    {
        id: 17,
        title: "Swans Reflecting Elephants",
        painter: "Dalí",
        year: "1937",
        artMovement: "Surrealism",
        image: swansReflectingImg,
        description: "Double image painting with swans reflecting as elephants."
    },
    {
        id: 18,
        title: "The Elephants",
        painter: "Dalí",
        year: "1948",
        artMovement: "Surrealism",
        image: elephantsImg,
        description: "Depicts elephants with long, spindly legs carrying obelisks."
    }
];