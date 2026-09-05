import { useEffect, useState } from "react";
import axios from "axios";

function parseTSV(csvText) {
  const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
  const headers = rows[0].split("\t"); // Extract headers (assumes the first row is the header row)
  const data = []; // Initialize an array to store parsed data

  // eslint-disable-next-line  no-plusplus
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split("\t"); // Split the row, handling '\r' characters
    const rowObject = {};

    // eslint-disable-next-line  no-plusplus
    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j];
    }
    data.push(rowObject);
  }
  return data;
}

function filterOldEvents(events) {
  const today = new Date();
  return events
    .filter((event) => new Date(event.dateEnd) > today)
    .sort((first, second) => (first.dateStart > second.dateStart ? 1 : -1));
}

const useUpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const googleSpreadSheetExportLink =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ8UB0YKh5h4McE-tfSypnOYEbwtnW3dwat-OwQlPtPgZsXVDIFw_OZ2bEwvujf9XfRfQcsAeA2e5RC/pub?gid=956084020&single=true&output=tsv";
    axios
      .get(googleSpreadSheetExportLink)
      .then((response) => {
        const parsedCsvData = parseTSV(response.data);
        setEvents(filterOldEvents(parsedCsvData));
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error fetching CSV data:", error);
      });
  }, []);

  return events;
};

export default useUpcomingEvents;
