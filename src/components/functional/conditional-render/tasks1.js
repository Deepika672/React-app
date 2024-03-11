// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// export default function List() {
//   const listItems = people.map((person) => <li>{person}</li>);
//   return <ul>{listItems}</ul>;
// }
// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//     accomplishment: "spaceflight calculations",
//   },
//   {
//     id: 1,
//     name: "Mario José Molina-Pasquel Henríquez",
//     profession: "chemist",
//     accomplishment: "discovery of Arctic ozone hole",
//   },
//   {
//     id: 2,
//     name: "Mohammad Abdus Salam",
//     profession: "physicist",
//     accomplishment: "electromagnetism theory",
//   },
//   {
//     id: 3,
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//     accomplishment: "pioneering cortisone drugs, steroids and birth control pills",
//   },
//   {
//     id: 4,
//     name: "Subrahmanyan Chandrasekhar",
//     profession: "astrophysicist",
//     accomplishment: "white dwarf star mass calculations",
//   },
// ];
// export default function List() {
//   const chemists = people.filter((person) => person.profession === "chemist");
//   const listItems = chemists.map((person) => (
//     <li>
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }
import { getImageUrl } from "./ids";
export const people = [{
    id: 0, // Used in JSX as a key
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1, // Used in JSX as a key
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2, // Used in JSX as a key
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3, // Used in JSX as a key
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4, // Used in JSX as a key
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  export default function List() {
    const listItems = people.map(person =>
      <li key={person.id}>
        <img
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
        </p>
      </li>
    );
    return <ul>{listItems}</ul>;
  }
  