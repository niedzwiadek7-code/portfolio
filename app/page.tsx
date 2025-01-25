import Navbar from "@/components/Navbar";
import MainSection from "@/components/MainSection";
import {DateRange, Profile, Experience as ExperienceModel, Project, Link, Section} from "@/models";
import About from "@/components/About";
import Experience from "@/components/Experience";
import {Badge} from "@/models/Profile";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Demo = () => {
  const profile = new Profile(
    "Damian",
    "Kliber",
    "Programista Stron Internetowych",
    `
    Jestem programistą z zamiłowaniem do tworzenia schludnych stron internetowych, które są zarówno piękne jak i funkcjonalne. 
    W swojej pracy stawiam na jakość i dbałość o każdy szczegół.
    `,
    {
      linkedin: "https://www.linkedin.com/in/damian-kliber-659847269/",
      github: "https://github.com/niedzwiadek7-code",
      mail: 'mailto:damiankliber@gmail.com'
    },
    'purple',
    `
Jestem programistą stron internetowych, który łączy pasję do technologii z dbałością o każdy szczegół. Specjalizuję się w tworzeniu nowoczesnych, responsywnych i przyjaznych dla użytkownika witryn, które nie tylko świetnie wyglądają, ale przede wszystkim spełniają cele biznesowe.

W swojej pracy wykorzystuję takie technologie jak HTML, CSS, JavaScript, React oraz backendowe rozwiązania, takie jak Django czy PostgreSQL. Dzięki temu mogę kompleksowo zrealizować każdy projekt – od prostych stron wizytówek po rozbudowane aplikacje webowe.

Moim priorytetem jest zrozumienie potrzeb klienta i dostarczenie rozwiązań, które realnie wspierają rozwój ich biznesu. Tworzę strony unikalne, dostosowane do wymagań każdego projektu, z dbałością o szczegóły zarówno w aspekcie wizualnym, jak i technicznym. Buduję witryny zgodnie z aktualnymi trendami i najlepszymi praktykami, dbając o wysoki standard realizacji i terminowość.

Zaufaj mi, jeśli chcesz wyróżnić swoją markę w sieci. Niezależnie od tego, czy potrzebujesz nowej strony internetowej, odświeżenia istniejącej witryny czy wdrożenia zaawansowanego rozwiązania – jestem tu, by Ci pomóc.
    `,
    'data:image/jpeg;base64,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',
    // 'https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/381079903_2810696955738637_4776506965623009158_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=sYxJ1JQSuwAQ7kNvgHtY0lk&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=AF4JyppOIxXBeetyAZspDaL&oh=00_AYDjWrJ2UbZX5sOiFiBkunqh-8Qkpy24VsidCD-Jb2wjBQ&oe=676CC318',
    [
      new ExperienceModel(
        "Bridge Software",
        new DateRange(new Date(2022, 4, 1), new Date(2024, 11, 31)),
        "Full Stack Developer",
        "https://media.licdn.com/dms/image/v2/C4E0BAQFikNV0I7xjsg/company-logo_200_200/company-logo_200_200/0/1631326930515?e=1743033600&v=beta&t=P6OfkFAFMDJDkbywqT4VdapdgWW95GOYrowUz8PMfc0",
        `
          Podczas 2,5 roku pracy w firmie, całkowicie poświęciłem się rozwojowi i ulepszaniu oprogramowania dla Bridge. Uczestniczyłem w procesach takich jak wdrażanie funkcjonalności żądanych przez naszych klientów, integrowanie bazy danych PostgreSQL z naszym projektem i przechodzenie ze standardowego HTML na React.
          
        `,
        [
          new Badge("AWS", "yellow"),
          new Badge("PostgreSQL", "blue"),
          new Badge("Node.js", "green"),
          new Badge("Express", "blue"),
          new Badge("React", "blue"),
          new Badge("Test Driven Development", "green"),
          new Badge("Mocha", "green"),
          new Badge("Chai", "green"),
        ]
      ),
    ],
    [
      new Project(
        'Travel App',
        'https://travel-app-frontend-henna.vercel.app/assets/basic-CA30UGMq.jpg',
        `
        Jest to projekt, który stworzyłem podczas pisania mojej pracy inżynierskiej.
        Jego założeniem jest to, by użytkownicy mogli planować swoje podróże, dodawać miejsca do odwiedzenia, a także dzielić się swoimi planami z innymi użytkownikami.
        Zamysłem aplikacji było stworzenie serwisu społecznościowego, w którym użytkownicy tworząc plany swoich wycieczek będą udostępniali do aplikacji różne atrakcje do odwiedzenia,
        natomiast inni użytkownicy będą mogli je przeglądać i używać w swoich planach wycieczek. 
        Poza tym aplikacja umożliwia na zbieranie zdjęć z odbytej wycieczki i dzielenie się nimi z innymi użytkownikami. 
        `,
        'https://travel-app-frontend-henna.vercel.app/',
        [
          new Link('Frontend', 'https://travel-app-frontend-henna.vercel.app/'),
          new Link('Backend', 'https://travel-app-backend-henna.herokuapp.com/')
        ],
        [
          new Badge('React', 'blue'),
          new Badge('TypeScript', 'blue'),
          new Badge('PostgresSQL', 'blue'),
          new Badge('NestJS', 'green'),
          new Badge('Vercel', 'black'),
        ]
      ),
      new Project(
        'Explore Places',
        '/images/explore-places.jpeg',
        `
        Jest to aplikacja mobilna, która w założeniu ma przypominać Tindera, jednak zamiast osób zawierać różne miejsca z świata.
        Użytkownik ma możliwość przeglądania różnych miejsc na świecie, a także dodawania swoich ulubionych miejsc do ulubionych.
        Użytkownicy mogą również komentować i oceniać poszczególne miejsca.
        `,
        '',
        [
          new Link('Frontend', 'https://travel-app-frontend-henna.vercel.app/'),
          new Link('Backend', 'https://travel-app-backend-henna.herokuapp.com/')
        ],
        [
          new Badge('React Native', 'blue'),
          new Badge('Django Rest Framework', 'green'),
          new Badge('PostgresSQL', 'blue'),
          new Badge('Vercel', 'black'),
          new Badge('Expo', 'black'),
        ]
      ),
      new Project(
        'Górska Odznaka Turystyczna',
        'https://got-frontend-beige.vercel.app/static/media/theme.55385d4fd5e865cd4d04.jpg',
        `
        Jest to aplikacja webowa, która ma na celu ułatwienie zdobywania górskich odznak turystycznych.
        Aplikacja ma możliwość śledzenie zdobytych odznak i dokumentowanie odbytych przez użytkownika wycieczek.
        Aplikacja pozwola przodownikowi na ocenianie wycieczek turystów i ich zaliczania bądź odrzucania.
        Do aplikacji dołączony jest również panel administracyjny, który pozwala na zarządzanie użytkownikami, trasami, odznakami oraz wycieczkami.
        `,
        'https://got-frontend-beige.vercel.app//',
        [
          new Link('Frontend', 'https://got-frontend-beige.vercel.app/'),
          new Link('Backend', 'https://got-backend-three.vercel.app/')
        ],
        [
          new Badge('React', 'blue'),
          new Badge('TypeScript', 'blue'),
          new Badge('Vercel', 'black'),
          new Badge('Laravel', 'red'),
          new Badge('Leaflet', 'green'),
        ]
      ),
    ]
  )

  const sections = [
    new Section('about', 'O mnie'),
    new Section('experience', 'Doświadczenie'),
    new Section('projects', 'Projekty'),
    new Section('contact', 'Kontakt'),
  ]

  return (
    <>
      <Navbar
        profile={JSON.parse(JSON.stringify(profile))}
        sections={JSON.parse(JSON.stringify(sections))}
      />
      <MainSection profile={JSON.parse(JSON.stringify(profile))} />
      <About profile={JSON.parse(JSON.stringify(profile))} />
      <Experience
        experience={profile.experience}
        mainColor={profile.mainColor}
      />
      <Projects
        projects={profile.projects}
        mainColor={profile.mainColor}
      />
      <Contact
        socialMedia={profile.socialMedia}
        mainColor={profile.mainColor}
      />
    </>
  )
}

export default Demo
