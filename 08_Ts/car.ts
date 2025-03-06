type LicensePlate = `KA-${string}-${number}${"E" | "H" | ""}`;

interface Driver {
  name: string;
  licensePlates: LicensePlate[];
}

interface Person {
  name: string;
  birthDate: string;
  carType?: "oldtimer" | "electric";
}

function getDriversWithPlates(people: Person[]) {
  let drivers: Driver[] = [];

  for (let person of people) {
    const initials = person.name
      .split(" ")
      .map((n) => n[0])
      .join("");
    const birthDate = new Date(person.birthDate);
    const birthYear = birthDate.getFullYear();
    const birthMonth = parseInt(
      (birthDate.getMonth() + 1).toString().padStart(2, "0")
    );
    const birthDay = parseInt(birthDate.getDate().toString().padStart(2, "0"));

    // H- oder E-Kennzeichen hinzufügen, falls angegeben
    let suffix: "E" | "H" | "" = "";
    if (person.carType === "oldtimer") suffix = "H";
    else if (person.carType === "electric") suffix = "E";

    let licensePlate1: LicensePlate | undefined = `KA-${initials}-${parseInt(
      birthDay + "" + birthMonth
    )}${suffix}`;
    let licensePlate2: LicensePlate = `KA-${initials}-${birthYear}${suffix}`;

    const age =
      new Date().getFullYear() -
      birthYear -
      (birthMonth < new Date().getMonth() + 1 ||
      (birthMonth == new Date().getMonth() + 1 &&
        new Date().getDate() <= birthDay)
        ? 0
        : 1);

    let plate: LicensePlate = licensePlate1;
    if (age >= 18) {
      drivers.push({
        name: person.name,
        licensePlates: [licensePlate1, licensePlate2],
      });
    }
  }

  return drivers;
}

// Beispielnutzung
const people: Person[] = [
  { name: "Max Mustermann", birthDate: "2003-05-15", carType: "oldtimer" },
  { name: "Lisa Schmidt", birthDate: "2010-11-22" },
  { name: "Hans Müller", birthDate: "1990-07-10", carType: "electric" },
];

console.log(getDriversWithPlates(people));
