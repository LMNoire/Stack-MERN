import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <NoteCard
          title="Meeting"
          date="1st May 2024"
          content="Meeting"
          tags="#Meeting"
          isPinned={true}
          onEdit={() => {}}
          onDelete={() => {}}
          onPinNote={() => {}}
        />
      </div>
    </>
  );
};

export default Home;
