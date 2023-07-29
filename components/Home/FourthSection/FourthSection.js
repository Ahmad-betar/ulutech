import React from "react";
import classes from "./FourthSection.module.css";



const FourthSection = (props) => {



  const {team} = props;


  // const e = [
  //   { id: 1, name: "Eminem", job: "fron-end", url: "/16.png" },
  //   { id: 2, name: "Ahmad Betar", job: "fron-end", url: "/7.png" },
  //   { id: 3, name: "Ahmad Betar", job: "fron-end", url: "/7.png" },
  //   { id: 4, name: "Ahmad Betar", job: "fron-end", url: "/7.png" },
  //   { id: 5, name: "Ahmad Betar", job: "fron-end", url: "/7.png" },
  //   { id: 6, name: "Ahmad Betar", job: "fron-end", url: "/7.png" },
  // ];

  return (
    <div className={classes.FourthSection}>
      <h3 className={classes.h3}>Team</h3>
      <hr className={classes.hr} />
      <div className={classes.team}>
        {team?.map((person) => {
          return (
            <div key={person.id} id={person.id} className={classes.person}>
              <img src={person.url} className={classes.image}></img>

              <h4 className={classes.h4}>{person.name}</h4>
              <p className={classes.p}>{person.job}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourthSection;
