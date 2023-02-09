export interface ICharacter {
  id: number;
  name: string;
  fullname: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
  };
  image: string;
  description: string;
}

export const characters: ICharacter[] = [
  {
    id: 1,
    name: "Ironman",
    fullname: "Tony Stark",
    powerstats: {
      intelligence: "100",
      strength: "85",
      speed: "58",
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg",
    description:
      "Tony Stark is the wealthy son of industrialist and weapons manufacturer Howard Stark and his wife, Maria. Tony grew up a genius with a brilliant mind for technology and inventions and, naturally, followed in his father’s footsteps, inheriting Stark Industries upon his parents’ untimely death. Tony designed many weapons of war for Stark Industries, far beyond what any other company was creating, while living the lifestyle of a bon vivant.",
  },
  {
    id: 2,
    name: "Scarlet Witch",
    fullname: "Wanda Maximoff",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "29",
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/444.jpg",
    description:
      "Although much of the Scarlet Witch’s true origins remain elusive to her thanks to manipulations by others, she can still recall her early days as a child with her twin brother Pietro. The two lived on Wundagore Mountain in Eastern Europe, believing themselves born as mutants to a Romani couple named the Maximoffs. Given the name Wanda, she lived for a short time in childish innocence until local troubles involving her parents separated her and her brother from them and forced her to hide her growing powers.",
  },
  {
    id: 3,
    name: "Gamora",
    fullname: "Gamora Zen Whoberi Ben Titan",
    powerstats: {
      intelligence: "75",
      strength: "85",
      speed: "42",
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/65.jpg",
    description:
      "After seeing the Zen-Whoberi people nearly completely wiped from existence by the Badoon, Thanos took the lone survivor and decided to turn her into the deadliest woman in the universe. That woman is Gamora, an incredibly adept student in the art of combat, war, and death, who has done both evil and good during her galaxy-wide travels. Among her victories: keeping reality safe alongside Adam Warlock, Infinity Watch, and the Guardians of the Galaxy, her current team-turned-family.",
  },
  {
    id: 4,
    name: "Doctor Strange",
    fullname: "Stephen Strange",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "12",
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/55.jpg",
    description:
      "Recognized the world over as one of the most brilliant neurosurgeons, Stephen Strange’s arrogance and self-centered nature grew alongside his skill until his ego far outweighed his career, proceeding to close himself off from only the most wealthy and influential patients. Everything changed for the man one fateful night when a near-fatal car crash left Strange with severely damaged nerves in both hands and a diagnosis of never being able to operate again.",
  },
  {
    id: 5,
    name: "Hulk",
    fullname: "Bruce Banner",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "63",
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/1342.jpg",
    description:
      "The child of an abusive father, Bruce Banner grew up shy and introverted, yet a scientific genius. As a young man, thanks to his standout work in the field of nuclear physics, he attracted the attention of the U.S. Army who wanted to adapt his theories for weaponry. Banner resisted such notions, but failed attempts at landing steady work convinced him to accept a position at a federal nuclear research facility at a missile base in the New Mexico desert.",
  },
  {
    id: 6,
    name: "Thor",
    fullname: "Thor Odinson",
    powerstats: {
      intelligence: "69",
      strength: "100",
      speed: "83",
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg",
    description:
      "Thor was born to the King of the Asgardian Gods, Odin Borson, and the Earth Goddess Gaea. He grew up in Asgard under Odin's tutelage and trained in his footsteps to one day lead Asgard. Besides Odin, his stepmother Frigga and his adopted brother Loki are the only family he know, alongside his best friends Sif, Balder, and the Warriors Three.",
  },
];
