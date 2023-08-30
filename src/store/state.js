import Team from "./../assets/image/Team.jpeg";
import Henry from "./../assets/image/Henry.jpeg";
import profile from  "./../assets/image/profile-pic.jpeg"

const newTeam = Team;
const newHenry = Henry;
const Appstate = {
  Foryou_Posts: [
    {
      id: 1,
      image: newTeam,
      text: "Whats stopping this team from winning the Premier League",
      user: {
        firstname: "Divine",
        lastname: "Christian",
        username: "Divyblaq",
        profilepic: profile,
      },
    },
    {
      id: 2,
      text: "Real Madrid could hijack Aymeric Laporte’s move to Al Nassr. The #ManCity defender is currently weighing up whether he fancies Saudi Arabia, and is also waiting to see if the La Liga giants show any interest after Eder Militao's injury.",
      user: {
        firstname: "Dani-x",
        lastname: "",
        username: "incredibleDanix",
        profilepic: profile,
      },
    },
    {
      id: 3,
      text: "Nigerian guys(name) that will never cheat on you?Lets have it",
      user: {
        firstname: "August",
        lastname: "Rhymez",
        username: "August24",
        profilepic: profile,
      },
    },
    {
      id: 4,
      image: newHenry,
      user: {
        firstname: "Somto",
        lastname: "Kolapo",
        username: "Somto23",
        profilepic: profile,
      },
    },
  ],
  Following_Post: [
    {
      id: 1,
      image: newTeam,
      text: "Whats stopping this team from winning the Premier League",
      user: {
        firstname: "Divine",
        lastname: "Christian",
        username: "Divyblaq",
        profilepic: profile,
      },
    },
    {
      id: 2,
      text: "Real Madrid could hijack Aymeric Laporte’s move to Al Nassr. The #ManCity defender is currently weighing up whether he fancies Saudi Arabia, and is also waiting to see if the La Liga giants show any interest after Eder Militao's injury.",
      user: {
        firstname: "Dani-x",
        lastname: "",
        username: "incredibleDanix",
        profilepic: profile,
      },
    },
    {
      id: 3,
      text: "Nigerian guys(name) that will never cheat on you?Lets have it",
      user: {
        firstname: "August",
        lastname: "Rhymez",
        username: "August24",
        profilepic: profile,
      },
    },
    {
      id: 4,
      image: newHenry,
      user: {
        firstname: "Somto",
        lastname: "Kolapo",
        username: "Somto23",
        profilepic: profile,
      },
    },
  ],
};

export default Appstate;
