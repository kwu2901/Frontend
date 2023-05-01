import { FunctionComponent } from "react";
import styles from "./Search.module.css";
import { useState, useEffect } from 'react';
import { User } from "../model/UserModel";

const catBreeds = [
  "Breeds",
  "Abyssinian",
  "American Bobtail",
  "American Curl",
  "American Shorthair",
  "American Wirehair",
  "Balinese",
  "Bengal",
  "Birman",
  "Bombay",
  "British Shorthair",
  "Burmese",
  "Burmilla",
  "Chartreux",
  "Chausie",
  "Cornish Rex",
  "Cymric",
  "Devon Rex",
  "Egyptian Mau",
  "Exotic Shorthair",
  "Havana Brown",
  "Himalayan",
  "Japanese Bobtail",
  "Javanese",
  "Korat",
  "LaPerm",
  "Maine Coon",
  "Manx",
  "Munchkin",
  "Nebelung",
  "Norwegian Forest",
  "Ocicat",
  "Oriental",
  "Persian",
  "Pixiebob",
  "Ragdoll",
  "Russian Blue",
  "Savannah",
  "Scottish Fold",
  "Selkirk Rex",
  "Siamese",
  "Siberian",
  "Singapura",
  "Snowshoe",
  "Somali",
  "Sphynx",
  "Tonkinese",
  "Turkish Angora",
  "Turkish Van"
];

const locations = [
  "Locations",
  "Central",
  "Causeway Bay",
  "Tsim Sha Tsui",
  "Mong Kok",
  "Wan Chai",
  "Sheung Wan",
  "Admiralty",
  "Quarry Bay",
  "Yau Ma Tei",
  "Sham Shui Po",
];

const Search: FunctionComponent<{ onSearch: (location: string, gender: string, breed: string) => void }> = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser));
      }
  }, []);
  
  function handleClick() {
    onSearch(location, gender, breed);
  }

  function handleLocationChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "Locations") {
      setLocation("");
    } else {
      setLocation(event.target.value);
    }
  }

  function handleGenderChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "Gender") {
      setGender("");
    } else {
      setGender(event.target.value);
    }
  }

  function handleBreedChange(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "Breeds") {
      setBreed("");
    } else {
      setBreed(event.target.value);
    }
  }

  return (
    <div className={styles.divrow}>
      <div className={styles.selectarea}>
        <div id="locationDropdown" className={styles.div}>
          <select className={styles.location} onChange={handleLocationChange}>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.selectsex}>
        <div id="genderDropdown" className={styles.div}>
          <select className={styles.location} onChange={handleGenderChange}>
            <option value="Gender">Gender</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
      </div>
      <div className={styles.selectanimal}>
        <div id="breedDropdown" className={styles.div}>
          <select className={styles.location} onChange={handleBreedChange}>
            {catBreeds.map((breed, index) => (
              <option key={index} value={breed}>{breed}</option>
            ))}
          </select>
        </div>
      </div>
      <button className={styles.inputbtn} autoFocus onClick={handleClick}>
        <div className={styles.search}>Search</div>
      </button>
      {user === null ? null : 
        (
        <button className={styles.inputbtn1} autoFocus>
          <div className={styles.search}>Add</div>
        </button>
        )}
    </div>
  );
};


export default Search;
