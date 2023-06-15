import data from "./data5.json" assert { type: "json" };
import fs from "fs-extra";

data.forEach((item) => {
	if (item.tag) {
		item.tags = [...item.tag.split(",").map((t) => t.trim())];
		delete item.tag;
	}
	if (typeof item.tags == "string")
		item.tags = [...item.tags.split(",").map((t) => t.trim())];
	if (!item.tags) item.tags = [];

	delete item.stipendPeriod;
});

console.log(data[0]);

fs.writeJSONSync("./data5.json", data);
