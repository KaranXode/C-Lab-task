import React, { useState } from "react";
import removeIcon from "../Assets/remove-ic.svg";
import arrowIcon from "../Assets/arrow_back.svg";
import Button from "./Button";
import Typography from "./Typography";
import SchemaData from "./SchemaData";

function SegmentView({ handleClose }) {
  const [segmentName, setSegmentName] = useState("");
  const [selectedSchemas, setSelectedSchemas] = useState([
    { label: "Select", value: "Select" },
  ]);
  const [schemas, setSchemas] = useState([
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" },
  ]);
  const maxDropdowns = schemas.length;

  const handleSegmentNameChange = (e) => {
    setSegmentName(e.target.value);
  };

  const handleAddSchema = () => {
    if (selectedSchemas.length < maxDropdowns) {
      setSelectedSchemas([...selectedSchemas, { label: "", value: "" }]);
    }
  };

  const handleRemoveSchema = (index) => {
    const updatedSchemas = [...selectedSchemas];
    updatedSchemas.splice(index, 1);
    setSelectedSchemas(updatedSchemas);
  };

  const handleSaveSegment = () => {
    const data = {
      segment_name: segmentName,
      schema: selectedSchemas
        .filter((schema) => schema.value !== "")
        .map((schema) => ({ [schema.value]: schema.label })),
    };
    console.log(data); // Send data to server here
  };

  return (
    <div className="popup-content">
      <div className="popup-wrap">
        <Typography title="Enter the Name of the Segement" />
        <input
          type="text"
          placeholder="Segment Name"
          value={segmentName}
          onChange={handleSegmentNameChange}
          className="segement-input"
        />
        <Typography title="To save your segement,you need to add the schemas to build the query" />

        <div className="popup-dot">
          <div>
            <span className="greenDot"> </span> - User Traits
          </div>
          <div>
            <span className="redDot"> </span> - Group Trails
          </div>
        </div>
        <div className="blue-box">
          {selectedSchemas.map((schema, index) => (
            <div key={index} className="schema-row">
              <div className="popup-dot">
                <span
                  className={
                    schema.value === "account_name" ? "redDot" : "greenDot"
                  }
                ></span>
              </div>
              <select
                className="segement-input segment-w"
                value={schema.value}
                onChange={(e) => {
                  const updatedSchemas = [...selectedSchemas];
                  updatedSchemas[index] = schemas.find(
                    (s) => s.value === e.target.value
                  );
                  setSelectedSchemas(updatedSchemas);
                }}
              >
                <option value={schema.value}>{schema.label}</option>
                {schemas.map(
                  (option) =>
                    !selectedSchemas.some(
                      (selected) => selected.value === option.value
                    ) && (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    )
                )}
              </select>
              <img src={arrowIcon} alt="down-arrow" className="downIcon" />
              {index !== 0 && (
                <button
                  className="remove-ic"
                  onClick={() => handleRemoveSchema(index)}
                >
                  <img src={removeIcon} alt="remove" />
                </button>
              )}
            </div>
          ))}
        </div>
        {selectedSchemas.length < maxDropdowns && (
          <a href="#" onClick={handleAddSchema} className="add-schema-btn">
            + Add New Schema
          </a>
        )}
      </div>
      <div className="save-btn">
        <Button
          className="btn btn-primary"
          onClick={handleSaveSegment}
          label="Save Segment"
        />
        <Button
          className="btn cancel-btn"
          onClick={handleClose}
          label="Cancel"
        />
      </div>
      {/* <SchemaData selectedSchemas={selectedSchemas} segmentName ={segmentName} /> */}
    </div>
  );
}

export default SegmentView;
