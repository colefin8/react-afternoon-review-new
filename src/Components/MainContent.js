import React from "react";
import "../App.css";

function MainContent(props) {
  let { data } = props;
  return (
    <div className="mainContent">
      <div className="details">
        <div className="tracker">
          {data[props.index].id}/{data.length}
        </div>
        <div className="fullName">
          {`${data[props.index].name.first} ${data[props.index].name.last}`}
        </div>
        <div className="description">
          <div className="personDescription">
            From:
            <div></div>
            <div className="genericLabel">{`${data[props.index].city}, ${data[props.index].country}`}</div>
          </div>
          <div className="personDescription">
            Job Title:
            <div></div>
            <div className="genericLabel">{data[props.index].title}</div>
          </div>
          <div className="personDescription">
            Employer:
            <div></div>
            <div className="genericLabel">{data[props.index].employer}</div>
          </div>
        </div>
        <div className="favMovies">
          <div className="personDescription">Favorite Movies:</div>
          <ol className="movieList">
            <li className="movieStyle">
              {data[props.index].favoriteMovies[0]}
            </li>
            <li className="movieStyle">
              {data[props.index].favoriteMovies[1]}
            </li>
            <li className="movieStyle">
              {data[props.index].favoriteMovies[2]}
            </li>
          </ol>
        </div>
      </div>
      <div className="buttonsContainer">
        <div>
          <button
            className="noColorButtons"
            onClick={() => props.handlePrevious()}
          >{`< Previous`}</button>
        </div>
        <div className="buttonsGroup">
          <button className="colorButtons">Edit</button>
          <button className="colorButtons">Delete</button>
          <button className="colorButtons">New</button>
        </div>
        <div>
          <button
            className="noColorButtons"
            onClick={() => props.handleNext()}
          >{`Next >`}</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
