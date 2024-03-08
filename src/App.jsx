// import reactImg from "../assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";
import Header from "../src/components/Header.jsx";
import Student from "../src/components/Student.jsx";
import Teacher from "../src/components/Teacher.jsx";

const reactDescriptions = ["Fundametal", "Crucial", "Core"];

function genRRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// export const userData = {
//   firstName: "Maximilian", // feel free to replace the name value
//   lastName: "Schwarzmüller", // feel free to replace the name value
//   title: "Instructor", // feel free to replace the title value
// };

// Edit the User component code to output the userData data
// Edit the User component code to output the userData data
// export function User() {
//   return (
//     <div id="user" data-testid="user">
//       <h2>
//         TODO: {userData.firstName} {userData.lastName}
//       </h2>
//       <p>TODO: {userData.title}</p>
//     </div>
//   );
// }

export function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// export function CourseGoal({ title, description }) {
//   return (
//     <li>
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </li>
//   );
// }

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Student firstName="Teona" lastName="Naceva" />
      <Teacher teacher="Mimoza Todorova" subject="Web design" />
      <Student firstName="Evgenija" lastName="Damjanova" />
      <Teacher teacher="Mira Taskova" subject="Matematika" />
    </div>
    // <div id="app" data-testid="app">
    //   <h1>Time to Practice</h1>
    //   <p>One course, many goals! 🎯</p>
    //   <ul>
    //     <CourseGoal title="Learn React" description="In-depth" />
    //     <CourseGoal title="Learn Pyton" description="Advanced" />
    //     <CourseGoal title="Learn C#" description="Intermediate" />
    //   </ul>
    // </div>
  );
}

export default App;
