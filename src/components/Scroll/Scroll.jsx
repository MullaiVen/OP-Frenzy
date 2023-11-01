import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Scroll.css";

const Scroll = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const chapters = [
    { name: "Chapter 1: Romance Dawn", date: "Dec 24, 1997" },
    { name: "Chapter 100: The Legend Begins", date: "Feb 02, 2000" },
    { name: "Chapter 1000: Straw Hat Luffy", date: "Jun 04, 2021" },
    {
      name: "Chapter 1001: Battle of Monsters on Onigashima",
      date: "Jun 18, 2021",
    },
    {
      name: "Chapter 1002: Four Emperors vs. New Generation",
      date: "Jun 25, 2021",
    },
    { name: "Chapter 1003: Night on the Board", date: "Jul 09, 2021" },
    { name: "Chapter 1004: Millet Dumplings", date: "Jul 30, 2021" },
    { name: "Chapter 1005: Demon Child", date: "Sep 03, 2021" },
    {
      name: "Chapter 1006: The Honorable Hyogoro the Flower",
      date: "Sep 24, 2021",
    },
    { name: "Chapter 1007: Mr. Raccoon Dog", date: "Sep 31, 2021" },
    {
      name: "Chapter 1008: Leader of the Atamayama Thieves Brigade, Ashura Doji",
      date: "Oct 14, 2021",
    },
    { name: "Chapter 1009: Naraku", date: "Oct 21, 2021" },
    { name: "Chapter 1010: Color of the Supreme King", date: "Nov 04, 2021" },
    { name: "Chapter 1011: The Code of Sweet Beans", date: "Nov 11, 2021" },
    { name: "Chapter 1012: Itch", date: "Nov 18, 2021" },
    { name: "Chapter 1013: Anarchy in the Big Mom", date: "Dec 02, 2021" },
    { name: "Chapter 1014: The Ham", date: "Dec 09, 2021" },
    { name: "Chapter 1015: Chains", date: "Dec 23, 2021" },
  ];

  const filteredChapters = chapters.filter((chapter) =>
    chapter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="Scroll">
      <div className="Scroll-H">
        <input
          className="Scroll-SBar"
          type="text"
          placeholder="Search chapters..."
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="Scroll-Content">
        {filteredChapters.map((chapter) => (
          <Link
            to={`/chapter/${chapter.name.split(" ")[1].split(":")[0]}`}
            key={chapter.name}
            className="Scroll-Item"
          >
            <div>{chapter.name}</div>
            <div>{chapter.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Scroll;
