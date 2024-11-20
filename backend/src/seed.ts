import fs from "fs";
const csv = require("csv-parser");
import { Index } from "@upstash/vector";

const index = new Index({
  url: process.env.VECTOR_URL,
  token: process.env.VECTOR_TOKEN,
});

interface Row {
  text: string;
}

async function parseCSV(filePath: string): Promise<Row[]> {
  return new Promise((resolve, reject) => {
    const rows: Row[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (row: any) => {
        rows.push(row);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
        resolve(rows);
      })
      .on("error", (error: Error) => {
        console.error("Error reading CSV file:", error);
        reject(error);
      });
  });
}
const STEP = 30;
const seed = async () => {
  const data = await parseCSV("training_data.csv");
  for (let i = 0; i < data.length; i += STEP) {
    const chunk = data.slice(i, i + STEP);
    const formattedData = chunk.map((row, batchIndex) => ({
      data: row.text,
      id: i + batchIndex,
      metadata: { text: row.text },
    }));
    await index.upsert(formattedData);
  }
};

seed();
