import React from "react";

export default function SchemaData({ selectedSchemas,segmentName }) {
  return (
    <div>
      <h2>Schema Data</h2>
      <h3>{segmentName}</h3>
      <ul>
        {selectedSchemas.map((schema, index) => (
          <li key={index}>
            {schema.label}: {schema.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
