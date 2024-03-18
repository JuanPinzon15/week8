import { Data } from "./program8_1";

async function processUser() {
    const data = new Data();

    try {
        await data.add({ id: 1, name: "Audi tt" });
        console.log("Car added");

        await data.update(1, { name: "Mercedes cla200" });
        console.log("Car updated");

        const user = await data.get(1);
        console.log("Car retrieved:", user);

        await data.delete({ id: 1, name: "Lexus 570" });
        console.log("Car deleted");
    } catch (error) {
        console.log(error)
    }
}

processUser();