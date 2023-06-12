import data from "./data.json" assert { type: "json" };
import fs from 'fs-extra'

data.forEach(item => {
	if (item.tag) 
		item.tags = [...item.tag.split(",").map(t => t.trim())];
	if (typeof item.tags == "string")
		item.tags = [...item.tags.split(",").map((t) => t.trim())];
	if (!item.tags)
		item.tags=[]
})

console.log(data[0]);

fs.writeJSONSync('./data4.json', data);