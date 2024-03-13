// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Kyler",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "bento", // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: "InsertYourAPIKeyHere123456", // Write here your API Key
  weatherIcons: "OneDark", // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: "F", // 'F', 'C'
  language: "en", // More languages in https://openweathermap.org/current#multi

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: "37.775",
  defaultLongitude: "-122.419",

  // Autochange
  autoChangeTheme: false,

  // Autochange by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: "18:30",
  hourDarkThemeInactive: "07:00",

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "5",
      name: "WGU",
      icon: "graduation-cap",
      link: "https://my.wgu.edu",
    },
    {
      id: "4",
      name: "Twitch",
      icon: "twitch",
      link: "https://www.twitch.tv/",
    },
    {
      id: "1",
      name: "Mail",
      icon: "mail",
      link: "https://mail.protonmail.com/",
    },
    {
      id: "6",
      name: "Netflix",
      icon: "tv-2",
      link: "https://www.netflix.com/",
    },
    {
      id: "3",
      name: "Anime",
      icon: "tv",
      link: "https://9animetv.to/",
    },
    {
      id: "2",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Rocket Language",
          link: "https://app.rocketlanguages.com/members/courses",
        },
        {
          name: "Duolingo",
          link: "https://www.duolingo.com/learn",
        },
        {
          name: "Todaii",
          link: "https://easyjapanese.net/",
        },
        {
          name: "Drops",
          link: "https://app.languagedrops.com/",
        },
      ],
    },
    {
      icon: "coffee",
      id: "2",
      links: [
        {
          name: "Hacker News",
          link: "https://news.ycombinator.com/",
        },
        {
          name: "Jira",
          link: "https://id.atlassian.com/login?application=jira",
        },
        {
          name: "Design Patterns",
          link: "https://refactoring.guru/design-patterns/go",
        },
        {
          name: "Cheat Sheet",
          link: "https://cheat.sh/",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "binary",
      id: "1",
      links: [
        {
          name: "Spotify",
          link: "https://www.spotify.com",
        },
        {
          name: "Reddit",
          link: "https://www.reddit.com",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Rust",
          link: "https://www.reddit.com/r/rust/",
        },
        {
          name: "Go",
          link: "https://www.reddit.com/r/golang/",
        },
      ],
    },
  ],
};
