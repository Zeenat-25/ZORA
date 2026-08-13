export type Track = {
  id: string;
  title: string;
  artist: string;
  src: string;
};

export type Channel = {
  id: string;
  name: string;
  tracks: Track[];
};

export const CHANNELS: Channel[] = [
  {
    id: "zora-radio",
    name: "ZORA",
    tracks: [
      {
        id: "1",
        title: "Aaja Piya Tohe Pyar Doon",
        artist: "Lata Mangeshkar",
        src: "/music/Aaja Piya Tohe Pyar Doon  Lata Mangeshkar  R.D. Burman  Majrooh Sultanpuri  Old Is Gold.mp3",
      },
      {
        id: "2",
        title: "Chookar Mere Mann Ko Kiya Tune Kya Ishara",
        artist: "Kishore Kumar",
        src: "/music/Chookar Mere Mann Ko Kiya Tune Kya Ishara  Kishore Kumar  Yaarana 1981 Songs Amitabh Bachchan.mp3",
      },
      {
        id: "3",
        title: "Ek Ajnabee Haseen Se",
        artist: "Kishore Kumar",
        src: "/music/Ek Ajnabee Haseen Se.mp3",
      },
      {
        id: "4",
        title: "Kun Faya Kun",
        artist: "A.R. Rahman",
        src: "/music/Kun Faya Kun Full Video Song.mp3",
      },
      {
        id: "5",
        title: "Lag Ja Gale Ki Phir Ye Haseen Raat Ho Na Ho",
        artist: "Lata Mangeshkar",
        src: "/music/Lag Ja Gale Ki Phir Ye Haseen Raat Ho Na Ho Video Song  Lata Mangeshkar  Woh Kaun Thi Songs.mp3",
      },
      {
        id: "6",
        title: "Mere Mehboob Qayamat Hogi",
        artist: "Kishore Kumar",
        src: "/music/MERE MEHBOOB QAYAMAT HOGI Original Full Song 4K  मेरे महबूब क़यामत किशोर कुमार Mr X In Bombay.mp3",
      },
      {
        id: "7",
        title: "O Mere Dil Ke Chain",
        artist: "Kishore Kumar",
        src: "/music/O Mere Dil Ke Chain  Rajesh Khanna, Tanuja  Mere Jeevan Saathi (1972)  R.D Burman  Kishore Kumar.mp3",
      },
      {
        id: "8",
        title: "Humne Toh Bas Kaliyan Maangi",
        artist: "Hemant Kumar",
        src: "/music/Pyaasa Movie Sad Song - Humne Toh Bas Kaliyan Maangi Kaanto Ka Haar Mila - Hemant Kumar - Guru Dutt.mp3",
      },
      {
        id: "9",
        title: "Unko Bhi Humse Mohabbat Ho Zaroori To Nahin",
        artist: "Unknown",
        src: "/music/Unko Bhi Humse Mohabbat Ho Zaroori To Nahin - उनको भी हमसे मोहब्बत हो ज़रूरी तो नहीं.mp3",
      },
      {
        id: "10",
        title: "Yeh Ratein Yeh Mausam",
        artist: "Kishore Kumar, Asha Bhosle",
        src: "/music/Yeh Ratein Yeh Mausam  Dilli Ka Thug (1958) Nutan  Asha Bhosle  Kishore Kumar Hit Songs.mp3",
      },
      {
        id: "11",
        title: "Yeh Shaam Mastani",
        artist: "Kishore Kumar",
        src: "/music/Yeh Shaam Mastani 4K  Kishore Kumar  Rajesh Khanna  Kati Patang  Classic Bollywood 4K Video Song.mp3",
      },
      {
        id: "12",
        title: "Yeh Jadu Hai Jinn Ka",
        artist: "Male Version",
        src: "/music/YehhJadu Hai Jinn Ka  Full Song  Kahani hamari fasana hamara  Male Version  Star Plus.mp3",
      },
      {
        id: "13",
        title: "Main Zindagi Ka Saath",
        artist: "Mohammed Rafi",
        src: "/music/मैं ज़िन्दगी का साथ Main Zindagi Ka Sath  HD Song- Mohammed Rafi  Dev Anand  Hum Dono 1962.mp3",
      },
    ],
  },
];